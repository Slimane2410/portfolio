(() => {
  "use strict";

  const frenchCopy = new Map(Object.entries({
    "Skip to content": "Aller au contenu",
    "Toggle navigation": "Afficher la navigation",
    "Method": "Méthode",
    "Calibration": "Calibration",
    "Validation": "Validation",
    "System": "Système",
    "Paper": "Preprint",
    "Team": "Équipe",
    "Autonomous systems": "Systèmes autonomes",
    "Research showcase": "Vitrine de recherche",
    "From the optimized": "De la trajectoire",
    "trajectory to": "optimisée au",
    "real motion.": "mouvement réel.",
    "Our system enables the robot to navigate autonomously, identify obstacles in its\n              environment, and correct its trajectory in real time to reach its target.": "Notre système permet au robot de se déplacer en autonomie, d’identifier les obstacles dans son environnement et de corriger sa trajectoire en temps réel pour atteindre sa cible.",
    "Explore the method": "Explorer la méthode",
    "See the evidence": "Voir les résultats",
    "Physical · repeated tasks": "Physique · tâches répétées",
    "Physical · measured": "Physique · mesuré",
    "Empirical · partial": "Empirique · partiel",
    "· mother rover among moving robots": "· rover mère parmi des robots mobiles",
    "· avoidance of a moving robot": "· évitement d’un robot mobile",
    "· safe and ≤ 10 cm from target": "· sûr et à moins de 10 cm de la cible",
    "· 6 independent agents": "· 6 agents indépendants",
    "Physical runs reaching the goal": "Essais physiques atteignant l’objectif",
    "one coefficient set, no retuning between runs": "un seul jeu de coefficients, aucun réglage entre les essais",
    "Reported repeatability campaign": "Campagne de répétabilité rapportée",
    "two frozen tasks; not a general guarantee": "deux tâches figées ; pas de garantie générale",
    "Smallest moving-agent clearance": "Marge minimale vis-à-vis d’un agent mobile",
    "edge-to-edge between conservative safety discs": "bord à bord entre les disques de sécurité conservateurs",
    "Sustained closed loop": "Boucle fermée soutenue",
    "median rates in the one- and two-agent blocks": "cadences médianes des blocs à un et deux agents",
    "Causal correction per step": "Correction causale par pas",
    "1.4 % of the 50 ms control budget": "1,4 % du budget de commande de 50 ms",
    "validated": "validé",
    "Moving-agent avoidance": "Évitement d’agent mobile",
    "Demonstrated over 40 runs of two frozen tasks, with one or two independently moving agents.": "Démontré sur 40 essais de deux tâches figées, avec un ou deux agents mobiles indépendants.",
    "Fixed-obstacle avoidance": "Évitement d’obstacle fixe",
    "Fixed columns were avoided in the same reported campaign; the smallest measured margin was 29.7 cm.": "Les colonnes fixes ont été évitées dans la même campagne rapportée ; la plus petite marge mesurée était de 29,7 cm.",
    "Partial · in progress": "Partiel · en cours",
    "Predictive digital twin": "Jumeau numérique prédictif",
    "Mean path departures were 5.81 cm and 5.31 cm, but measured paths remained longer than simulated ones.": "Les écarts moyens de trajectoire étaient de 5,81 cm et 5,31 cm, mais les trajets mesurés restaient plus longs que les trajets simulés.",
    "Repeated anti-collision campaign": "Campagne anti-collision répétée",
    "Forty collision-free runs do not mean zero risk.": "Quarante essais sans collision ne signifient pas zéro risque.",
    "40 / 40 goals reached": "40 / 40 objectifs atteints",
    "Across the two repeated frozen tasks, no physical contact and no negative clearance were recorded.": "Sur les deux tâches figées répétées, aucun contact physique ni aucune marge négative n’ont été enregistrés.",
    "Exploratory development": "Développement exploratoire",
    "Collisions did occur": "Des collisions ont bien eu lieu",
    "Other exploratory configurations produced geometric collisions, and physical contacts were also observed during development. The soft-force corrector does not enforce a minimum separation.": "D’autres configurations exploratoires ont produit des collisions géométriques, et des contacts physiques ont également été observés pendant le développement. Le correcteur à forces souples n’impose pas de séparation minimale.",
    "How to read clearance:": "Comment lire la marge :",
    "a negative value means the conservative safety discs overlap; it does not necessarily mean the physical chassis touched.": "une valeur négative signifie que les disques de sécurité conservateurs se chevauchent ; elle ne signifie pas nécessairement que les châssis se sont touchés.",
    "August 4, 2026": "4 août 2026",
    "· August 4, 2026": "· 4 août 2026",
    "Repeated campaign: forty runs, forty arrivals, zero collisions.": "Campagne répétée : quarante essais, quarante arrivées, zéro collision.",
    "Two frozen tasks — twenty runs with one moving robot, twenty with two — executed in a single day with a single set of coefficients and no retuning between runs. The rover leaves its nominal path to open a gap, then closes back onto the goal. Every run below is a physical run, logged frame by frame.": "Deux tâches figées — vingt essais avec un robot mobile, vingt avec deux — exécutées en une seule journée, avec un unique jeu de coefficients et aucun réglage entre les essais. Le rover quitte sa trajectoire nominale pour créer un écart, puis revient vers l’objectif. Chaque essai ci-dessous est un essai physique, enregistré image par image.",
    "runs reached the goal, in both blocks": "essais ont atteint l’objectif, dans les deux blocs",
    "collisions, and no negative safety clearance in any run": "collision, et aucune marge de sécurité négative dans aucun essai",
    "run-to-run variation of the path length, one moving agent": "de variation, d’un essai à l’autre, de la longueur du trajet, avec un agent mobile",
    "One moving agent · 20 runs": "Un agent mobile · 20 essais",
    "Two moving agents · 19 runs": "Deux agents mobiles · 19 essais",
    "Real-time budget": "Budget temps réel",
    "One moving agent · all 20 runs superimposed · lowest clearance 10.6 cm": "Un agent mobile · les 20 essais superposés · marge la plus faible 10,6 cm",
    "Two simultaneous moving agents · all 19 runs superimposed · lowest clearance 6.3 cm": "Deux agents mobiles simultanés · les 19 essais superposés · marge la plus faible 6,3 cm",
    "Real-time budget of one iteration · vision 65.9 %, causal correction 1.4 %, headroom 13.8 %": "Budget temps réel d’une itération · vision 65,9 %, correction causale 1,4 %, marge restante 13,8 %",
    "Multi-agent run": "Essai multi-agents",
    "mother rover among moving robots": "rover mère parmi des robots mobiles",
    "Close pass": "Passage rapproché",
    "avoidance of a moving robot": "évitement d’un robot mobile",
    "Fixed-obstacle physical avoidance": "Évitement physique d’obstacle fixe",
    "40 runs, all clearances positive": "40 essais, toutes les marges positives",
    "Lowest margin 29.7 cm": "Marge la plus faible 29,7 cm",
    "Moving-agent physical avoidance": "Évitement physique d’agent mobile",
    "20 runs, 4 August 2026": "20 essais, 4 août 2026",
    "One moving robot, 2 × 2 m arena": "Un robot mobile, arène de 2 × 2 m",
    "Two simultaneous moving agents": "Deux agents mobiles simultanés",
    "19 runs, all reached goal": "19 essais, tous ont atteint l’objectif",
    "Same corrector, no retuning": "Même correcteur, sans réglage supplémentaire",
    "Sustained 20 Hz closed loop": "Boucle fermée soutenue à 20 Hz",
    "Timing logged in all 40 runs": "Chronométrage journalisé sur les 40 essais",
    "Decentralized multi-agent (6 robots)": "Multi-agents décentralisé (6 robots)",
    "39 paired sim/real runs": "39 essais appariés simulation/réel",
    "Path reproduced to ~5 cm; length not yet": "Trajet reproduit à ~5 cm ; longueur pas encore",
    "The campaign repeats two frozen tasks in one day: start, goal, and obstacles are held fixed within each block, and the two blocks share the same corrector coefficients, motor model, loop rate, and vision calibration. One run of the two-agent block is excluded from the aggregates because it was executed before the fixed obstacles were moved into that block's layout — it reached its goal like every other run. The claim supported here is that this configuration is executed safely and repeatedly, not that the method guarantees a positive clearance in general.": "La campagne répète deux tâches figées en une journée : départ, objectif et obstacles sont maintenus fixes à l’intérieur de chaque bloc, et les deux blocs partagent les mêmes coefficients de correcteur, le même modèle moteur, la même cadence de boucle et le même étalonnage de vision. Un essai du bloc à deux agents est exclu des agrégats car il a été exécuté avant le déplacement des obstacles fixes vers la disposition de ce bloc — il a atteint son objectif comme tous les autres. Ce que la campagne établit, c’est que cette configuration est exécutée de façon sûre et répétable, non que la méthode garantisse une marge positive en général.",
    "Avoidance was demonstrated.": "L’évitement a été démontré.",
    "Breadth and guarantees come next.": "L’élargissement et les garanties restent à venir.",
    "No formal separation guarantee": "Aucune garantie formelle de séparation",
    "The corrector uses soft repulsive forces with bounded acceleration. The clean forty-run record belongs to the two repeated tasks; it does not enforce a minimum clearance in every configuration.": "Le correcteur utilise des forces répulsives souples avec une accélération bornée. Le bilan sans collision des quarante essais appartient aux deux tâches répétées ; il n’impose pas une marge minimale dans toutes les configurations.",
    "Median mean departures were 5.81 cm and 5.31 cm, but measured paths remained longer than simulated ones, with length ratios of 1.090 and 1.169. Non-holonomic motion, wheel slip, asymmetric actuation, and latency remain to be modelled more faithfully.": "Les écarts moyens médians étaient de 5,81 cm et 5,31 cm, mais les trajets mesurés restaient plus longs que les trajets simulés, avec des rapports de longueur de 1,090 et 1,169. Le mouvement non holonome, le glissement des roues, l’actionnement asymétrique et la latence doivent encore être modélisés plus fidèlement.",
    "Predictive control and learning": "Commande prédictive et apprentissage",
    "The corrector reacts to the present state only. Model predictive control and learning-based policies would let the rover anticipate where a moving agent is heading instead of responding once it is close.": "Le correcteur ne réagit qu’à l’état présent. La commande prédictive par modèle (MPC) et des politiques fondées sur l’apprentissage permettraient au rover d’anticiper la direction d’un agent mobile au lieu de réagir une fois celui-ci proche.",
    "Better nominal planning": "Meilleure planification nominale",
    "The nominal path comes from a local variational solve that depends on its initialization. Graph search such as A* — used to seed or replace that stage — should give a more reliable global route before the causal layer refines it.": "Le chemin nominal provient d’une résolution variationnelle locale qui dépend de son initialisation. Une recherche sur graphe telle que A* — pour amorcer ou remplacer cette étape — devrait fournir un itinéraire global plus fiable avant que la couche causale ne l’affine.",
    "Scale and benchmark breadth": "Passage à l’échelle et étendue du benchmark",
    "One controlled rover was physically tested among one or two moving agents; six controlled agents remain simulation-only. Repetition across more geometries, days, seeds, and platforms is still required.": "Un rover piloté a été testé physiquement parmi un ou deux agents mobiles ; six agents pilotés restent limités à la simulation. Des répétitions sur davantage de géométries, de jours, de graines et de plateformes restent nécessaires.",
    "Full arena run": "Essai complet dans l’arène",
    "This scenario runs the same causal correction algorithm independently inside all six agents at once, with no central coordinator. The physical campaign tested one controlled rover among one or two moving agents; this simulation illustrates the same local logic in a fully decentralized six-agent setting, without constituting physical validation at that scale.": "Ce scénario exécute le même algorithme de correction causale indépendamment dans chacun des six agents à la fois, sans coordinateur central. La campagne physique a testé un rover piloté parmi un ou deux agents mobiles ; cette simulation illustre la même logique locale dans un cadre entièrement décentralisé à six agents, sans constituer une validation physique à cette échelle.",
    "Field footage": "Prise réelle",
    "Mother rover in the test arena, alongside parasite rovers and fixed obstacles": "Rover mère dans l’arène d’essai, aux côtés des rovers parasites et des obstacles fixes",
    "The challenge": "Le défi",
    "Calculating an optimal trajectory is not enough.": "Calculer une trajectoire optimale ne suffit pas.",
    "It must adapt in real time and work in the real world.": "Elle doit s’adapter en temps réel et fonctionner dans le monde réel.",
    "An autonomous system has to connect a fixed start to a fixed goal while respecting obstacles,\n              boundaries, velocity, acceleration, and imperfect knowledge of moving agents.": "Un système autonome doit relier un départ fixe à un objectif fixe tout en respectant les obstacles, les limites, la vitesse, l’accélération et une connaissance imparfaite des agents mobiles.",
    "The hard part is not producing a curve. It is building a chain that remains coherent from the\n              mathematical objective to the physical experiment.": "La difficulté n’est pas de produire une courbe. Elle consiste à construire une chaîne cohérente, de l’objectif mathématique à l’expérience physique.",
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
    "Static environment and target only": "Environnement statique et cible uniquement",
    "Output": "Sortie",
    "Time-parameterized nominal trajectory": "Trajectoire nominale paramétrée dans le temps",
    "Tools": "Outils",
    "Variational action minimization or Euler–Lagrange residuals": "Minimisation d’action variationnelle ou résidus d’Euler–Lagrange",
    "Force dynamics": "Dynamique des forces",
    "current observation": "observation actuelle",
    "The causal correction phase": "La phase de correction causale",
    "Follow the nominal path while attraction, repulsion, and damping modify the current motion when a mobile agent is observed.": "Suivre le chemin nominal pendant que l’attraction, la répulsion et l’amortissement modifient le mouvement courant lorsqu’un agent mobile est observé.",
    "Nominal reference and current mobile state": "Référence nominale et état mobile courant",
    "Trajectory corrected locally at every instant": "Trajectoire corrigée localement à chaque instant",
    "Update": "Mise à jour",
    "Semi-implicit Euler, Velocity-Verlet, or stiff-repulsion": "Euler semi-implicite, Velocity-Verlet ou répulsion raide",
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
    "Variational": "Variationnel",
    "Straight line": "Ligne droite",
    "No-plan ablation": "Ablation sans plan",
    "Discretized action minimization with analytic gradient": "Minimisation d’action discrétisée avec gradient analytique",
    "High-quality nominal planning": "Planification nominale de haute qualité",
    "Longer campaigns for greater precision": "Campagnes plus longues pour une meilleure précision",
    "Stationarity residual through root or least-squares methods": "Résidu de stationnarité par méthodes de racines ou moindres carrés",
    "Low-complexity problems": "Problèmes à faible complexité",
    "Faster campaigns, but convergence remained scenario-sensitive": "Campagnes plus rapides, mais convergence sensible au scénario",
    "No nominal optimization": "Aucune optimisation nominale",
    "Ablation and runtime baseline": "Référence d’ablation et de temps d’exécution",
    "Ease of computation for a low-quality reference": "Facilité de calcul pour une référence de faible qualité",
    "Causal correction without a nominal trajectory": "Correction causale sans trajectoire nominale",
    "Nominal-planning ablation baseline": "Référence d’ablation sans planification nominale",
    "High safety but limited progress toward the target": "Sécurité élevée mais progression limitée vers la cible",
    "Auto-calibration campaign": "Campagne d’auto-calibration",
    "Twelve pairs, calibrated": "Douze couples, calibrés",
    "separately, at scale.": "séparément, à grande échelle.",
    "Each of the four nominal generators above pairs with three causal controllers. Every pair searches its own seven-coefficient space — never inheriting another pair's gains — then is compared under one criterion: safe and within 10 cm of the goal. A companion report covers the full protocol; this section summarizes its five figures.": "Chacun des quatre générateurs nominaux ci-dessus est associé aux trois contrôleurs causaux. Chaque couple explore son propre espace de sept coefficients — sans jamais hériter des gains d’un autre couple — puis est comparé selon un seul critère : sûr et à moins de 10 cm de l’objectif. Un rapport complémentaire détaille l’ensemble du protocole ; cette section en résume les cinq figures.",
    "Solver × controller pairs": "Couples solveur × contrôleur",
    "4 nominal generators, 3 causal controllers": "4 générateurs nominaux, 3 contrôleurs causaux",
    "Planned runs": "Essais planifiés",
    "across the 12 campaigns": "sur les 12 campagnes",
    "367,374": "367 374",
    "100,800": "100 800",
    "Final-zone runs": "Essais de la zone finale",
    "6,300 profiles × 16 scenarios": "6 300 profils × 16 scénarios",
    "Cumulative campaign time": "Temps de campagne cumulé",
    "if run sequentially": "si exécuté séquentiellement",
    "Joint success": "Succès conjoint",
    "Collision-free": "Sans collision",
    "Target reached": "Objectif atteint",
    "Variational planning leads at tight tolerance; safety alone misleads.": "La planification variationnelle domine à tolérance serrée ; la sécurité seule est trompeuse.",
    "Across the full final region, Variational + Semi-implicit Euler leads with 50.84% joint success. Restricted to each pair's four best-ranked profiles and re-evaluated on all 26 scenarios, Variational + Velocity-Verlet reaches 65.38%, ahead of Variational + Semi-implicit Euler at 63.46% and the best Straight-line pair at 48.08%. The No-plan ablation reaches 96.15% collision-free runs with two correctors but only 3.85% joint success: it often stays safe by stopping short of the goal.": "Sur toute la région finale, Variationnel + Euler semi-implicite domine avec 50,84 % de succès conjoint. En se limitant aux quatre profils les mieux classés de chaque couple et en les réévaluant sur les 26 scénarios, Variationnel + Velocity-Verlet atteint 65,38 %, devant Variationnel + Euler semi-implicite à 63,46 % et le meilleur couple en ligne droite à 48,08 %. L’ablation sans plan atteint 96,15 % d’essais sans collision avec deux correcteurs, mais seulement 3,85 % de succès conjoint : elle reste souvent sûre en s’arrêtant avant l’objectif.",
    "best-profile joint success · Variational + Velocity-Verlet": "succès conjoint des meilleurs profils · Variationnel + Velocity-Verlet",
    "Variational + Semi-implicit Euler": "Variationnel + Euler semi-implicite",
    "best Straight-line combination": "meilleure combinaison en ligne droite",
    "Full zone": "Zone complète",
    "Best profiles": "Meilleurs profils",
    "Outcome breakdown": "Décomposition des résultats",
    "Generalization": "Généralisation",
    "Threshold sensitivity": "Sensibilité au seuil",
    "Choose a figure — the graph updates when clicked": "Choisissez une figure — le graphique se met à jour au clic",
    "Figure 9 · full final region · published solver and corrector names": "Figure 9 · région finale complète · noms publiés des solveurs et correcteurs",
    "Figure 10 · four best-ranked profiles per architecture · 26 scenarios": "Figure 10 · quatre profils les mieux classés par architecture · 26 scénarios",
    "Figure 11 · exclusive outcome decomposition · 10 cm terminal tolerance": "Figure 11 · décomposition exclusive des résultats · tolérance terminale de 10 cm",
    "Figure 12 · calibration versus held-out scenarios": "Figure 12 · calibration face aux scénarios hors calibration",
    "Figure 13 · ranking sensitivity to terminal-distance tolerance": "Figure 13 · sensibilité du classement à la tolérance de distance terminale",
    "Joint success, collision-free rate, and target-reaching rate for all final-region profiles across the twelve published architectures": "Succès conjoint, taux sans collision et atteinte de l’objectif pour tous les profils de la région finale des douze architectures publiées",
    "Joint success, collision-free rate, and target-reaching rate for the four best-ranked profiles of every architecture": "Succès conjoint, taux sans collision et atteinte de l’objectif pour les quatre profils les mieux classés de chaque architecture",
    "Horizontal bars decomposing best-ranked outcomes into joint success, collision-free target misses, and unsafe runs": "Barres horizontales décomposant les meilleurs résultats en succès conjoint, objectif manqué sans collision et essais non sûrs",
    "Calibration-versus-held-out joint success for all nominal-generator and corrector combinations": "Succès conjoint en calibration face aux scénarios hors calibration pour toutes les combinaisons de générateur nominal et de correcteur",
    "Joint success of the best-ranked profiles as terminal-distance tolerance increases from zero to one hundred centimeters": "Succès conjoint des profils les mieux classés lorsque la tolérance de distance terminale augmente de zéro à cent centimètres",
    "Twenty measured trajectories superimposed in the arena, with the clearance to the moving agent over time for every run": "Vingt trajectoires mesurées superposées dans l’arène, avec la marge vis-à-vis de l’agent mobile au cours du temps pour chaque essai",
    "Nineteen measured trajectories superimposed in the arena, with the smallest of the two agent clearances over time for every run": "Dix-neuf trajectoires mesurées superposées dans l’arène, avec la plus petite des deux marges vis-à-vis des agents au cours du temps pour chaque essai",
    "Breakdown of one control iteration into vision, serial transmission, control computation, and remaining headroom against the 50 millisecond budget": "Décomposition d’une itération de commande entre vision, transmission série, calcul de commande et marge restante sur le budget de 50 millisecondes",
    "Full screen": "Plein écran",
    "Reading the figures": "Lecture des figures",
    ": the run ended without a geometric collision;": " : l’essai s’est terminé sans collision géométrique ;",
    ": the robot finished within the tolerance threshold;": " : le robot a terminé sous le seuil de tolérance ;",
    ": both conditions hold in the same run.": " : les deux conditions sont réunies dans le même essai.",
    "Methodology": "Méthodologie",
    "Open the calibration protocol, full ranking, and limits": "Ouvrir le protocole de calibration, le classement complet et les limites",
    "Coefficients are searched in three stages — a broad Latin Hypercube sweep, a refined search recentered on the best region, then a tighter final-zone search — over seven parameters: attraction and damping gains, mobile/static/border repulsion, perception radius, and lookahead time. A scenario with a collision-free rate under 15% after Broad is quarantined from scoring but kept running, and is reinstated once it clears 50% then 80%. Nine pairs use the": "Les coefficients sont recherchés en trois étapes — un balayage Latin Hypercube large, une recherche affinée recentrée sur la meilleure région, puis une recherche plus resserrée dans la zone finale — sur sept paramètres : gains d’attraction et d’amortissement, répulsions mobile/statique/bords, rayon de perception et temps de lookahead. Un scénario dont le taux sans collision est inférieur à 15 % après Broad est mis en quarantaine du score mais continue d’être exécuté, puis réintégré une fois qu’il atteint 50 % puis 80 %. Neuf couples utilisent le budget",
    "budget; the three Straight-line pairs use": "; les trois couples en ligne droite utilisent",
    ", giving them more sampled profiles in the final region (900 versus 400).": ", ce qui leur donne plus de profils échantillonnés dans la région finale (900 contre 400).",
    "Pair": "Couple",
    "Zone: safe / target / joint": "Zone : sûr / cible / conjoint",
    "Top 4: safe / target / joint": "Top 4 : sûr / cible / conjoint",
    "Joint, calib.": "Conjoint, calib.",
    "Joint, held-out": "Conjoint, hors cal.",
    "Duration": "Durée",
    "These percentages are frequencies over a finite set of profiles and scenarios, not probabilities with a confidence interval — each pair is evaluated once, not repeated across independent random seeds, and the quarantine removes scenarios from a pair's score rather than penalising them, so the pairs are not selected over a common set of scenarios. The No-plan ablation's low joint success reflects a progression failure (collision-free but far from the goal), while Stiff-repulsion trades the opposite way by producing more unsafe runs. The ranking also depends on demanded precision: Variational + Velocity-Verlet leads at 10 cm but is matched by the Straight-line baseline at 100 cm.": "Ces pourcentages sont des fréquences sur un ensemble fini de profils et de scénarios, pas des probabilités assorties d’un intervalle de confiance — chaque couple est évalué une seule fois, sans répétition sur plusieurs graines aléatoires indépendantes, et la quarantaine retire des scénarios du score au lieu de les pénaliser, de sorte que les couples ne sont pas sélectionnés sur un ensemble commun de scénarios. Le faible succès conjoint de l’ablation sans plan traduit un défaut de progression (sans collision mais loin de l’objectif), tandis que la répulsion raide produit davantage d’essais non sûrs. Le classement dépend aussi de la précision exigée : Variationnel + Velocity-Verlet domine à 10 cm mais est rejoint par la référence en ligne droite à 100 cm.",
    "Open the full report (PDF, French)": "Ouvrir le rapport complet (PDF, en français)",
    "Evidence": "Résultats",
    "What is actually validated?": "Qu’est-ce qui est réellement validé ?",
    "Every claim is tagged by evidence level. Simulation, software tests, measured motion, and complete physical validation are not interchangeable.": "Chaque affirmation est associée à un niveau de preuve. Simulation, tests logiciels, mouvement mesuré et validation physique complète ne sont pas interchangeables.",
    "Physical": "Physique",
    "complete in tested domain": "complet dans le domaine testé",
    "complete": "complet",
    "Metric perception chain": "Chaîne de perception métrique",
    "Camera, homography, ArUco tracking, coordinates, and control closed near 20 Hz — the rover was detected in every acquired frame.": "Caméra, homographie, suivi ArUco, coordonnées et commande bouclés près de 20 Hz — le rover a été détecté sur chaque image acquise.",
    "partial": "partiel",
    "Multi-agent simulation": "Simulation multi-agents",
    "6 independent agents": "6 agents indépendants",
    "Every robot runs its own collision-avoidance brain.": "Chaque robot exécute son propre cerveau d’évitement de collision.",
    "This scenario runs the same causal correction algorithm independently inside all six agents at once, with no central coordinator. The physical trials above tested one rover; this simulation shows the same local logic scales to a decentralized multi-robot swarm.": "Ce scénario exécute le même algorithme de correction causale indépendamment dans chacun des six agents à la fois, sans coordinateur central. Les essais physiques ci-dessus n’ont testé qu’un seul rover ; cette simulation montre que la même logique locale s’étend à un essaim multi-robots décentralisé.",
    "independent agents": "agents indépendants",
    "minimum Newton-phase clearance": "dégagement minimal en phase Newton",
    "max final gap to target": "écart final maximal à la cible",
    "6-robot decentralized anti-collision": "Anti-collision décentralisée à 6 robots",
    "Experimental layer": "Couche expérimentale",
    "Open the validation matrix and metric scope": "Ouvrir la matrice de validation et le périmètre des métriques",
    "Capability": "Capacité",
    "Status": "Statut",
    "Scope": "Périmètre",
    "Nominal trajectory generation": "Génération de trajectoire nominale",
    "Software tests + simulation": "Tests logiciels + simulation",
    "Validated": "Validé",
    "Demonstrated": "Démontré",
    "2D scenarios in repository": "Scénarios 2D du dépôt",
    "Documented arena and profiles": "Arène et profils documentés",
    "Two frozen tasks; lowest margin 29.7 cm": "Deux tâches figées ; marge minimale de 29,7 cm",
    "19 aggregate runs; all 20 reached goal": "19 essais agrégés ; les 20 ont atteint l’objectif",
    "Medians 19.84 / 19.86 Hz; isolated maximum 125 ms": "Médianes 19,84 / 19,86 Hz ; maximum isolé de 125 ms",
    "Mean departures 5.81 / 5.31 cm; measured paths longer": "Écarts moyens 5,81 / 5,31 cm ; trajets mesurés plus longs",
    "Partial": "Partiel",
    "Simulation": "Simulation",
    "Not physically demonstrated": "Non démontré physiquement",
    "Aerial drone deployment": "Déploiement de drone aérien",
    "None": "Aucune",
    "Not claimed": "Non revendiqué",
    "Physical platform is a rover": "La plateforme physique est un rover",
    "Clearance is measured edge-to-edge between the conservative bounding discs used by the controller (rover radius 0.13 m), not between the physical chassis outlines. During the reported 40-run campaign, no negative value and no physical contact were recorded. The smallest margin to a moving agent was 10.6 cm with one agent and 6.3 cm with two; the smallest margin to a fixed obstacle was 29.7 cm and 49.6 cm respectively.": "La marge est mesurée bord à bord entre les disques englobants conservateurs utilisés par le contrôleur (rayon du rover : 0,13 m), et non entre les contours physiques des châssis. Durant la campagne rapportée de 40 essais, aucune valeur négative ni aucun contact physique n’ont été enregistrés. La marge minimale vis-à-vis d’un agent mobile était de 10,6 cm avec un agent et de 6,3 cm avec deux ; la marge minimale vis-à-vis d’un obstacle fixe était respectivement de 29,7 cm et 49,6 cm.",
    "Earlier exploratory work covered broader and sometimes more constrained configurations. Geometric collisions and physical contacts were observed during that development phase, together with a progression stall and a perception safety stop. Those attempts provide context, not a reliability estimate; no figure on this page uses them as the reported result.": "Les travaux exploratoires antérieurs couvraient des configurations plus variées et parfois plus contraintes. Des collisions géométriques et des contacts physiques ont été observés durant cette phase de développement, ainsi qu’un blocage de progression et un arrêt de sécurité lié à la perception. Ces tentatives apportent du contexte, pas une estimation de fiabilité ; aucune figure de cette page ne les utilise comme résultat rapporté.",
    "Physical system": "Système physique",
    "Pixels become meters.": "Les pixels deviennent des mètres.",
    "Meters become motion.": "Les mètres deviennent du mouvement.",
    "The experimental chain closes the loop between planning, perception, wheel commands, and measured trajectory error.": "La chaîne expérimentale ferme la boucle entre planification, perception, commandes des roues et erreur de trajectoire mesurée.",
    "Overhead camera feed, raw and annotated": "Flux de la caméra vue du dessus, brut et annoté",
    "Basler camera": "Caméra Basler",
    "monochrome frames": "images monochromes",
    "pixel coordinates → arena coordinates": "coordonnées pixel → coordonnées de l’arène",
    "rover, obstacle, and reference markers": "marqueurs du rover, de l’obstacle et de référence",
    "Differential control": "Commande différentielle",
    "trajectory error → wheel commands": "erreur de trajectoire → commandes des roues",
    "Validation log": "Journal de validation",
    "clearance, RMSE, stop, final gap": "dégagement, RMSE, arrêt, écart final",
    "Measured real-time budget": "Budget temps réel mesuré",
    "Causal correction": "Correction causale",
    "of the 50 ms period": "de la période de 50 ms",
    "Vision pipeline": "Chaîne de vision",
    "of the period": "de la période",
    "Serial transmission": "Transmission série",
    "Remaining headroom": "Marge restante",
    "1.4 % of the 50 ms period": "1,4 % de la période de 50 ms",
    "65.9 % of the period": "65,9 % de la période",
    "16.9 % of the period": "16,9 % de la période",
    "13.8 % of the period": "13,8 % de la période",
    "Across all 40 runs, the slowest per-run 99th percentile was 87 ms. Isolated loop periods reached 125 ms, still six times below the 750 ms safety guard.": "Sur les 40 essais, le 99e percentile par essai le plus lent était de 87 ms. Des périodes de boucle isolées ont atteint 125 ms, soit encore six fois moins que la garde de sécurité de 750 ms.",
    "Downscaling the frame before marker detection cut detection from 72.8 ms to 29.1 ms, lifting the achieved loop rate from 11.35 Hz to 19.85 Hz and dropping discarded frames from about 130 per run to 0.2 — with the controlled rover still detected in every single frame.": "Réduire la résolution de l’image avant la détection des marqueurs fait passer la détection de 72,8 ms à 29,1 ms, portant la cadence de boucle atteinte de 11,35 Hz à 19,85 Hz et faisant tomber les images perdues d’environ 130 par essai à 0,2 — le rover piloté restant détecté sur chacune des images.",
    "Repository evidence": "Preuve du dépôt",
    "The experiment, at a glance": "L’expérience en un coup d’œil",
    "A complete visual system,": "Un système visuel complet,",
    "captured from the arena.": "capturé depuis l’arène.",
    "Video, photographs, and simulation renders spanning the perception, control, and hardware chain — from raw camera frames to the rover in the arena.": "Vidéos, photographies et rendus de simulation couvrant la chaîne de perception, de commande et matérielle — des images brutes de la caméra jusqu’au rover dans l’arène.",
    "Rover + fiducial marker": "Rover + marqueur fiduciaire",
    "Software-to-hardware chain": "Chaîne logiciel-matériel",
    "Metric ArUco tracking": "Suivi ArUco métrique",
    "Nominal to causal correction": "Du nominal à la correction causale",
    "Screen-to-rover handoff": "Transfert de l’écran au rover",
    "Preprint": "Preprint",
    "· Draft v1": "· Draft v1",
    "Read the paper behind the results.": "Lire le papier à l’origine des résultats.",
    "The compact manuscript documents the method, calibration protocol, forty-run physical campaign, measured limitations, and simulation-to-reality comparison.": "Le manuscrit compact documente la méthode, le protocole de calibration, la campagne physique de quarante essais, les limites mesurées et la comparaison entre simulation et réalité.",
    "Read the preprint — Draft v1": "Lire le preprint — Draft v1",
    "Working version": "Version de travail",
    "Affiliations and corresponding-author information are still provisional in this public draft.": "affiliations et informations sur l’auteur correspondant encore provisoires dans ce brouillon public.",
    "Current boundary": "Limites actuelles",
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
    "Research advisor": "Conseiller scientifique",
    "Scientific contributions, technical exchanges, and guidance throughout the project, alongside Prof. Francisco Chinesta.": "Contributions scientifiques, échanges techniques et accompagnement tout au long du projet, en collaboration avec le Pr Francisco Chinesta.",
    "Personal website": "Site personnel",
    "January 2026": "Janvier 2026",
    "Research initiated": "Recherche initiée",
    "Problem formulation and numerical foundations with Prof. Francisco Chinesta.": "Formulation du problème et fondements numériques avec le Pr Francisco Chinesta.",
    "Summer 2026": "Été 2026",
    "Physical integration": "Intégration physique",
    "Camera, rover control, experimental campaigns, and validation at CNRS@CREATE.": "Caméra, commande du rover, campagnes expérimentales et validation au CNRS@CREATE.",
    "Late August 2026": "Fin août 2026",
    "Research showcase": "Vitrine de recherche",
    "A concise record of the method, evidence, and remaining boundary.": "Un aperçu concis de la méthode, des preuves et des limites restantes.",
    "Trajectory Optimization": "Optimisation de trajectoire",
    "for Autonomous Systems": "pour systèmes autonomes",
    "Collision-aware planning, causal correction, and measured physical validation.": "Planification tenant compte des collisions, correction causale et validation physique mesurée.",
    "Internal research showcase": "Vitrine interne de recherche",
    "Experimental claims scoped to repository evidence": "Affirmations expérimentales limitées aux preuves du dépôt",
    "Back to top": "Retour en haut"
  }));

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
      ".hero-media video": { "aria-label": language === "fr" ? "Rover mère dans l’arène d’essai, aux côtés des rovers parasites et des obstacles fixes" : "Mother rover in the test arena, alongside parasite rovers and fixed obstacles" },
      ".metrics-strip": { "aria-label": language === "fr" ? "Indicateurs clés de validation" : "Key validation metrics" },
      ".solver-table": { "aria-label": language === "fr" ? "Comparaison des solveurs" : "Solver comparison" },
      "#validation .trial-tabs": { "aria-label": language === "fr" ? "Sélectionner une figure de validation" : "Select validation figure" },
      "#calibration .trial-tabs": { "aria-label": language === "fr" ? "Sélectionner une figure de calibration" : "Select calibration figure" },
      "[data-fullscreen-figure]": { "aria-label": language === "fr" ? "Afficher la figure active en plein écran" : "Open the current figure in full screen" },
      ".calibration-stats": { "aria-label": language === "fr" ? "Périmètre de la campagne de calibration" : "Calibration campaign scope" },
      ".runtime-strip": { "aria-label": language === "fr" ? "Budget temps réel mesuré" : "Measured real-time budget" },
      ".trial-video-pair": { "aria-label": language === "fr" ? "Enregistrements vidéo des essais physiques anti-collision" : "Video recordings of the physical anti-collision runs" },
      ".sim-spotlight": { "aria-label": language === "fr" ? "Simulation d’anti-collision à six agents" : "Six-agent anti-collision simulation" },
      ".media-video-row > figure:first-child > img": { alt: language === "fr" ? "Image caméra annotée montrant les marqueurs ArUco dans l’arène d’essai du rover" : "Annotated camera frame showing ArUco markers in the rover test arena" },
      ".system-photo .tracking-pair img:nth-child(1)": { alt: language === "fr" ? "Image brute de la caméra zénithale de l’arène du rover et de l’obstacle" : "Raw overhead camera frame of the rover and obstacle arena" },
      ".system-photo .tracking-pair img:nth-child(2)": { alt: language === "fr" ? "Même image avec les identifiants ArUco, coordonnées et homographie superposés" : "Same frame with ArUco tracking IDs, coordinates, and homography overlaid" },
      ".institution-logos": { "aria-label": language === "fr" ? "Institutions partenaires" : "Partner institutions" },
      ".team-grid article:nth-child(1) .team-link": { "aria-label": language === "fr" ? "Visiter le portfolio de Slimane Aouanouk (s’ouvre dans un nouvel onglet)" : "Visit Slimane Aouanouk's portfolio (opens in a new tab)" },
      ".team-grid article:nth-child(2) .team-link": { "aria-label": language === "fr" ? "Visiter le profil LinkedIn de Mathis Benchikh (s’ouvre dans un nouvel onglet)" : "Visit Mathis Benchikh's LinkedIn profile (opens in a new tab)" },
      ".team-grid article:nth-child(3) .team-link": { "aria-label": language === "fr" ? "Visiter le site personnel d’Amine Ammar (s’ouvre dans un nouvel onglet)" : "Visit Amine Ammar's personal website (opens in a new tab)" },
      ".team-grid article:nth-child(4) .team-link": { "aria-label": language === "fr" ? "Visiter le profil ResearchGate du Pr Francisco Chinesta (s’ouvre dans un nouvel onglet)" : "Visit Prof. Francisco Chinesta's ResearchGate profile (opens in a new tab)" },
      ".team-grid article:nth-child(5) .team-link": { "aria-label": language === "fr" ? "Visiter le profil LinkedIn de Sebastian Rodriguez Iturra (s’ouvre dans un nouvel onglet)" : "Visit Sebastian Rodriguez Iturra's LinkedIn profile (opens in a new tab)" }
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
    document.querySelectorAll("[data-tabs]").forEach((scope) => {
      const activeTab = scope.querySelector("[data-figure].is-active");
      const figure = scope.querySelector("[data-validation-figure]");
      const captionElement = scope.querySelector("[data-figure-caption]");
      if (!activeTab || !figure) return;
      const alt = activeTab.dataset.alt ?? "Validation figure";
      const caption = activeTab.dataset.caption ?? "";
      figure.alt = activeLanguage === "fr" && frenchCopy.has(alt) ? frenchCopy.get(alt) : alt;
      if (captionElement) captionElement.textContent = activeLanguage === "fr" && frenchCopy.has(caption) ? frenchCopy.get(caption) : caption;
    });
    try { localStorage.setItem("paco-language", activeLanguage); } catch { /* Storage can be unavailable. */ }
  };

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const menuButton = document.querySelector("[data-menu-button]");
  const navigation = document.querySelector("[data-nav]");
  const mobileNavigation = window.matchMedia("(max-width: 1040px)");
  const navigationAnchor = document.createComment("primary-navigation");

  navigation?.before(navigationAnchor);

  const moveNavigationToOverlay = () => {
    if (mobileNavigation.matches && navigation?.parentElement !== document.body) document.body.append(navigation);
  };

  const restoreNavigation = () => {
    if (navigationAnchor.parentNode && navigation?.parentElement === document.body) navigationAnchor.after(navigation);
  };

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
    restoreNavigation();
  };

  menuButton?.addEventListener("click", () => {
    const shouldOpen = menuButton.getAttribute("aria-expanded") !== "true";
    if (shouldOpen) moveNavigationToOverlay();
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

  document.querySelectorAll("[data-tabs]").forEach((scope) => {
    const tabs = [...scope.querySelectorAll("[data-figure]")];
    const figureEl = scope.querySelector("[data-validation-figure]");
    const captionEl = scope.querySelector("[data-figure-caption]");
    const fullscreenButton = scope.querySelector("[data-fullscreen-figure]");
    const fullscreenShell = fullscreenButton?.closest(".evidence-image-shell");

    const selectFigure = (button) => {
      tabs.forEach((tab) => {
        const isActive = tab === button;
        tab.classList.toggle("is-active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
        tab.tabIndex = isActive ? 0 : -1;
      });
      if (!figureEl) return;
      figureEl.classList.add("is-changing");
      window.setTimeout(() => {
        figureEl.src = button.dataset.figure ?? "";
        const alt = button.dataset.alt ?? "Validation figure";
        figureEl.alt = activeLanguage === "fr" && frenchCopy.has(alt) ? frenchCopy.get(alt) : alt;
        if (captionEl) {
          const caption = button.dataset.caption ?? "";
          captionEl.textContent = activeLanguage === "fr" && frenchCopy.has(caption) ? frenchCopy.get(caption) : caption;
        }
        figureEl.classList.remove("is-changing");
      }, reducedMotion ? 0 : 160);
    };

    tabs.forEach((button, index) => {
      button.addEventListener("click", () => selectFigure(button));
      button.addEventListener("keydown", (event) => {
        if (!["ArrowLeft", "ArrowRight"].includes(event.key)) return;
        event.preventDefault();
        const direction = event.key === "ArrowRight" ? 1 : -1;
        const nextIndex = (index + direction + tabs.length) % tabs.length;
        tabs[nextIndex].focus();
        selectFigure(tabs[nextIndex]);
      });
    });

    fullscreenButton?.addEventListener("click", async () => {
      if (!fullscreenShell || !document.fullscreenEnabled) return;
      try {
        if (document.fullscreenElement === fullscreenShell) {
          await document.exitFullscreen();
        } else {
          await fullscreenShell.requestFullscreen();
        }
      } catch {
        // Full screen can be rejected when the browser does not recognize a direct user gesture.
      }
    });
  });

  document.querySelectorAll(".system-photo [data-fullscreen-figure]").forEach((button) => {
    const media = button.closest(".tracking-pair");
    button.addEventListener("click", async () => {
      if (!media || !document.fullscreenEnabled) return;
      try {
        if (document.fullscreenElement === media) {
          await document.exitFullscreen();
        } else {
          await media.requestFullscreen();
        }
      } catch {
        // Full screen can be rejected when the browser does not recognize a direct user gesture.
      }
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
