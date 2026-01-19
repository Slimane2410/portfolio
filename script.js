/* script.js - Version Adaptée pour Dashboard Layout */

document.addEventListener("DOMContentLoaded", function() {
  
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
        <img id="lightbox-img" src="" alt="Full view">
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