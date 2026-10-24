// Optional browser verification; Playwright is a test-only external tool.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

function htmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : file.endsWith('.html') ? [file] : [];
  });
}
const pages = [...htmlFiles('en'), ...htmlFiles('fr'), 'paco-showcase/index.html'];
for (const file of pages) {
  const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  const scripts = html.match(/<script defer src="[^"]*analytics-consent\.js\?v=2"/g) || [];
  assert.equal(scripts.length, 1, file);
  assert.ok(!/analytics-consent\.css|googletagmanager\.com|clarity\.ms\/tag|gtag\(/.test(html), file);
  const relative = html.match(/src="([^"]*analytics-consent\.js)\?v=2"/)[1];
  assert.ok(fs.existsSync(path.resolve(path.dirname(file), relative)), file);
}
console.log('PASS: single analytics loader and disabled consent stylesheet on ' + pages.length + ' pages.');

(async () => {
  const browser = await chromium.launch({
    executablePath: process.env.BROWSER_EXECUTABLE || undefined, headless: true
  });
  try {
    const context = await browser.newContext();
    // Existing saved choices no longer control automatic loading.
    await context.addInitScript(() => {
      localStorage.setItem('portfolio.analytics-consent.v1', JSON.stringify({
        allowed: false, expires: Date.now() + 86400000
      }));
      sessionStorage.setItem('portfolio-language', location.pathname.includes('/fr/') ? 'fr' : 'en');
    });
    const page = await context.newPage();
    const errors = [];
    const vendors = [];
    page.on('pageerror', error => errors.push(error.message));
    await context.route('**/*', async route => {
      const url = route.request().url();
      if (url.includes('clarity.ms/tag/') || url.includes('googletagmanager.com/gtag/js')) {
        vendors.push(url);
        await route.fulfill({ contentType: 'application/javascript', body: '/* test stub */' });
      } else if (!url.startsWith('http://127.0.0.1:4189/')) await route.abort();
      else await route.continue();
    });

    for (const file of ['en/index.html', 'fr/index.html', 'en/projects/f1.html', 'paco-showcase/index.html']) {
      const before = vendors.length;
      await page.goto('http://127.0.0.1:4189/' + file, { waitUntil: 'domcontentloaded' });
      await page.waitForFunction(() => window.clarity && window.gtag);
      await page.waitForFunction(() => [...document.scripts].filter(script =>
        /clarity.ms\/tag\/|googletagmanager.com\/gtag\/js/.test(script.src)
      ).every(script => script.async));
      await page.waitForTimeout(100);
      assert.equal(vendors.length, before + 2, file);
      assert.equal(await page.locator('#analytics-consent, .analytics-privacy-settings').count(), 0, file);
      const state = await page.evaluate(() => ({
        scripts: [...document.scripts].map(script => script.src),
        ga: window.dataLayer.map(entry => Array.from(entry)),
        clarityCalls: window.clarity.q || []
      }));
      assert.equal(state.scripts.filter(src => src.includes('clarity.ms/tag/z2qjbnft0f')).length, 1);
      assert.equal(state.scripts.filter(src => src.includes('googletagmanager.com/gtag/js?id=G-M2D682VTWG')).length, 1);
      assert.equal(state.ga.filter(entry => entry[0] === 'config' && entry[1] === 'G-M2D682VTWG').length, 1);
      assert.ok(!state.ga.some(entry => entry[0] === 'consent'));
      assert.equal(state.clarityCalls.length, 0);
      await page.addScriptTag({ content: fs.readFileSync('assets/js/analytics-consent.js', 'utf8') });
      assert.equal(await page.locator('script[src*="clarity.ms/tag/"]').count(), 1);
      assert.equal(vendors.length, before + 2);
    }
    // PACO changes language without navigating or reinitializing analytics.
    if (await page.locator('body').evaluate(el => el.classList.contains('language-dialog-open'))) {
      await page.locator('[data-language-choice="en"]').click();
    }
    const before = vendors.length;
    await page.locator('[data-language="fr"]').first().click();
    assert.equal(vendors.length, before);
    assert.equal(await page.locator('#analytics-consent, .analytics-privacy-settings').count(), 0);
    assert.deepEqual(errors, []);
    console.log('PASS: automatic GA4/Clarity loading, async scripts, correct IDs, no consent UI, no duplicate initialization, EN/FR/PACO navigation; no JavaScript errors.');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exit(1); });
