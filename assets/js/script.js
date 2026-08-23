/* script.js - Dashboard layout and bilingual portfolio navigation */

const PORTFOLIO_LANGUAGE_KEY = "portfolio-language";

function isFrenchPortfolioPage() {
  return window.location.pathname.split("/").filter(Boolean).includes("fr");
}

function getStoredPortfolioLanguage() {
  try {
    const language = window.sessionStorage.getItem(PORTFOLIO_LANGUAGE_KEY);
    return language === "en" || language === "fr" ? language : null;
  } catch (_) {
    return null;
  }
}

function storePortfolioLanguage(language) {
  try {
    window.sessionStorage.setItem(PORTFOLIO_LANGUAGE_KEY, language);
  } catch (_) {
    // The language switch still works when session storage is unavailable.
  }
}

function getLanguageCounterpart(language) {
  const url = new URL(window.location.href);
  const parts = url.pathname.split("/");
  const languageIndex = parts.findIndex((part) => part === "en" || part === "fr");

  if (languageIndex !== -1) {
    parts[languageIndex] = language;
  }

  url.pathname = parts.join("/").replace(/\/{2,}/g, "/");
  return url.href;
}

const storedPortfolioLanguage = getStoredPortfolioLanguage();
const currentPortfolioLanguage = isFrenchPortfolioPage() ? "fr" : "en";

if (storedPortfolioLanguage && storedPortfolioLanguage !== currentPortfolioLanguage) {
  window.location.replace(getLanguageCounterpart(storedPortfolioLanguage));
}

document.addEventListener("DOMContentLoaded", function() {
  const language = isFrenchPortfolioPage() ? "fr" : "en";
  document.documentElement.lang = language;
  initLanguageControls(language);
  
  // 1. GESTION AUTOMATIQUE DU MENU ACTIF
  // Ça permet de surligner le bon onglet dans la sidebar selon la page ouverte
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll('.nav-item');

  navLinks.forEach(link => {
    // On nettoie d'abord (au cas où il y aurait des restes)
    link.classList.remove('active');
    
    // Si le lien correspond à la page actuelle, on l'active
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });

  // 1b. Menu mobile : bouton pour afficher/masquer la navigation
  const sidebar = document.querySelector('.sidebar');
  const navContainer = document.querySelector('.nav-links');
  if (sidebar && navContainer && !sidebar.querySelector('.mobile-menu-toggle')) {
    const menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.className = 'mobile-menu-toggle';
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.innerHTML = '<i class="fas fa-bars"></i> Menu';
    menuButton.setAttribute('aria-label', language === 'fr' ? 'Afficher ou masquer la navigation' : 'Show or hide navigation');

    menuButton.addEventListener('click', () => {
      const isCollapsed = sidebar.classList.toggle('mobile-collapsed');
      menuButton.setAttribute('aria-expanded', String(!isCollapsed));
    });

    sidebar.insertBefore(menuButton, navContainer);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1024) {
        sidebar.classList.remove('mobile-collapsed');
        menuButton.setAttribute('aria-expanded', 'true');
      }
    });
  }

  // 2. OBSERVATEUR D'INTERSECTION (ANIMATIONS)
  // Déclenche l'animation 'active' quand un élément .reveal entre dans l'écran
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal, .slide-up").forEach(el => {
    observer.observe(el);
  });

  // 3. INITIALISATION DE LA LIGHTBOX (Si elle n'existe pas dans le HTML)
  if (!document.getElementById('lightbox')) {
    const lightboxDiv = document.createElement('div');
    lightboxDiv.id = 'lightbox';
    lightboxDiv.style.display = 'none'; // Caché par défaut
    
    // Structure HTML de la lightbox
    lightboxDiv.innerHTML = `
      <div class="lightbox-overlay" onclick="closeLightbox()"></div>
      <div class="lightbox-content">
        <span class="close-lightbox" onclick="closeLightbox()">&times;</span>
        <img id="lightbox-img" src="" alt="${language === 'fr' ? 'Vue agrandie' : 'Full view'}">
      </div>
    `;
    document.body.appendChild(lightboxDiv);
    
    // Ajout du CSS dynamique pour la lightbox si manquant
    const style = document.createElement('style');
    style.innerHTML = `
      #lightbox { position: fixed; z-index: 1000; top: 0; left: 0; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
      .lightbox-overlay { position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: rgba(15, 23, 42, 0.95); backdrop-filter: blur(5px); }
      .lightbox-content { position: relative; z-index: 1001; max-width: 90%; max-height: 90%; }
      #lightbox-img { max-width: 100%; max-height: 85vh; border-radius: 8px; box-shadow: 0 0 30px rgba(56, 189, 248, 0.2); border: 1px solid #334155; }
      .close-lightbox { position: absolute; top: -40px; right: 0; color: #fff; font-size: 2rem; cursor: pointer; transition: color 0.3s; }
      .close-lightbox:hover { color: #38bdf8; }
    `;
    document.head.appendChild(style);
  }
  
  // Petit clin d'oeil console pour faire pro
  console.log("%c SYSTEM ONLINE %c Slimane Aouanouk Portfolio Loaded ", "background: #38bdf8; color: #000; padding: 5px; font-weight: bold;", "background: #1e293b; color: #38bdf8; padding: 5px;");

  // 4. BARRE DE SCROLL VERTICALE (style OpenAI-like)
  initScrollNavigator();
});

/* === FONCTIONS GLOBALES (Appelées par le HTML) === */

// Fonction pour ouvrir une image en grand
// Utilisation dans le HTML: onclick="openLightbox(this)"
function openLightbox(element) {
  const lightbox = document.getElementById("lightbox");
  const imgBox = document.getElementById("lightbox-img");
  
  if(lightbox && imgBox) {
    // Si l'élément passé est une image, on prend son src
    // Sinon on cherche si l'utilisateur a passé une URL (string)
    const src = element.src ? element.src : element;
    
    imgBox.src = src;
    lightbox.style.display = "flex";
    
    // Animation d'entrée
    imgBox.style.transform = "scale(0.9)";
    imgBox.style.opacity = "0";
    setTimeout(() => {
      imgBox.style.transition = "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
      imgBox.style.transform = "scale(1)";
      imgBox.style.opacity = "1";
    }, 10);
  }
}

// Fonction pour fermer la lightbox
function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  if(lightbox) {
    lightbox.style.display = "none";
  }
}

function initScrollNavigator() {
  if (window.matchMedia("(max-width: 900px)").matches) return;

  if (document.querySelector(".scroll-nav")) return;

  const nav = document.createElement("div");
  nav.className = "scroll-nav";
  nav.setAttribute("aria-label", isFrenchPortfolioPage() ? "Navigateur de défilement" : "Scroll navigator");
  nav.setAttribute("role", "scrollbar");

  const thumb = document.createElement("div");
  thumb.className = "scroll-nav-thumb";
  nav.appendChild(thumb);
  document.body.appendChild(nav);

  let dragging = false;
  let dragOffsetY = 0;
  let thumbHeight = 48;

  function getMaxScroll() {
    return Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function updateThumb() {
    const maxScroll = getMaxScroll();
    if (maxScroll <= 1) {
      nav.style.opacity = "0";
      nav.style.pointerEvents = "none";
      return;
    }

    nav.style.opacity = "1";
    nav.style.pointerEvents = "auto";
    const trackHeight = nav.clientHeight;
    const ratio = window.innerHeight / document.documentElement.scrollHeight;
    thumbHeight = clamp(Math.round(trackHeight * ratio), 48, trackHeight);

    const maxTop = Math.max(0, trackHeight - thumbHeight);
    const scrollRatio = window.scrollY / maxScroll;
    const top = maxTop * scrollRatio;

    thumb.style.height = `${thumbHeight}px`;
    thumb.style.top = `${top}px`;
    nav.setAttribute("aria-valuemin", "0");
    nav.setAttribute("aria-valuemax", String(maxScroll));
    nav.setAttribute("aria-valuenow", String(Math.round(window.scrollY)));
  }

  function moveToClientY(clientY, centerThumb) {
    const rect = nav.getBoundingClientRect();
    const trackHeight = rect.height;
    const maxTop = Math.max(0, trackHeight - thumbHeight);
    const rawTop = centerThumb
      ? clientY - rect.top - thumbHeight / 2
      : clientY - rect.top - dragOffsetY;
    const top = clamp(rawTop, 0, maxTop);
    const progress = maxTop > 0 ? top / maxTop : 0;
    const targetY = progress * getMaxScroll();
    window.scrollTo({ top: targetY, behavior: "auto" });
  }

  thumb.addEventListener("pointerdown", (event) => {
    dragging = true;
    thumb.classList.add("dragging");
    dragOffsetY = event.clientY - thumb.getBoundingClientRect().top;
    thumb.setPointerCapture(event.pointerId);
    event.preventDefault();
  });

  thumb.addEventListener("pointermove", (event) => {
    if (!dragging) return;
    moveToClientY(event.clientY, false);
  });

  thumb.addEventListener("pointerup", () => {
    dragging = false;
    thumb.classList.remove("dragging");
  });

  thumb.addEventListener("pointercancel", () => {
    dragging = false;
    thumb.classList.remove("dragging");
  });

  nav.addEventListener("click", (event) => {
    if (event.target === thumb) return;
    moveToClientY(event.clientY, true);
  });

  window.addEventListener("scroll", updateThumb, { passive: true });
  window.addEventListener("resize", updateThumb);
  updateThumb();
}

function initLanguageControls(language) {
  const sidebar = document.querySelector('.sidebar');
  if (!sidebar || sidebar.querySelector('.language-switcher')) return;

  const labels = language === 'fr'
    ? {
        switcher: 'Choisir la langue',
        dialogTitle: 'Choisissez votre langue',
        dialogText: 'Select your preferred language. Vous pourrez la modifier à tout moment.',
        close: 'Continuer en anglais'
      }
    : {
        switcher: 'Choose language',
        dialogTitle: 'Choose your language',
        dialogText: 'Select your preferred language. Vous pourrez la modifier à tout moment.',
        close: 'Continue in English'
      };

  const switcher = document.createElement('div');
  switcher.className = 'language-switcher';
  switcher.setAttribute('aria-label', labels.switcher);

  ['en', 'fr'].forEach((targetLanguage) => {
    const link = document.createElement('a');
    link.className = `language-option${targetLanguage === language ? ' active' : ''}`;
    link.href = getLanguageCounterpart(targetLanguage);
    link.textContent = targetLanguage.toUpperCase();
    link.lang = targetLanguage;
    link.hreflang = targetLanguage;
    link.setAttribute('aria-label', targetLanguage === 'fr' ? 'Afficher le site en français' : 'View the site in English');
    if (targetLanguage === language) link.setAttribute('aria-current', 'true');
    link.addEventListener('click', () => storePortfolioLanguage(targetLanguage));
    switcher.appendChild(link);
  });

  sidebar.appendChild(switcher);

  if (!storedPortfolioLanguage) {
    showLanguageDialog(labels);
  }
}

function showLanguageDialog(labels) {
  const dialog = document.createElement('div');
  dialog.className = 'language-dialog';
  dialog.innerHTML = `
    <div class="language-dialog-backdrop"></div>
    <section class="language-dialog-panel" role="dialog" aria-modal="true" aria-labelledby="language-dialog-title" aria-describedby="language-dialog-description">
      <button class="language-dialog-close" type="button" aria-label="${labels.close}">&times;</button>
      <span class="language-dialog-kicker">EN / FR</span>
      <h2 id="language-dialog-title"><span lang="en" class="language-dialog-title-en">Choose your language</span><br><span lang="fr">Choisissez votre langue</span></h2>
      <p id="language-dialog-description">${labels.dialogText}</p>
      <div class="language-dialog-actions">
        <button class="language-dialog-choice primary" type="button" data-language="en" lang="en">English</button>
        <button class="language-dialog-choice" type="button" data-language="fr" lang="fr">Français</button>
      </div>
    </section>
  `;
  document.body.appendChild(dialog);
  document.body.classList.add('language-dialog-open');

  const panel = dialog.querySelector('.language-dialog-panel');
  const englishButton = dialog.querySelector('[data-language="en"]');
  const closeButton = dialog.querySelector('.language-dialog-close');
  const focusable = Array.from(dialog.querySelectorAll('button'));

  const chooseLanguage = (targetLanguage) => {
    storePortfolioLanguage(targetLanguage);
    const destination = getLanguageCounterpart(targetLanguage);
    if ((targetLanguage === 'fr') !== isFrenchPortfolioPage()) {
      window.location.assign(destination);
      return;
    }
    document.body.classList.remove('language-dialog-open');
    dialog.remove();
  };

  dialog.querySelectorAll('[data-language]').forEach((button) => {
    button.addEventListener('click', () => chooseLanguage(button.dataset.language));
  });
  closeButton.addEventListener('click', () => chooseLanguage('en'));

  panel.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      chooseLanguage('en');
      return;
    }
    if (event.key !== 'Tab') return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  window.requestAnimationFrame(() => englishButton.focus());
}
