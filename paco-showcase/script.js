(() => {
  "use strict";

  const frenchCopy = new Map(Object.entries({
    "Skip to content": "Aller au contenu",
    "Toggle navigation": "Afficher la navigation",
    "Method": "Méthode",
    "Validation": "Validation",
    "System": "Système",
    "Team": "Équipe",
    "Fixed-obstacle validated": "Obstacle fixe validé",
    "Autonomous systems": "Systèmes autonomes",
    "Research showcase": "Vitrine de recherche",
    "From mathematical": "De l’optimisation",
    "optimization to": "mathématique au",
    "measured motion.": "mouvement mesuré.",
    "We compute collision-aware trajectories, adapt them to what the system observes,\n              and quantify the gap between a plan and a real rover in motion.": "Nous calculons des trajectoires tenant compte des collisions, les adaptons aux observations du système et quantifions l’écart entre un plan et le déplacement réel d’un rover.",
    "Explore the method": "Explorer la méthode",
    "See the evidence": "Voir les résultats",
    "Concept preview": "Aperçu conceptuel",
    "Temporary media": "Média temporaire",
    "replace with trial 15 footage": "à remplacer par les images de l’essai 15",
    "Mean lateral RMSE": "RMSE latérale moyenne",
    "fixed-obstacle trials": "essais avec obstacle fixe",
    "Mean final error": "Erreur finale moyenne",
    "two directions": "deux directions",
    "Worst real clearance": "Dégagement réel minimal",
    "positive safety margin": "marge de sécurité positive",
    "ArUco detections": "Détections ArUco",
    "across final trials": "sur les essais finaux",
    "The challenge": "Le défi",
    "A path is easy to draw.": "Un chemin est facile à tracer.",
    "A safe trajectory must also be": "Une trajectoire sûre doit aussi être",
    "feasible, reactive, and measurable.": "réalisable, réactive et mesurable.",
    "An autonomous system has to connect a fixed start to a fixed goal while respecting obstacles,\n              boundaries, velocity, acceleration, and imperfect knowledge of moving agents.": "Un système autonome doit relier un départ fixe à un objectif fixe tout en respectant les obstacles, les limites, la vitesse, l’accélération et une connaissance imparfaite des agents mobiles.",
    "The hard part is not producing a curve. It is building a chain that remains coherent from the\n              mathematical objective to the physical experiment.": "La difficulté n’est pas de produire une courbe. Elle consiste à construire une chaîne cohérente, de l’objectif mathématique à l’expérience physique.",
    "End-to-end pipeline": "Chaîne complète",
    "One continuous chain.": "Une chaîne continue.",
    "Seven verifiable steps.": "Sept étapes vérifiables.",
    "Select a step to move from problem definition to measured physical validation.": "Sélectionnez une étape pour passer de la définition du problème à la validation physique mesurée.",
    "Define": "Définir",
    "start, goal, limits": "départ, objectif, limites",
    "Initialize": "Initialiser",
    "candidate paths": "trajectoires candidates",
    "Optimize": "Optimiser",
    "static nominal": "nominal statique",
    "Correct": "Corriger",
    "causal dynamics": "dynamique causale",
    "Track": "Suivre",
    "wheel commands": "commandes des roues",
    "Observe": "Observer",
    "camera to meters": "caméra vers mètres",
    "Measure": "Mesurer",
    "plan versus reality": "plan face au réel",
    "The method": "La méthode",
    "Plan globally.": "Planifier globalement.",
    "Respond locally.": "Réagir localement.",
    "The architecture separates what can be optimized in advance from what must be handled causally at runtime.": "L’architecture sépare ce qui peut être optimisé à l’avance de ce qui doit être traité de manière causale à l’exécution.",
    "Variational planning": "Planification variationnelle",
    "static scene": "scène statique",
    "The nominal phase": "La phase nominale",
    "Generate candidates, minimize a discretized action, and produce a smooth reference path around known fixed obstacles.": "Générer des candidates, minimiser une action discrétisée et produire un chemin de référence lisse autour d’obstacles fixes connus.",
    "Input": "Entrée",
    "Known geometry and dynamic limits": "Géométrie connue et limites dynamiques",
    "Output": "Sortie",
    "Time-parameterized nominal trajectory": "Trajectoire nominale paramétrée dans le temps",
    "Tools": "Outils",
    "SciPy action minimization or direct Euler–Lagrange residuals": "Minimisation d’action SciPy ou résidus directs d’Euler–Lagrange",
    "Force dynamics": "Dynamique des forces",
    "current observation": "observation actuelle",
    "The causal correction phase": "La phase de correction causale",
    "Follow the nominal path while attraction, repulsion, and damping modify the current motion when a mobile agent is observed.": "Suivre le chemin nominal pendant que l’attraction, la répulsion et l’amortissement modifient le mouvement courant lorsqu’un agent mobile est observé.",
    "Nominal reference and current mobile state": "Référence nominale et état mobile courant",
    "Locally corrected trajectory": "Trajectoire corrigée localement",
    "Update": "Mise à jour",
    "Semi-implicit Euler, Verlet, or Jones variant": "Euler semi-implicite, Verlet ou variante de Jones",
    "Important distinction": "Distinction importante",
    "“Newton” refers here to": "« Newton » désigne ici la",
    "Newtonian force dynamics": "dynamique newtonienne des forces",
    "used by the local corrector.\n              It is not Newton–Raphson optimization. The physical fixed-obstacle trials followed the nominal trajectory with a differential-wheel controller.": "utilisée par le correcteur local. Il ne s’agit pas de l’optimisation de Newton–Raphson. Les essais physiques avec obstacle fixe ont suivi la trajectoire nominale à l’aide d’un contrôleur à roues différentielles.",
    "Technical layer": "Couche technique",
    "Open the mathematical core": "Ouvrir le cœur mathématique",
    "Stationarity": "Stationnarité",
    "Variational action": "Action variationnelle",
    "Fixed endpoints turn trajectory generation into a stationarity problem over the path between them.": "Des extrémités fixes transforment la génération de trajectoire en problème de stationnarité sur le chemin qui les relie.",
    "Safety": "Sécurité",
    "Compact obstacle potential": "Potentiel compact d’obstacle",
    "The cost rises inside an influence radius and stays inactive farther away.": "Le coût augmente à l’intérieur d’un rayon d’influence et reste inactif au-delà.",
    "Runtime": "Exécution",
    "Damped force dynamics": "Dynamique des forces amortie",
    "Attraction keeps the goal and nominal path relevant; repulsion and damping manage local correction.": "L’attraction maintient l’objectif et le chemin nominal pertinents ; la répulsion et l’amortissement gèrent la correction locale.",
    "2D planar motion": "mouvement plan 2D",
    "fixed start and goal": "départ et objectif fixes",
    "bounded velocity": "vitesse bornée",
    "bounded acceleration": "accélération bornée",
    "current-state mobile observation": "observation mobile à l’état courant",
    "Numerical strategies": "Stratégies numériques",
    "Different solvers answer": "Différents solveurs répondent à",
    "different questions.": "différentes questions.",
    "The comparison is an engineering tool, not a single leaderboard. Speed, convergence, trajectory quality, and robustness must be read together.": "La comparaison est un outil d’ingénierie, pas un classement unique. Vitesse, convergence, qualité de trajectoire et robustesse doivent être lues ensemble.",
    "Strategy": "Stratégie",
    "What it solves": "Ce qu’elle résout",
    "Best use": "Meilleur usage",
    "Observed trade-off": "Compromis observé",
    "Discretized action minimization with analytic gradient": "Minimisation d’action discrétisée avec gradient analytique",
    "High-quality nominal planning": "Planification nominale de haute qualité",
    "median in a two-scenario exploratory benchmark": "médiane dans un benchmark exploratoire à deux scénarios",
    "Stationarity residual through root or least-squares methods": "Résidu de stationnarité par méthodes de racines ou moindres carrés",
    "Numerical formulation studies": "Études de formulation numérique",
    "Faster campaigns, but convergence remained scenario-sensitive": "Campagnes plus rapides, mais convergence sensible au scénario",
    "Straight-line baseline": "Référence en ligne droite",
    "No nominal optimization": "Aucune optimisation nominale",
    "Ablation and runtime baseline": "Référence d’ablation et de temps d’exécution",
    "median, without the same planning capability": "médiane, sans la même capacité de planification",
    "Benchmark values above cover only two scenarios with shared controller coefficients. They support diagnosis, not a definitive solver ranking.": "Les valeurs ci-dessus ne couvrent que deux scénarios avec des coefficients de contrôleur partagés. Elles aident au diagnostic, pas à établir un classement définitif des solveurs.",
    "Evidence": "Résultats",
    "What is actually validated?": "Qu’est-ce qui est réellement validé ?",
    "Every claim is tagged by evidence level. Simulation, software tests, measured motion, and complete physical validation are not interchangeable.": "Chaque affirmation est associée à un niveau de preuve. Simulation, tests logiciels, mouvement mesuré et validation physique complète ne sont pas interchangeables.",
    "Physical": "Physique",
    "complete in tested domain": "complet dans le domaine testé",
    "Fixed-obstacle avoidance": "Évitement d’obstacle fixe",
    "Two final runs, opposite directions, safe stop and target reached.": "Deux essais finaux, dans des directions opposées, arrêt sûr et objectif atteint.",
    "complete": "complet",
    "Metric perception chain": "Chaîne de perception métrique",
    "Camera, homography, ArUco tracking, coordinates, and control connected.": "Caméra, homographie, suivi ArUco, coordonnées et commande connectés.",
    "demonstrated": "démontré",
    "Dynamic & multi-agent cases": "Cas dynamiques et multi-agents",
    "Causal local correction evaluated with fixed and moving agents.": "Correction locale causale évaluée avec des agents fixes et mobiles.",
    "partial": "partiel",
    "Moving-agent avoidance": "Évitement d’agent mobile",
    "Detection, commands, and safety stop work; full arrival remains open.": "La détection, les commandes et l’arrêt de sécurité fonctionnent ; l’arrivée complète reste à démontrer.",
    "The strongest proof is repeatable, bidirectional, and measured.": "La preuve la plus solide est répétable, bidirectionnelle et mesurée.",
    "The rover followed a curved nominal trajectory around a fixed obstacle in both directions. Both trials reached the target and ended with a safe stop.": "Le rover a suivi une trajectoire nominale incurvée autour d’un obstacle fixe dans les deux directions. Les deux essais ont atteint l’objectif et se sont terminés par un arrêt sûr.",
    "successful final runs": "essais finaux réussis",
    "mean orientation RMSE": "RMSE d’orientation moyenne",
    "lost ArUco detections": "détections ArUco perdues",
    "Trial 15": "Essai 15",
    "Forward": "Aller",
    "Trial 14": "Essai 14",
    "Return": "Retour",
    "Smooth tracking": "Suivi lisse",
    "Measured evidence": "Résultats mesurés",
    "forward fixed-obstacle run": "essai aller avec obstacle fixe",
    "return fixed-obstacle run": "essai retour avec obstacle fixe",
    "Experimental layer": "Couche expérimentale",
    "Open the validation matrix and metric scope": "Ouvrir la matrice de validation et le périmètre des métriques",
    "Capability": "Capacité",
    "Status": "Statut",
    "Scope": "Périmètre",
    "Nominal trajectory generation": "Génération de trajectoire nominale",
    "Software tests + simulation": "Tests logiciels + simulation",
    "Validated": "Validé",
    "2D scenarios in repository": "Scénarios 2D du dépôt",
    "Fixed-obstacle physical tracking": "Suivi physique avec obstacle fixe",
    "Trials 14–15": "Essais 14–15",
    "Documented arena and profiles": "Arène et profils documentés",
    "Smooth continuous tracking": "Suivi continu lisse",
    "Trials 29–30": "Essais 29–30",
    "Quasi-straight segments, no obstacle": "Segments quasi rectilignes, sans obstacle",
    "Causal moving-agent correction": "Correction causale d’agent mobile",
    "Simulation + physical integration": "Simulation + intégration physique",
    "Partial": "Partiel",
    "No complete physical arrival": "Aucune arrivée physique complète",
    "Multi-agent avoidance": "Évitement multi-agents",
    "Simulation": "Simulation",
    "Not physically demonstrated": "Non démontré physiquement",
    "Aerial drone deployment": "Déploiement de drone aérien",
    "None": "Aucune",
    "Not claimed": "Non revendiqué",
    "Physical platform is a rover": "La plateforme physique est un rover",
    "The smooth-tracking metrics (0.283 cm mean lateral RMSE; 0.985 cm mean final error) come from a separate obstacle-free experiment and are intentionally not merged with the fixed-obstacle KPI.": "Les métriques de suivi lisse (RMSE latérale moyenne de 0,283 cm ; erreur finale moyenne de 0,985 cm) proviennent d’une expérience distincte sans obstacle et ne sont volontairement pas fusionnées avec l’indicateur de l’obstacle fixe.",
    "Physical system": "Système physique",
    "Pixels become meters.": "Les pixels deviennent des mètres.",
    "Meters become motion.": "Les mètres deviennent du mouvement.",
    "The experimental chain closes the loop between planning, perception, wheel commands, and measured trajectory error.": "La chaîne expérimentale ferme la boucle entre planification, perception, commandes des roues et erreur de trajectoire mesurée.",
    "Temporary setup photograph": "Photographie temporaire de l’installation",
    "Basler camera": "Caméra Basler",
    "monochrome frames": "images monochromes",
    "pixel coordinates → arena coordinates": "coordonnées pixel → coordonnées de l’arène",
    "rover, obstacle, and reference markers": "marqueurs du rover, de l’obstacle et de référence",
    "Differential control": "Commande différentielle",
    "trajectory error → wheel commands": "erreur de trajectoire → commandes des roues",
    "Validation log": "Journal de validation",
    "clearance, RMSE, stop, final gap": "dégagement, RMSE, arrêt, écart final",
    "900 / 900 frames captured in 30-second Ethernet tests on both Mac and Raspberry Pi.": "900 / 900 images capturées lors de tests Ethernet de 30 secondes sur Mac et Raspberry Pi.",
    "Instrumented observation": "Observation instrumentée",
    "Every physical claim starts with a traceable measurement.": "Chaque affirmation physique commence par une mesure traçable.",
    "Corner markers define the arena. IDs identify the rover and obstacle. The rectified view turns image measurements into a common metric frame.": "Les marqueurs d’angle définissent l’arène. Les identifiants repèrent le rover et l’obstacle. La vue rectifiée transforme les mesures d’image en un repère métrique commun.",
    "Repository evidence": "Preuve du dépôt",
    "Annotated preflight frame": "Image de prévol annotée",
    "The experiment, at a glance": "L’expérience en un coup d’œil",
    "A complete visual system,": "Un système visuel complet,",
    "ready for the final footage.": "prêt pour les images finales.",
    "Temporary assets already use their final filenames. Replace a file with the real shot and the page updates without layout changes.": "Les médias temporaires utilisent déjà leurs noms de fichiers finaux. Remplacez un fichier par la prise réelle et la page se met à jour sans changement de mise en page.",
    "Full fixed-obstacle run": "Essai complet avec obstacle fixe",
    "Rover + fiducial marker": "Rover + marqueur fiduciaire",
    "Software-to-hardware chain": "Chaîne logiciel-matériel",
    "Metric ArUco tracking": "Suivi ArUco métrique",
    "Nominal to causal correction": "Du nominal à la correction causale",
    "Screen-to-rover handoff": "Transfert de l’écran au rover",
    "Current boundary": "Limites actuelles",
    "Validated where measured.": "Validé là où c’est mesuré.",
    "Explicit where incomplete.": "Explicite là où c’est incomplet.",
    "Moving-agent completion": "Finalisation avec agent mobile",
    "The rover receives corrected commands and can stop safely, but a repeatable full avoidance run to the goal is still required.": "Le rover reçoit des commandes corrigées et peut s’arrêter en sécurité, mais un évitement complet et reproductible jusqu’à l’objectif reste nécessaire.",
    "Multi-agent transfer": "Transfert multi-agents",
    "Multi-agent behavior is demonstrated in simulation only. Physical deployment would require synchronized state estimation and repeated trials.": "Le comportement multi-agents est démontré uniquement en simulation. Un déploiement physique nécessiterait une estimation d’état synchronisée et des essais répétés.",
    "Benchmark breadth": "Étendue du benchmark",
    "Solver timing comparisons remain exploratory. A larger, frozen scenario suite is needed for a general performance claim.": "Les comparaisons de temps des solveurs restent exploratoires. Un ensemble de scénarios plus vaste et figé est nécessaire pour une affirmation générale de performance.",
    "People & context": "Personnes et contexte",
    "A research project built": "Un projet de recherche construit",
    "between France and Singapore.": "entre la France et Singapour.",
    "The work began in January under Prof. Francisco Chinesta and continued during a summer internship at CNRS@CREATE in Singapore, with technical supervision from Amine Ammar.": "Le travail a débuté en janvier sous la direction du Pr Francisco Chinesta et s’est poursuivi lors d’un stage d’été au CNRS@CREATE à Singapour, sous la supervision technique d’Amine Ammar.",
    "Student researcher": "Étudiant chercheur",
    "Trajectory optimization, simulation, physical integration, and validation.": "Optimisation de trajectoire, simulation, intégration physique et validation.",
    "Technical supervisor": "Superviseur technique",
    "Technical guidance and internship supervision.": "Accompagnement technique et supervision de stage.",
    "Research supervisor": "Directeur de recherche",
    "Research direction and original project supervision.": "Direction scientifique et supervision du projet initial.",
    "Personal website": "Site personnel",
    "January 2026": "Janvier 2026",
    "Research initiated": "Recherche initiée",
    "Problem formulation and numerical foundations with Prof. Francisco Chinesta.": "Formulation du problème et fondements numériques avec le Pr Francisco Chinesta.",
    "Summer 2026": "Été 2026",
    "Physical integration": "Intégration physique",
    "Camera, rover control, experimental campaigns, and validation at CNRS@CREATE.": "Caméra, commande du rover, campagnes expérimentales et validation au CNRS@CREATE.",
    "August 1, 2026": "1er août 2026",
    "Research showcase": "Vitrine de recherche",
    "A concise record of the method, evidence, and remaining boundary.": "Un aperçu concis de la méthode, des preuves et des limites restantes.",
    "Trajectory Optimization": "Optimisation de trajectoire",
    "for Autonomous Systems": "pour systèmes autonomes",
    "Collision-aware planning, causal correction, and measured physical validation.": "Planification tenant compte des collisions, correction causale et validation physique mesurée.",
    "Internal research showcase": "Vitrine interne de recherche",
    "Experimental claims scoped to repository evidence": "Affirmations expérimentales limitées aux preuves du dépôt",
    "Back to top": "Retour en haut"
  }));

  const frenchPipelineContent = [
    { kicker: "Définition du problème", title: "Encoder la mission, pas seulement la géométrie.", copy: "Le départ et l’objectif sont fixes. Obstacles, murs, vitesse et accélération deviennent des coûts ou contraintes explicites." },
    { kicker: "Génération de candidates", title: "Donner à l’optimiseur plusieurs points de départ utiles.", copy: "Des courbes paramétriques initialisent la recherche numérique. Elles réduisent la dépendance à une initialisation arbitraire et révèlent différents choix d’homotopie." },
    { kicker: "Optimisation nominale", title: "Construire une référence lisse dans la scène connue.", copy: "La phase statique minimise un objectif variationnel discrétisé et renvoie une trajectoire paramétrée dans le temps autour d’obstacles fixes." },
    { kicker: "Correction locale causale", title: "Réagir uniquement aux informations disponibles maintenant.", copy: "Attraction, répulsion et amortissement modifient le mouvement courant lorsque des agents mobiles entrent dans le voisinage de perception, sans anticiper leur futur." },
    { kicker: "Suivi différentiel", title: "Transformer l’erreur de trajectoire en mouvement des roues.", copy: "Un contrôleur physique suit la référence nominale, gère l’orientation et garantit un arrêt sûr du rover." },
    { kicker: "Perception métrique", title: "Transformer les pixels en un repère physique partagé.", copy: "Une caméra zénithale, une homographie et des marqueurs ArUco estiment les poses du rover et des obstacles dans les coordonnées de l’arène." },
    { kicker: "Validation mesurée", title: "Comparer le chemin planifié à ce qui s’est réellement passé.", copy: "Les journaux quantifient l’erreur latérale, l’erreur d’orientation, l’écart final, le dégagement, la détection des marqueurs, les arrêts de sécurité et le résultat de l’essai." }
  ];

  const sourceText = new WeakMap();
  const sourceAttributes = new WeakMap();
  let activeLanguage = "en";

  const replaceText = (language) => {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) {
      const original = sourceText.get(node) ?? node.nodeValue;
      sourceText.set(node, original);
      const leading = original.match(/^\s*/)?.[0] ?? "";
      const trailing = original.match(/\s*$/)?.[0] ?? "";
      const key = original.trim();
      node.nodeValue = language === "fr" && frenchCopy.has(key) ? `${leading}${frenchCopy.get(key)}${trailing}` : original;
    }
  };

  const replaceAttributes = (language) => {
    const values = {
      "html": { lang: language === "fr" ? "fr-FR" : "en-US" },
      "meta[name='description']": { content: language === "fr" ? "Optimisation de trajectoire et évitement de collision pour systèmes autonomes, de la planification variationnelle aux expériences mesurées sur rover." : "Trajectory optimization and collision avoidance for autonomous systems, from variational planning to measured rover experiments." },
      ".brand": { "aria-label": language === "fr" ? "Retour en haut" : "Back to top" },
      ".menu-button .sr-only": { textContent: language === "fr" ? "Afficher la navigation" : "Toggle navigation" },
      "[data-nav]": { "aria-label": language === "fr" ? "Navigation principale" : "Primary navigation" },
      ".language-switcher": { "aria-label": language === "fr" ? "Sélecteur de langue" : "Language selector" },
      ".hero-media video": { "aria-label": language === "fr" ? "Aperçu conceptuel d’un rover contournant un obstacle fixe" : "Concept preview of a rover curving around a fixed obstacle" },
      ".metrics-strip": { "aria-label": language === "fr" ? "Indicateurs clés de validation" : "Key validation metrics" },
      ".solver-table": { "aria-label": language === "fr" ? "Comparaison des solveurs" : "Solver comparison" },
      ".trial-tabs": { "aria-label": language === "fr" ? "Sélectionner une figure de validation" : "Select validation figure" },
      ".trial-video-pair": { "aria-label": language === "fr" ? "Emplacements vidéo temporaires des essais finaux 14 et 15" : "Temporary video slots for final trials 14 and 15" },
      ".system-photo img": { alt: language === "fr" ? "Aperçu conceptuel de la caméra zénithale et de l’arène d’essai du rover" : "Concept preview of the overhead camera and rover test arena" },
      ".tracking-panel img": { alt: language === "fr" ? "Image caméra annotée montrant les marqueurs ArUco dans l’arène d’essai du rover" : "Annotated camera frame showing ArUco markers in the rover test arena" },
      ".institution-logos": { "aria-label": language === "fr" ? "Institutions partenaires" : "Partner institutions" },
      ".team-grid article:nth-child(1) .team-link": { "aria-label": language === "fr" ? "Visiter le portfolio de Slimane Aouanouk (s’ouvre dans un nouvel onglet)" : "Visit Slimane Aouanouk's portfolio (opens in a new tab)" },
      ".team-grid article:nth-child(2) .team-link": { "aria-label": language === "fr" ? "Visiter le profil LinkedIn de Mathis Benchikh (s’ouvre dans un nouvel onglet)" : "Visit Mathis Benchikh's LinkedIn profile (opens in a new tab)" },
      ".team-grid article:nth-child(3) .team-link": { "aria-label": language === "fr" ? "Visiter le site personnel d’Amine Ammar (s’ouvre dans un nouvel onglet)" : "Visit Amine Ammar's personal website (opens in a new tab)" },
      ".team-grid article:nth-child(4) .team-link": { "aria-label": language === "fr" ? "Visiter le profil ResearchGate du Pr Francisco Chinesta (s’ouvre dans un nouvel onglet)" : "Visit Prof. Francisco Chinesta's ResearchGate profile (opens in a new tab)" }
    };

    Object.entries(values).forEach(([selector, attributes]) => {
      document.querySelectorAll(selector).forEach((element) => {
        const original = sourceAttributes.get(element) ?? {};
        Object.keys(attributes).forEach((attribute) => {
          if (!(attribute in original)) original[attribute] = attribute === "textContent" ? element.textContent : element.getAttribute(attribute);
          if (attribute === "textContent") element.textContent = attributes[attribute];
          else element.setAttribute(attribute, attributes[attribute]);
        });
        sourceAttributes.set(element, original);
      });
    });
    document.title = language === "fr" ? "Optimisation de trajectoire pour systèmes autonomes" : "Trajectory Optimization for Autonomous Systems";
  };

  const setLanguage = (language) => {
    activeLanguage = language === "fr" ? "fr" : "en";
    replaceText(activeLanguage);
    replaceAttributes(activeLanguage);
    document.querySelectorAll("[data-language]").forEach((button) => {
      const selected = button.dataset.language === activeLanguage;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    document.querySelectorAll("[data-language-choice]").forEach((button) => {
      button.classList.toggle("is-active", button.dataset.languageChoice === activeLanguage);
    });
    try { localStorage.setItem("paco-language", activeLanguage); } catch { /* Storage can be unavailable. */ }
    if (typeof setPipelineStep === "function") setPipelineStep(Number(document.querySelector(".pipeline-step.is-active")?.dataset.step ?? 0));
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-nav]");

  const updateHeader = () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 20);
  };

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });

  const closeMenu = () => {
    if (!menuButton || !navigation) return;
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("is-open");
    document.body.classList.remove("menu-open");
  };

  menuButton?.addEventListener("click", () => {
    const shouldOpen = menuButton.getAttribute("aria-expanded") !== "true";
    menuButton.setAttribute("aria-expanded", String(shouldOpen));
    navigation?.classList.toggle("is-open", shouldOpen);
    document.body.classList.toggle("menu-open", shouldOpen);
  });

  navigation?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });

  const revealElements = [...document.querySelectorAll(".reveal")];
  if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -5%" },
    );
    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const pipelineContent = [
    {
      kicker: "Problem definition",
      title: "Encode the mission, not just the geometry.",
      copy: "Start and goal are fixed. Obstacles, walls, speed, and acceleration become explicit costs or constraints.",
    },
    {
      kicker: "Candidate generation",
      title: "Give the optimizer several useful ways to begin.",
      copy: "Parametric curves seed the numerical search. This reduces dependence on one arbitrary initialization and exposes distinct homotopy choices.",
    },
    {
      kicker: "Nominal optimization",
      title: "Build a smooth reference through the known scene.",
      copy: "The static phase minimizes a discretized variational objective and returns a time-parameterized trajectory around fixed obstacles.",
    },
    {
      kicker: "Causal local correction",
      title: "React only to information available now.",
      copy: "Attraction, repulsion, and damping modify current motion when moving agents enter the perception neighborhood—without reading their future.",
    },
    {
      kicker: "Differential tracking",
      title: "Turn trajectory error into wheel motion.",
      copy: "A physical controller follows the nominal reference, handles orientation, and enforces safe stopping behavior on the rover.",
    },
    {
      kicker: "Metric perception",
      title: "Transform pixels into a shared physical frame.",
      copy: "An overhead camera, homography, and ArUco markers estimate rover and obstacle poses in arena coordinates.",
    },
    {
      kicker: "Measured validation",
      title: "Compare the planned path with what actually happened.",
      copy: "Logs quantify lateral error, orientation error, final gap, clearance, marker detection, safety stops, and run outcome.",
    },
  ];

  const pipeline = document.querySelector("[data-pipeline]");
  const pipelineSteps = [...(pipeline?.querySelectorAll("[data-step]") ?? [])];
  const progress = pipeline?.querySelector("[data-pipeline-progress]");
  const stepKicker = pipeline?.querySelector("[data-step-kicker]");
  const stepTitle = pipeline?.querySelector("[data-step-title]");
  const stepCopy = pipeline?.querySelector("[data-step-copy]");

  const setPipelineStep = (index) => {
    const content = (activeLanguage === "fr" ? frenchPipelineContent : pipelineContent)[index];
    if (!content) return;
    pipelineSteps.forEach((step, stepIndex) => step.classList.toggle("is-active", stepIndex === index));
    if (progress) progress.style.width = `${(index / (pipelineSteps.length - 1)) * 100}%`;
    if (stepKicker) stepKicker.textContent = content.kicker;
    if (stepTitle) stepTitle.textContent = content.title;
    if (stepCopy) stepCopy.textContent = content.copy;
  };

  pipelineSteps.forEach((step) => {
    step.addEventListener("click", () => setPipelineStep(Number(step.dataset.step)));
  });

  const trialTabs = [...document.querySelectorAll("[data-figure]")];
  const validationFigure = document.querySelector("[data-validation-figure]");
  const figureCaption = document.querySelector("[data-figure-caption]");

  const selectFigure = (button) => {
    trialTabs.forEach((tab) => {
      const isActive = tab === button;
      tab.classList.toggle("is-active", isActive);
      tab.setAttribute("aria-selected", String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    if (!validationFigure) return;
    validationFigure.classList.add("is-changing");
    window.setTimeout(() => {
      validationFigure.src = button.dataset.figure ?? "";
      validationFigure.alt = button.dataset.alt ?? "Validation figure";
      if (figureCaption) figureCaption.textContent = button.dataset.caption ?? "";
      validationFigure.classList.remove("is-changing");
    }, reducedMotion ? 0 : 160);
  };

  trialTabs.forEach((button, index) => {
    button.addEventListener("click", () => selectFigure(button));
    button.addEventListener("keydown", (event) => {
      if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
      event.preventDefault();
      const direction = event.key === "ArrowRight" ? 1 : -1;
      const nextIndex = (index + direction + trialTabs.length) % trialTabs.length;
      trialTabs[nextIndex].focus();
      selectFigure(trialTabs[nextIndex]);
    });
  });

  const metricNumbers = [...document.querySelectorAll("[data-count]")];
  const animateMetric = (element) => {
    const target = Number(element.dataset.count);
    const decimals = (element.dataset.count.split(".")[1] ?? "").length;
    if (reducedMotion || !Number.isFinite(target)) {
      element.textContent = target.toFixed(decimals);
      return;
    }
    const duration = 1050;
    const start = performance.now();
    const tick = (now) => {
      const progressValue = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progressValue, 4);
      element.textContent = (target * eased).toFixed(decimals);
      if (progressValue < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const metricsStrip = document.querySelector(".metrics-strip");
  if (metricsStrip && "IntersectionObserver" in window) {
    const metricObserver = new IntersectionObserver(
      (entries, observer) => {
        if (!entries[0].isIntersecting) return;
        metricNumbers.forEach(animateMetric);
        observer.disconnect();
      },
      { threshold: 0.45 },
    );
    metricObserver.observe(metricsStrip);
  } else {
    metricNumbers.forEach(animateMetric);
  }

  document.querySelectorAll("video[autoplay]").forEach((video) => {
    if (reducedMotion) video.pause();
  });

  const languageDialog = document.querySelector("[data-language-dialog]");
  const closeLanguageDialog = () => {
    languageDialog?.classList.add("is-hidden");
    document.body.classList.remove("language-dialog-open");
    try { sessionStorage.setItem("paco-language-dialog-seen", "true"); } catch { /* Storage can be unavailable. */ }
  };

  document.querySelectorAll("[data-language]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.language));
  });
  document.querySelectorAll("[data-language-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.languageChoice);
      closeLanguageDialog();
    });
  });

  let savedLanguage = "en";
  let hasSeenLanguageDialog = false;
  try {
    savedLanguage = localStorage.getItem("paco-language") || "en";
    hasSeenLanguageDialog = sessionStorage.getItem("paco-language-dialog-seen") === "true";
  } catch { /* English remains the safe default. */ }
  setLanguage(savedLanguage);
  if (hasSeenLanguageDialog) {
    languageDialog?.classList.add("is-hidden");
  } else {
    document.body.classList.add("language-dialog-open");
  }
})();
