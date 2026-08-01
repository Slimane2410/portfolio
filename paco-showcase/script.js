(() => {
  "use strict";

  const frenchCopy = new Map(Object.entries({
    "Skip to content": "Aller au contenu",
    "Toggle navigation": "Afficher la navigation",
    "Method": "Méthode",
    "Calibration": "Calibration",
    "Validation": "Validation",
    "System": "Système",
    "Team": "Équipe",
    "Anti-collision validated": "Anti-collision validé",
    "Autonomous systems": "Systèmes autonomes",
    "Research showcase": "Vitrine de recherche",
    "From the optimized": "De la trajectoire",
    "trajectory to": "optimisée au",
    "real motion.": "mouvement réel.",
    "Our system enables the robot to navigate autonomously, identify obstacles in its\n              environment, and correct its trajectory in real time to reach its target.": "Notre système permet au robot de se déplacer en autonomie, d’identifier les obstacles dans son environnement et de corriger sa trajectoire en temps réel pour atteindre sa cible.",
    "Explore the method": "Explorer la méthode",
    "See the evidence": "Voir les résultats",
    "Physical · validated": "Physique · validé",
    "Physical · complete": "Physique · complet",
    "· mother rover among moving robots": "· rover mère parmi des robots mobiles",
    "· avoidance of a moving robot": "· évitement d’un robot mobile",
    "· safe and ≤ 10 cm from target": "· sûr et à moins de 10 cm de la cible",
    "· 6 independent agents": "· 6 agents indépendants",
    "Runs reaching the goal": "Essais atteignant l’objectif",
    "with moving robots in the arena": "avec des robots mobiles dans l’arène",
    "across those runs": "sur ces essais",
    "Two-agent runs": "Essais à deux agents",
    "two moving robots at once": "deux robots mobiles simultanés",
    "ArUco detection": "Détection ArUco",
    "over 5,688 logged frames": "sur 5 688 images enregistrées",
    "validated": "validé",
    "Moving-agent avoidance": "Évitement d’agent mobile",
    "The rover detects moving robots, deviates around them, and still reaches its goal.": "Le rover détecte les robots mobiles, les contourne et atteint malgré tout son objectif.",
    "Fixed-obstacle avoidance": "Évitement d’obstacle fixe",
    "Fixed columns avoided in the same runs, with the same causal corrector.": "Colonnes fixes évitées dans les mêmes essais, avec le même correcteur causal.",
    "Partial · in progress": "Partiel · en cours",
    "Predictive digital twin": "Jumeau numérique prédictif",
    "The twin predicts arrival well, but not yet the full path taken.": "Le jumeau prédit bien l’arrivée, mais pas encore tout le trajet parcouru.",
    "Anti-collision campaign": "Campagne anti-collision",
    "July 30, 2026": "30 juillet 2026",
    "The rover now avoids moving robots — and still reaches its target.": "Le rover évite désormais des robots mobiles — et arrive quand même à sa cible.",
    "Across the final campaign the rover shared its arena with one or two independently moving robots plus fixed columns. It leaves its nominal path to open a gap, then closes back onto the goal. Every run below is a physical run, logged frame by frame.": "Lors de la campagne finale, le rover a partagé son arène avec un ou deux robots se déplaçant de façon indépendante, en plus des colonnes fixes. Il quitte sa trajectoire nominale pour créer un écart, puis revient vers l’objectif. Chaque essai ci-dessous est un essai physique, enregistré image par image.",
    "runs reached the goal with moving agents present": "essais ont atteint l’objectif en présence d’agents mobiles",
    "mean final distance to target (max 7.9)": "distance finale moyenne à la cible (max 7,9)",
    "runs with two simultaneous moving agents": "essais avec deux agents mobiles simultanés",
    "One moving agent": "Un agent mobile",
    "Two moving agents": "Deux agents mobiles",
    "Digital twin": "Jumeau numérique",
    "Real / simulation": "Réel / simulation",
    "Mobile safety clearance": "Marge de sécurité mobile",
    "Latest Phase 6.10 run · two moving agents · real/simulation comparison · 31 July 2026": "Dernier essai Phase 6.10 · deux agents mobiles · comparaison réel/simulation · 31 juillet 2026",
    "Latest Phase 6.10 run · logged mobile safety clearance · 31 July 2026": "Dernier essai Phase 6.10 · marge de sécurité mobile issue du log · 31 juillet 2026",
    "Validated run · one moving agent · real/simulation comparison · 29 July 2026": "Essai validé · un agent mobile · comparaison réel/simulation · 29 juillet 2026",
    "Validated run · two moving agents · real/simulation comparison · 31 July 2026": "Essai validé · deux agents mobiles · comparaison réel/simulation · 31 juillet 2026",
    "Simulated versus measured arrival point across 21 paired runs": "Point d’arrivée simulé et mesuré sur 21 essais appariés",
    "Multi-agent run": "Essai multi-agents",
    "mother rover among moving robots": "rover mère parmi des robots mobiles",
    "Close pass": "Passage rapproché",
    "avoidance of a moving robot": "évitement d’un robot mobile",
    "Fixed-obstacle physical avoidance": "Évitement physique d’obstacle fixe",
    "Phase 6.10 campaign": "Campagne Phase 6.10",
    "Moving-agent physical avoidance": "Évitement physique d’agent mobile",
    "23 runs, 30 July 2026": "23 essais, 30 juillet 2026",
    "1–2 moving robots, 2 × 2 m arena": "1 à 2 robots mobiles, arène de 2 × 2 m",
    "Two simultaneous moving agents": "Deux agents mobiles simultanés",
    "9 runs, all reached goal": "9 essais, tous ont atteint l’objectif",
    "Same corrector, no retuning": "Même correcteur, sans réglage supplémentaire",
    "Decentralized multi-agent (6 robots)": "Multi-agents décentralisé (6 robots)",
    "23 paired sim/real runs": "23 essais appariés simulation/réel",
    "Arrival predicted; path not yet": "Arrivée prédite ; trajet pas encore",
    "Clearance is measured edge-to-edge between the conservative bounding discs used by the controller (rover radius 0.13 m), not between the physical chassis outlines. A small negative value therefore means the two safety discs overlapped, not that the robots touched. On the 12 runs where both the moving-agent and fixed-obstacle clearances stayed strictly positive for the whole run, the smallest measured margin was 3.0 cm and the mean was 25.8 cm.": "Le dégagement est mesuré bord à bord entre les disques englobants conservateurs utilisés par le contrôleur (rayon rover de 0,13 m), et non entre les contours physiques des châssis. Une petite valeur négative signifie donc que les deux disques de sécurité se chevauchent, pas que les robots se sont touchés. Sur les 12 essais où les dégagements vis-à-vis de l’agent mobile et de l’obstacle fixe sont restés strictement positifs pendant tout l’essai, la marge mesurée la plus faible était de 3,0 cm et la moyenne de 25,8 cm.",
    "Of the 23 runs, one ended on a safety stop when a marker was momentarily lost near an agent, and one hit the duration limit — both are the safety layer behaving as designed, not collisions. Percentages describe this single campaign in one arena with one hardware setup; they are not a general reliability figure.": "Sur les 23 essais, un s’est terminé par un arrêt de sécurité lorsqu’un marqueur a été momentanément perdu près d’un agent, et un autre a atteint la limite de durée — dans les deux cas la couche de sécurité s’est comportée comme prévu, il ne s’agit pas de collisions. Les pourcentages décrivent cette seule campagne, dans une arène et avec un montage matériel uniques ; ce n’est pas une mesure générale de fiabilité.",
    "Avoidance is validated.": "L’évitement est validé.",
    "Prediction is what comes next.": "La prédiction est l’étape suivante.",
    "The twin already predicts where the rover stops to within about a centimetre, but not the path it takes to get there. Closing that gap — modelling wheel slip, latency, and contact more faithfully — is the next major step.": "Le jumeau prédit déjà à environ un centimètre près l’endroit où le rover s’arrête, mais pas le trajet qu’il emprunte pour y arriver. Combler cet écart — en modélisant plus fidèlement le glissement des roues, la latence et les contacts — constitue la prochaine étape majeure.",
    "Predictive control and learning": "Commande prédictive et apprentissage",
    "The corrector reacts to the present state only. Model predictive control and learning-based policies would let the rover anticipate where a moving agent is heading instead of responding once it is close.": "Le correcteur ne réagit qu’à l’état présent. La commande prédictive par modèle (MPC) et des politiques fondées sur l’apprentissage permettraient au rover d’anticiper la direction d’un agent mobile au lieu de réagir une fois celui-ci proche.",
    "Better nominal planning": "Meilleure planification nominale",
    "The nominal path comes from a local variational solve that depends on its initialization. Graph search such as A* — used to seed or replace that stage — should give a more reliable global route before the causal layer refines it.": "Le chemin nominal provient d’une résolution variationnelle locale qui dépend de son initialisation. Une recherche sur graphe telle que A* — pour amorcer ou remplacer cette étape — devrait fournir un itinéraire global plus fiable avant que la couche causale ne l’affine.",
    "Scale and benchmark breadth": "Passage à l’échelle et étendue du benchmark",
    "Decentralized avoidance is validated physically for two moving agents and in simulation for six. Larger fleets, and a frozen scenario suite for solver comparison, remain to be done.": "L’évitement décentralisé est validé physiquement pour deux agents mobiles et en simulation pour six. Des flottes plus grandes, ainsi qu’un ensemble de scénarios figé pour comparer les solveurs, restent à réaliser.",
    "Full arena run": "Essai complet dans l’arène",
    "This scenario runs the same causal correction algorithm independently inside all six agents at once, with no central coordinator. The physical runs above validated this logic on one controlled rover among two moving robots; the simulation shows it extends to a fully decentralized swarm where every agent avoids every other.": "Ce scénario exécute le même algorithme de correction causale indépendamment dans chacun des six agents à la fois, sans coordinateur central. Les essais physiques ci-dessus ont validé cette logique sur un rover piloté parmi deux robots mobiles ; la simulation montre qu’elle s’étend à un essaim entièrement décentralisé où chaque agent évite tous les autres.",
    "Field footage": "Prise réelle",
    "Mother rover in the test arena, alongside parasite rovers and fixed obstacles": "Rover mère dans l’arène d’essai, aux côtés des rovers parasites et des obstacles fixes",
    "Mean final error": "Erreur finale moyenne",
    "ArUco detections": "Détections ArUco",
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
    "SciPy action minimization or direct Euler–Lagrange residuals": "Minimisation d’action SciPy ou résidus directs d’Euler–Lagrange",
    "Force dynamics": "Dynamique des forces",
    "current observation": "observation actuelle",
    "The causal correction phase": "La phase de correction causale",
    "Follow the nominal path while attraction, repulsion, and damping modify the current motion when a mobile agent is observed.": "Suivre le chemin nominal pendant que l’attraction, la répulsion et l’amortissement modifient le mouvement courant lorsqu’un agent mobile est observé.",
    "Nominal reference and current mobile state": "Référence nominale et état mobile courant",
    "Trajectory corrected locally at every instant": "Trajectoire corrigée localement à chaque instant",
    "Update": "Mise à jour",
    "Semi-implicit Euler, Verlet, or Lennard-Jones variant": "Euler semi-implicite, Verlet ou variante de Lennard-Jones",
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
    "Longer campaigns for greater precision": "Campagnes plus longues pour une meilleure précision",
    "Stationarity residual through root or least-squares methods": "Résidu de stationnarité par méthodes de racines ou moindres carrés",
    "Low-complexity problems": "Problèmes à faible complexité",
    "Faster campaigns, but convergence remained scenario-sensitive": "Campagnes plus rapides, mais convergence sensible au scénario",
    "Straight-line baseline": "Référence en ligne droite",
    "No nominal optimization": "Aucune optimisation nominale",
    "Ablation and runtime baseline": "Référence d’ablation et de temps d’exécution",
    "Ease of computation for a low-quality reference": "Facilité de calcul pour une référence de faible qualité",
    "Fully causal Newtonian dynamics without a nominal trajectory": "Dynamique newtonienne entièrement causale sans trajectoire nominale",
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
    "SciPy leads both readings; Full Newton stays safe but rarely arrives.": "SciPy domine les deux lectures ; Full Newton reste sûr mais atteint rarement la cible.",
    "Across the full final zone, SciPy + Initial leads with 50.84% joint success. Restricted to each pair's top 4 profiles and widened to 10 held-out scenarios, SciPy + Verlet edges ahead at 65.38%. Full Newton — the ablation with no nominal phase at all — reaches up to 96% collision-free runs and as little as 3.85% joint success: it stays safe by stalling short of the goal, not by reaching it.": "Sur toute la zone finale, SciPy + Initial domine avec 50,84 % de succès conjoint. En se limitant aux 4 meilleurs profils de chaque couple et en élargissant à 10 scénarios hors calibration, SciPy + Verlet passe légèrement devant avec 65,38 %. Full Newton — l’ablation sans aucune phase nominale — atteint jusqu’à 96 % de runs sans collision, pour seulement 3,85 % de succès conjoint : il reste sûr en s’arrêtant avant la cible, pas en l’atteignant bien.",
    "best full-zone joint success · SciPy + Initial": "meilleur succès conjoint sur la zone complète · SciPy + Initial",
    "best top-4 joint success · SciPy + Verlet": "meilleur succès conjoint du top 4 · SciPy + Verlet",
    "Full Newton + Initial/Verlet, despite 96% safety": "Full Newton + Initial/Verlet, malgré 96 % de sécurité",
    "Full zone": "Zone complète",
    "Outcome breakdown": "Décomposition des résultats",
    "Generalization": "Généralisation",
    "Threshold sensitivity": "Sensibilité au seuil",
    "Choose a figure — the graph updates when clicked": "Choisissez une figure — le graphique se met à jour au clic",
    "Full final zone · all profiles per pair · 16 calibration scenarios": "Zone finale complète · tous les profils par couple · 16 scénarios de calibration",
    "Top 4 profiles per pair · 26 scenarios, 16 calibration plus 10 held-out": "Top 4 des profils par couple · 26 scénarios, dont 16 de calibration et 10 hors calibration",
    "Exclusive outcome shares for the top-4 runs · complete success, safe but off-target, unsafe": "Répartition exclusive des résultats du top 4 · succès complet, sûr mais hors cible, non sûr",
    "Top-4 joint success on the 16 calibration scenarios versus the 10 held-out scenarios": "Succès conjoint du top 4 sur les 16 scénarios de calibration face aux 10 scénarios hors calibration",
    "Top-4 joint success as the target tolerance relaxes from 0 to 100 cm": "Succès conjoint du top 4 lorsque la tolérance à la cible passe de 0 à 100 cm",
    "Full screen": "Plein écran",
    "Reading the figures": "Lecture des figures",
    ": the trial ended without any collision;": " : l’essai s’est terminé sans aucune collision,",
    ": the robot reaches the target within the tolerance threshold;": " : le robot atteint la cible sous le seuil de tolérance,",
    ": the robot reaches the target without any collision.": " : le robot atteint la cible sans aucune collision.",
    "Methodology": "Méthodologie",
    "Open the calibration protocol, full ranking, and limits": "Ouvrir le protocole de calibration, le classement complet et les limites",
    "Coefficients are searched in three stages — a broad Latin Hypercube sweep, a refined search recentered on the best region, then a tighter final-zone search — over seven parameters: attraction and damping gains, mobile/static/border repulsion, perception radius, and lookahead time. A scenario with a collision-free rate under 15% after Broad is quarantined from scoring but kept running, and is reinstated once it clears 50% then 80%. Nine pairs use the": "Les coefficients sont recherchés en trois étapes — un balayage Latin Hypercube large, une recherche affinée recentrée sur la meilleure région, puis une recherche plus resserrée dans la zone finale — sur sept paramètres : gains d’attraction et d’amortissement, répulsions mobile/statique/bords, rayon de perception et temps de lookahead. Un scénario dont le taux sans collision est inférieur à 15 % après Broad est mis en quarantaine du score mais continue d’être exécuté, puis réintégré une fois qu’il atteint 50 % puis 80 %. Neuf couples utilisent le budget",
    "budget; the three Line-based pairs use": "; les trois couples fondés sur Line utilisent",
    ", giving Line more sampled profiles in its final zone (900 versus 400).": ", ce qui donne à Line plus de profils échantillonnés dans sa zone finale (900 contre 400).",
    "Pair": "Couple",
    "Zone: safe / target / joint": "Zone : sûr / cible / conjoint",
    "Top 4: safe / target / joint": "Top 4 : sûr / cible / conjoint",
    "Joint, calib.": "Conjoint, calib.",
    "Joint, held-out": "Conjoint, hors cal.",
    "Duration": "Durée",
    "These percentages are frequencies over a finite set of profiles and scenarios, not probabilities with a confidence interval — each pair is evaluated once, not repeated across independent random seeds. Full Newton's low joint success reflects a progression failure (safe but far from the goal), not primarily a safety failure; Jones controllers trade the opposite way, converting more of their safety margin into unsafe events through a very stiff 1/d¹³ repulsion law.": "Ces pourcentages sont des fréquences sur un ensemble fini de profils et de scénarios, pas des probabilités assorties d’un intervalle de confiance — chaque couple est évalué une seule fois, sans répétition sur plusieurs graines aléatoires indépendantes. Le faible succès conjoint de Full Newton traduit surtout un défaut de progression (sûr mais loin de la cible), pas principalement un défaut de sécurité ; les contrôleurs Jones échangent l’inverse, convertissant une part de leur marge de sécurité en événements non sûrs à cause d’une loi de répulsion en 1/d¹³ très raide.",
    "Open the full report (PDF, French)": "Ouvrir le rapport complet (PDF, en français)",
    "Evidence": "Résultats",
    "What is actually validated?": "Qu’est-ce qui est réellement validé ?",
    "Every claim is tagged by evidence level. Simulation, software tests, measured motion, and complete physical validation are not interchangeable.": "Chaque affirmation est associée à un niveau de preuve. Simulation, tests logiciels, mouvement mesuré et validation physique complète ne sont pas interchangeables.",
    "Physical": "Physique",
    "complete in tested domain": "complet dans le domaine testé",
    "complete": "complet",
    "Metric perception chain": "Chaîne de perception métrique",
    "Camera, homography, ArUco tracking, coordinates, and control connected.": "Caméra, homographie, suivi ArUco, coordonnées et commande connectés.",
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
    "2D scenarios in repository": "Scénarios 2D du dépôt",
    "Documented arena and profiles": "Arène et profils documentés",
    "Partial": "Partiel",
    "Simulation": "Simulation",
    "Not physically demonstrated": "Non démontré physiquement",
    "Aerial drone deployment": "Déploiement de drone aérien",
    "None": "Aucune",
    "Not claimed": "Non revendiqué",
    "Physical platform is a rover": "La plateforme physique est un rover",
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
    "900 / 900 frames captured in 30-second Ethernet tests on both Mac and Raspberry Pi.": "900 / 900 images capturées lors de tests Ethernet de 30 secondes sur Mac et Raspberry Pi.",
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
    try { localStorage.setItem("paco-language", activeLanguage); } catch { /* Storage can be unavailable. */ }
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
        figureEl.alt = button.dataset.alt ?? "Validation figure";
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
