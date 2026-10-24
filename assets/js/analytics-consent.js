/* Shared basic consent mode: no vendor code or requests before opt-in. */
(function () {
  'use strict';
  if (window.portfolioAnalyticsConsent) return;
  window.portfolioAnalyticsConsent = true;

  var key = 'portfolio.analytics-consent.v1';
  var lifetime = 180 * 24 * 60 * 60 * 1000;
  var gaId = 'G-M2D682VTWG';
  var started = false;
  var choice = readChoice();
  var expiryTimer;
  function getCopy() {
    return document.documentElement.lang.indexOf('fr') === 0 ? {
    title: 'Mesure d’audience',
    text: 'Avec votre accord, Google Analytics mesure les visites et Microsoft Clarity enregistre les interactions (clics, défilement et relecture de session) pour améliorer ce portfolio. Des cookies de mesure d’audience sont utilisés. La publicité reste désactivée. Vous pouvez refuser ou retirer votre accord à tout moment via « Confidentialité ». Votre choix est conservé 180 jours sur cet appareil.',
    accept: 'Accepter', reject: 'Refuser', settings: 'Confidentialité', close: 'Fermer',
    google: 'Confidentialité Google', microsoft: 'Confidentialité Microsoft'
  } : {
    title: 'Analytics preferences',
    text: 'With your permission, Google Analytics measures visits and Microsoft Clarity records interactions (clicks, scrolling and session replay) to improve this portfolio. Analytics cookies are used. Advertising stays disabled. You can decline or withdraw permission at any time using “Privacy settings”. Your choice is saved for 180 days on this device.',
    accept: 'Accept', reject: 'Decline', settings: 'Privacy settings', close: 'Close',
    google: 'Google privacy', microsoft: 'Microsoft privacy'
    };
  }
  var copy = getCopy();

  function readChoice() {
    try {
      var saved = JSON.parse(localStorage.getItem(key));
      if (saved && typeof saved.allowed === 'boolean' &&
          Number.isFinite(saved.expires) && saved.expires > Date.now() &&
          saved.expires <= Date.now() + lifetime) return saved;
    } catch (_) { /* Unavailable storage means ask again on the next page. */ }
    return null;
  }

  function gtag() { window.dataLayer.push(arguments); }

  function startAnalytics() {
    if (started) return;
    started = true;
    window['ga-disable-' + gaId] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = gtag;
    gtag('consent', 'default', {
      analytics_storage: 'granted', ad_storage: 'denied',
      ad_user_data: 'denied', ad_personalization: 'denied'
    });
    gtag('js', new Date());
    gtag('config', gaId, {
      allow_google_signals: false, allow_ad_personalization_signals: false
    });
    var google = document.createElement('script');
    google.async = true;
    google.src = 'https://www.googletagmanager.com/gtag/js?id=' + gaId;
    document.head.appendChild(google);

    // Official Microsoft tracking snippet, executed once and only after opt-in.
    (function(c,l,a,r,i,t,y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "z2qjbnft0f");
    window.clarity('consentv2', { analytics_Storage: 'granted', ad_Storage: 'denied' });
  }

  function clearAnalyticsCookies() {
    var domains = location.hostname.split('.');
    var paths = location.pathname.split('/');
    // Remove vendor first-party cookies at host/parent domains and path scopes.
    document.cookie.split(';').forEach(function (entry) {
      var name = entry.trim().split('=')[0];
      if (!/^(_ga(?:_|$)|_gid$|_gat(?:_|$)|_clck$|_clsk$)/.test(name)) return;
      for (var p = 0; p < paths.length; p++) {
        var path = paths.slice(0, p).join('/') || '/';
        var cookie = name + '=; Max-Age=0; path=' + path + '; SameSite=Lax';
        document.cookie = cookie;
        for (var d = 0; d < domains.length - 1; d++) {
          document.cookie = cookie + '; domain=' + domains.slice(d).join('.');
        }
      }
    });
  }

  function stopAnalytics() {
    window['ga-disable-' + gaId] = true;
    if (started) {
      gtag('consent', 'update', { analytics_storage: 'denied', ad_storage: 'denied',
        ad_user_data: 'denied', ad_personalization: 'denied' });
      window.clarity('consentv2', { analytics_Storage: 'denied', ad_Storage: 'denied' });
    }
    clearAnalyticsCookies();
    // Removing a script element cannot unload a running recorder. Reload with
    // persisted denial to stop both SDKs, including Clarity's cookieless mode.
    if (started) location.reload();
  }

  var panel = document.createElement('section');
  panel.id = 'analytics-consent';
  panel.className = 'analytics-consent';
  panel.setAttribute('aria-labelledby', 'analytics-consent-title');
  panel.hidden = true;
  var heading = document.createElement('h2');
  heading.id = 'analytics-consent-title';
  heading.textContent = copy.title;
  var text = document.createElement('p');
  text.textContent = copy.text;
  panel.append(heading, text);
  var links = document.createElement('p');
  [ [copy.google, 'https://policies.google.com/privacy'],
    [copy.microsoft, 'https://privacy.microsoft.com/privacystatement'] ].forEach(function (item) {
    var link = document.createElement('a');
    link.textContent = item[0];
    link.href = item[1];
    links.appendChild(link);
  });
  panel.appendChild(links);
  var actions = document.createElement('div');
  actions.className = 'analytics-consent-actions';
  function button(label, parent, handler) {
    var element = document.createElement('button');
    element.type = 'button';
    element.textContent = label;
    element.addEventListener('click', handler);
    parent.appendChild(element);
    return element;
  }
  function scheduleExpiry() {
    clearTimeout(expiryTimer);
    if (!choice) return;
    // Browser timer delays are signed 32-bit integers.
    expiryTimer = setTimeout(function () {
      if (Date.now() >= choice.expires) {
        choice = null;
        try { localStorage.removeItem(key); } catch (_) { /* No storage. */ }
        stopAnalytics();
        showPanel(false);
      } else scheduleExpiry();
    }, Math.min(choice.expires - Date.now(), 2147483647));
  }
  function save(allowed) {
    choice = { allowed: allowed, expires: Date.now() + lifetime };
    try { localStorage.setItem(key, JSON.stringify(choice)); } catch (_) { /* Page-only choice. */ }
    panel.hidden = true;
    settings.hidden = false;
    settings.setAttribute('aria-expanded', 'false');
    settings.focus();
    if (allowed) startAnalytics();
    else stopAnalytics();
    scheduleExpiry();
  }
  var accept = button(copy.accept, actions, function () { save(true); });
  var reject = button(copy.reject, actions, function () { save(false); });
  var close = button(copy.close, actions, function () {
    panel.hidden = true;
    settings.setAttribute('aria-expanded', 'false');
    settings.focus();
  });
  panel.appendChild(actions);
  document.body.appendChild(panel);
  var settings = button(copy.settings, document.body, function () { showPanel(true); });
  settings.className = 'analytics-privacy-settings';
  settings.setAttribute('aria-controls', panel.id);
  settings.setAttribute('aria-expanded', 'false');
  function showPanel(focus) {
    close.hidden = !choice;
    panel.hidden = false;
    settings.setAttribute('aria-expanded', 'true');
    if (focus) actions.querySelector('button').focus();
  }
  panel.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && choice) close.click();
  });

  // The PACO showcase changes language without loading a new document.
  new MutationObserver(function () {
    copy = getCopy();
    heading.textContent = copy.title;
    text.textContent = copy.text;
    accept.textContent = copy.accept;
    reject.textContent = copy.reject;
    close.textContent = copy.close;
    settings.textContent = copy.settings;
    links.children[0].textContent = copy.google;
    links.children[1].textContent = copy.microsoft;
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });

  if (choice && choice.allowed) startAnalytics();
  else clearAnalyticsCookies();
  if (!choice) showPanel(false);
  scheduleExpiry();

  window.addEventListener('storage', function (event) {
    if (event.key === key || event.key === null) location.reload();
  });
  window.addEventListener('pageshow', function (event) {
    // Recheck consent when a browser restores an old document from its cache.
    if (event.persisted) location.reload();
  });
}());
