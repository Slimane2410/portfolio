// Optional browser verification; Playwright is a test-only external tool.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
// Every published content document must use exactly one consent loader.
const path = require('node:path');
function htmlFiles(dir) {
 return fs.readdirSync(dir, {withFileTypes:true}).flatMap(entry => {
   const file=path.join(dir,entry.name);
   return entry.isDirectory() ? htmlFiles(file) : file.endsWith('.html') ? [file] : [];
 });
}
const pages=[...htmlFiles('en'),...htmlFiles('fr'),'paco-showcase/index.html'];
for(const file of pages) {
 const html=fs.readFileSync(file,'utf8');
 assert.equal((html.match(/<script defer src="[^"]*analytics-consent\.js"/g)||[]).length,1,file);
 assert.equal((html.match(/href="[^"]*analytics-consent\.css"/g)||[]).length,1,file);
 assert.ok(!/googletagmanager\.com|clarity\.ms\/tag|gtag\(/.test(html),file);
 const relative=html.match(/src="([^"]*analytics-consent\.js)"/)[1];
 assert.ok(fs.existsSync(path.resolve(path.dirname(file),relative)),file);
}
console.log('PASS: single consent loader and no inline vendor scripts on '+pages.length+' content pages.');
(async () => {
 const browser = await chromium.launch({executablePath:process.env.BROWSER_EXECUTABLE || undefined, headless:true});
 const ctx = await browser.newContext();
 const page = await ctx.newPage();
 const errors=[]; const vendors=[];
 page.on('pageerror', e=>errors.push(e.message));
 await ctx.route('**/*', async route=>{
   const url=route.request().url();
   if(url.includes('clarity.ms/tag/') || url.includes('googletagmanager.com/gtag/js')) {
     vendors.push(url); await route.fulfill({contentType:'application/javascript',body:'/* vendor stub: inspect bootstrap queues without sending test visits */'});
   } else if(!url.startsWith('http://127.0.0.1:4189/')) await route.abort();
   else await route.continue();
 });
 async function dismissLanguage(p) {
   const language = p.locator('.language-dialog-choice[data-language="en"], [data-language-choice="en"]');
   if (await p.locator('body').evaluate(el=>el.classList.contains('language-dialog-open'))) await language.click();
 }
 const go=async path=>{
   if (/^(en|fr)\//.test(path) && page.url().startsWith('http://127.0.0.1:4189/')) {
     await page.evaluate(lang=>sessionStorage.setItem('portfolio-language',lang),path.split('/')[0]);
   }
   await page.goto('http://127.0.0.1:4189/'+path,{waitUntil:'domcontentloaded'});
   await dismissLanguage(page);
 };
 await go('en/index.html');
 await page.locator('#analytics-consent').waitFor({state:'visible'});
 assert.equal(vendors.length,0);
 await page.getByRole('button',{name:'Decline',exact:true}).click();
 await go('fr/projects/f1.html');
 assert.equal(vendors.length,0);
 assert.equal(await page.locator('#analytics-consent').isVisible(),false);
 await page.getByRole('button',{name:'Confidentialité',exact:true}).click();
 await page.getByRole('button',{name:'Accepter',exact:true}).click();
 await page.waitForFunction(()=>window.clarity && document.querySelectorAll('script[src*="clarity.ms/tag/"]').length===1);
 await page.waitForTimeout(200);
 assert.equal(vendors.length,2);
 const queued=await page.evaluate(()=>({
   ga:window.dataLayer.map(a=>Array.from(a)), clarity:window.clarity.q.map(a=>Array.from(a)),
   async:[...document.scripts].filter(s=>/clarity.ms|googletagmanager/.test(s.src)).every(s=>s.async)
 }));
 assert.equal(queued.async,true);
 assert.equal(queued.ga.filter(a=>a[0]==='config'&&a[1]==='G-M2D682VTWG').length,1);
 assert.equal(queued.ga[0][2].ad_storage,'denied');
 assert.deepEqual(queued.clarity[0],['consentv2',{analytics_Storage:'granted',ad_Storage:'denied'}]);
 await page.addScriptTag({content:fs.readFileSync('assets/js/analytics-consent.js','utf8')});
 assert.equal(await page.locator('script[src*="clarity.ms/tag/"]').count(),1);
 assert.equal(await page.locator('.analytics-privacy-settings').count(),1);
 await page.evaluate(()=>{document.cookie='_ga=test; path=/';document.cookie='_clck=test; path=/';});
 await page.getByRole('button',{name:'Confidentialité',exact:true}).click();
 await Promise.all([page.waitForEvent('load'),page.getByRole('button',{name:'Refuser',exact:true}).click()]);
 assert.equal(vendors.length,2);
 assert.equal(await page.locator('script[src*="clarity.ms/tag/"]').count(),0);
 assert.equal((await ctx.cookies()).filter(c=>/^_ga|^_cl/.test(c.name)).length,0);
 await go('paco-showcase/index.html');
 assert.equal(await page.locator('.analytics-privacy-settings').count(),1);
 assert.equal(vendors.length,2);
 // Shared consent: a change in another tab must reload the current page.
 const other=await ctx.newPage();
 await other.goto('http://127.0.0.1:4189/en/resume.html');
 await Promise.all([page.waitForEvent('load'),other.evaluate(()=>localStorage.removeItem('portfolio.analytics-consent.v1'))]);
 assert.equal(await page.locator('#analytics-consent').isVisible(),true);
 await other.close();
 // Expired or malformed decisions fail closed.
 await page.evaluate(()=>localStorage.setItem('portfolio.analytics-consent.v1',JSON.stringify({allowed:true,expires:Date.now()-1000})));
 await go('en/projects.html');
 assert.equal(vendors.length,2);
 assert.equal(await page.locator('#analytics-consent').isVisible(),true);
 // Keyboard operation, narrow viewport and both translations.
 await page.setViewportSize({width:375,height:667});
 if(process.env.ANALYTICS_SCREENSHOT) await page.screenshot({path:process.env.ANALYTICS_SCREENSHOT});
 assert.equal(await page.locator('#analytics-consent p').first().evaluate(el=>getComputedStyle(el).color),'rgb(247, 247, 247)');
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.getByRole('button',{name:'Privacy settings',exact:true}).click();
 assert.equal(await page.evaluate(()=>document.activeElement.textContent),'Accept');
 await page.getByRole('button',{name:'Accept',exact:true}).click();
 await page.waitForTimeout(100);
 const before=vendors.length;
 for(const path of ['en/experience.html','fr/index.html','paco-showcase/index.html']) {
   await go(path);
   await page.waitForTimeout(100);
   assert.equal(await page.locator('script[src*="clarity.ms/tag/"]').count(),1,path);
 }
 assert.equal(vendors.length,before+6);
 // PACO's language changes in place must also translate the consent UI.
 await page.locator('[data-language="fr"]').first().click();
 await page.getByRole('button',{name:'Confidentialité',exact:true}).waitFor();
 assert.deepEqual(errors,[]);
 // No access to localStorage: opt-in is valid only for this document.
 const blocked=await browser.newContext();
 await blocked.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('blocked')}}));
 const bp=await blocked.newPage();
 await blocked.route(/clarity.ms|googletagmanager.com/, r=>r.fulfill({contentType:'application/javascript',body:''}));
 await bp.goto('http://127.0.0.1:4189/en/resume.html');
 assert.equal(await bp.locator('script[src*="clarity.ms/tag/"]').count(),0);
 await dismissLanguage(bp);
 await bp.getByRole('button',{name:'Accept',exact:true}).click();
 assert.equal(await bp.locator('script[src*="clarity.ms/tag/"]').count(),1);
 await bp.reload();
 assert.equal(await bp.locator('script[src*="clarity.ms/tag/"]').count(),0);
 await blocked.close();
 console.log('PASS: first visit, denial, acceptance, async queues, duplicate guard, withdrawal/cookie deletion, cross-tab, expiry, navigation, PACO, mobile, keyboard, blocked storage; no JavaScript errors.');
 await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
