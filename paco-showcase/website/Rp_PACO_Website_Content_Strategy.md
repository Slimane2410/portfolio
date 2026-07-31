# Stratégie de contenu et de construction du site vitrine PACO

**Version :** 1.1 — audit et décisions du 18 juillet 2026  
**Dépôt analysé :** `trajectory-optimization-drone`  
**Livrable suivant :** implémentation dans un dossier autonome `paco-showcase/`, après réponse au questionnaire groupé de la section 22.

> **Principe éditorial de sûreté.** Le site distinguera toujours un résultat simulé, un test logiciel, une observation physique, une validation physique complète et une piste future. La présence d'un script, d'une image ou d'un rapport nommé « validation » n'est pas considérée comme une preuve suffisante.

### Addendum après réponse du commanditaire

- Titre public retenu : **Trajectory Optimization for Autonomous Systems** ; aucune mention visible de « Project Paco ».
- Langue du site : anglais américain intégral.
- Diffusion : interne, mais partage ponctuel possible avec quelques chercheurs ; balise `noindex` activée.
- Équipe : Slimane AOUANOUK et Mathis BENCHIKH, étudiants ; Amine AMMAR, tuteur technique du stage ; Prof. Francisco Chinesta, encadrant scientifique.
- Contexte : projet commencé en janvier avec Prof. Francisco Chinesta, puis poursuivi pendant le stage d'été à CNRS@CREATE, Singapour.
- Identités : logos officiels Arts et Métiers Institute of Technology et CNRS@CREATE.
- Code et rapports : aucun lien public tant que le dépôt n'est pas publié.
- Cible de mise en ligne : 1er août 2026.
- Déploiement recommandé : GitHub Pages ; Vercel reste compatible.
- Stack finalement livrée : HTML, CSS et JavaScript natifs, sans dépendance, car l'environnement ne contient pas Node.js et le site n'a besoin d'aucun build pour être déployé.
- Les médias manquants sont remplacés provisoirement par des concepts synthétiques explicitement étiquetés. Les essais 14 et 15 disposent chacun d'un emplacement vidéo dédié.

---

## 1. Résumé exécutif

### Recommandation

Construire une **page unique verticale**, statique, en français, avec navigation par ancres et trois blocs techniques dépliables. Ce format est le plus adapté à Paco : le récit complet se comprend en trois à cinq minutes sans changer de page. Amine peut ouvrir les détails mathématiques, les métriques et les réserves sans alourdir la lecture principale.

### Message central

> **PACO transforme un problème de navigation contraint en une trajectoire calculée, l'adapte à ce qui est observé, puis mesure l'écart entre le plan et le mouvement réel.**

Phrase très courte pour le Hero :

> **De l'optimisation mathématique au mouvement mesuré.**

### Ce que le dépôt permet d'affirmer

- Le cœur sait générer des trajectoires nominales 2D avec départ et arrivée imposés, obstacles fixes, murs, pénalités de vitesse et d'accélération, et plusieurs stratégies numériques.
- La Phase 5 bis sépare correctement le **plan nominal statique** d'une **correction locale causale** qui ne lit que l'état courant des mobiles.
- Le projet contient des scénarios simulés à un ou plusieurs robots, des métriques de sécurité et plusieurs variantes de solveur/contrôleur.
- La chaîne caméra Basler → homographie → ArUco → coordonnées métriques → commande du rover a été construite et testée physiquement.
- Le suivi physique d'une trajectoire contournant un obstacle fixe a été répété avec succès dans les deux sens. Sur les deux essais finaux : RMSE latérale moyenne de **1,163 cm**, RMSE d'orientation de **6,291°**, erreur finale moyenne de **3,282 cm**, pire marge réelle à l'obstacle de **12,299 cm**, 342 détections ArUco sur 342.
- Un suivi continu et lissé a été validé sur des segments quasi rectilignes : RMSE latérale moyenne de **0,283 cm**, erreur finale moyenne de **0,985 cm**, aucun pivot et aucun arrêt intermédiaire. Cette preuve ne couvre pas encore le contournement lissé d'un obstacle.
- La Phase 6.10 a validé physiquement la détection d'un mobile, la correction active, l'arrêt préventif et l'envoi de commandes corrigées. Elle **n'a pas encore validé un contournement mobile complet jusqu'à la cible**.

### Conclusion honnête sur l'état du projet

Le projet est **fonctionnel et quantitativement validé pour la génération nominale, la chaîne de perception métrique, le suivi de trajectoires courbes et le contournement d'un obstacle fixe dans le domaine testé**. La simulation dynamique et multi-agent est substantielle. La correction causale face à un mobile est intégrée jusqu'au rover mais reste **partiellement validée** : le mouvement d'évitement complet et reproductible n'est pas encore démontré physiquement.

### Architecture narrative retenue

```text
Problème contraint
→ candidats de trajectoire
→ nominal statique (phase dite « Lagrange »)
→ correction locale causale (phase dite « Newton ») en simulation/dynamique
→ suivi différentiel du nominal sur le rover
→ caméra + homographie + ArUco
→ comparaison nominal / réel
→ verdict de validation et limites
```

Important : l'essai physique le plus fort avec obstacle fixe valide le nominal et son suivi par le rover. Il ne faut pas laisser entendre que toute la boucle locale Phase 5 bis a été physiquement validée par cet essai. La Phase 6.10 constitue la preuve séparée, encore partielle, de l'adaptation causale aux mobiles.

---

## 2. Public cible et objectifs

| Public | Besoin principal | Réponse du site | Temps de lecture visé |
|---|---|---|---:|
| Paco | Comprendre le problème, la contribution, la logique des deux phases et le niveau réel de validation | Récit visuel, pipeline, trois résultats clés, matrice de validation | 3 à 5 min |
| Amine | Vérifier la cohérence mathématique, numérique et expérimentale | Trois équations, comparaison contrôlée, métriques, hypothèses et détails dépliables | 10 à 20 min |
| Visiteur externe | Situer rapidement le projet de recherche | Hero, démonstration, système réel, statut clair | 2 à 3 min |

Objectifs prioritaires :

1. rendre la séparation **planifier / réagir / exécuter / mesurer** immédiatement compréhensible ;
2. montrer une preuve physique avant de détailler l'architecture logicielle ;
3. expliquer « Lagrange » et « Newton » sans employer abusivement ces noms ;
4. donner à Amine des formules exactement alignées sur le code ;
5. afficher les limites avec le même soin visuel que les succès.

---

## 3. Message central du site

### Problème scientifique et d'ingénierie

Trouver puis exécuter une trajectoire entre deux positions dans une arène contrainte, en conciliant longueur/énergie, régularité, limites physiques, obstacles fixes, interactions mobiles et information imparfaite disponible en temps réel.

### Contribution principale

La contribution n'est pas un solveur isolé. C'est une chaîne cohérente :

- un modèle variationnel et un coût modulaire ;
- plusieurs générateurs nominaux comparables ;
- une correction locale causale pour les mobiles ;
- un banc de simulation et de métriques ;
- une chaîne expérimentale complète caméra–repère métrique–commande–logs ;
- une validation réelle par superposition du nominal et du mouvement mesuré.

### Pourquoi deux phases successives ?

La première phase exploite la vue globale des éléments statiques pour dessiner un chemin de référence cohérent. La seconde phase traite ce que le plan global ne doit pas supposer connaître à l'avance : les positions courantes d'obstacles ou de robots mobiles. Cette séparation évite qu'un plan dit « temps réel » lise artificiellement le futur d'un mobile.

### Rôle exact de la phase dite « Lagrange »

Dans le pipeline principal, elle construit une **trajectoire nominale globale** sur une photographie statique du monde. Le solveur SciPy historique minimise une action discrète avec gradient analytique ; une autre variante résout directement un résidu d'Euler–Lagrange discret. Le nom « Lagrange » désigne donc la famille variationnelle du plan nominal, pas un unique algorithme.

### Rôle exact de la phase dite « Newton »

Elle produit une trajectoire réalisée simulée, pas une nouvelle optimisation globale. À chaque pas, elle combine attraction vers une référence légèrement en avance, répulsions locales, amortissement, saturation de vitesse/accélération et intégration temporelle. Dans le dépôt, « Newton » renvoie à une **dynamique newtonienne par forces**. Ce n'est pas la méthode d'optimisation de Newton–Raphson.

### Passage simple d'une phase à l'autre

> **La première phase trace le rail ; la seconde déplace une cible locale sur ce rail et corrige le mouvement avec ce qui est observé maintenant.**

### Logique la plus difficile à comprendre et solution visuelle

La difficulté principale est de ne pas confondre :

- trajectoire initiale ;
- trajectoire nominale optimisée ;
- trajectoire corrigée en simulation ;
- trajectoire réellement mesurée ;
- correction causale mobile encore partiellement validée dans le réel.

Le site utilisera un schéma progressif unique avec quatre courbes superposées et une légende stable :

- gris pointillé : candidats initiaux ;
- bleu nuit : nominal statique ;
- cyan : trajectoire corrigée causale ;
- vert : trajectoire physique mesurée.

Chaque étape s'active au défilement, sans animation automatique rapide.

---

## 4. Analyse du projet et des contenus disponibles

### 4.1 Architecture logicielle réellement observée

| Zone | Fichiers représentatifs | Rôle réel | Intérêt pour le site |
|---|---|---|---|
| Problème et discrétisation | `trajopt/core/problem.py`, `discretization.py` | Grille temporelle, points intérieurs, vitesses, accélérations, action discrète | Base de l'explication mathématique |
| Coûts et potentiels | `trajopt/core/cost.py` | Cinétique, cible, obstacles, agents, murs, vent, zones interdites, limites physiques souples | Équation 1 et visualisation des couches de coût |
| Solveur variationnel SciPy | `trajopt/core/solver.py` | Minimise l'action discrète par L-BFGS-B, gradient analytique optionnel, candidats initiaux paramétriques | Solveur principal et nominal utilisé pour le réel |
| Solveur Euler–Lagrange | `solver_euler_lagrange.py`, `potentials_euler_lagrange.py` | Annule un résidu EL discret via `root`/`least_squares` ; V1 statique sans agents nominaux | Preuve de maîtrise mathématique, variante de recherche |
| Baseline ligne | `solver_line.py` | Interpolation droite, coût et métriques sans optimisation | Baseline rapide, pas « meilleur solveur » universel |
| Correcteur causal | `causal_local_controller.py` | Nominal statique + forces locales courantes + intégration Euler/Verlet/Jones | Cœur du récit « planifier puis réagir » |
| Full Newton | même module | Dynamique locale directement vers le but, sans nominal | Ablation/famille séparée, uniquement dans le détail |
| Monde et mobiles | `trajopt/environment/` | Obstacles/agents fixes, mobiles ou scriptés | Scénarios et causalité |
| Simulation | `trajopt/simulation/` | Catalogue de scénarios, figures, animations, dashboards | Démonstrations et génération de médias |
| Comparateurs | `experiments/lagrange_campaign_01/`, `trajectory_comparator_benchmark/` | Campagnes historiques et comparaison de pipelines | Graphiques techniques avec réserves |
| Expérimental | `trajopt/experimental/` | Série/HTTP, caméra, homographie, ArUco, commande et suivi | Passage simulation → réel |
| Preuves physiques | `experiments/phase6/`, `context/Codex/phase6/annexes/` | CSV, JSON, rapports, figures et journaux d'essais | Source prioritaire des chiffres affichés |

### 4.2 Génération initiale

Le solveur SciPy ne part plus systématiquement d'une simple ligne. `initial_guess.py` génère des candidats paramétriques, dont des déviations sinusoïdales autour de la ligne directe, évalue leur coût et leur clearance, rejette les géométries invalides puis sélectionne un warm start. Le solveur Euler–Lagrange V1 utilise encore une interpolation linéaire par défaut. La baseline `solver_line` retourne directement cette ligne.

Cette différence mérite un petit schéma « plusieurs hypothèses → une candidate retenue → optimisation » ; elle ne mérite pas une section autonome.

### 4.3 Potentiels et contraintes

- Les conditions aux limites sont dures : `x(0)=x0` et `x(T)=xT` restent fixées ; seuls les points intérieurs sont optimisés.
- Les limites de vitesse et d'accélération du nominal sont des **pénalités souples**, pas des contraintes strictes.
- Le potentiel obstacle par défaut est polynomial compact, défini sur une clearance bord-à-bord qui inclut le rayon du rover.
- Une extension lisse pénalise la pénétration du cœur physique.
- Les murs sont quatre potentiels construits à partir des distances signées aux limites effectives de l'arène.
- Les agents utilisent historiquement un potentiel inverse-distance ; le correcteur causal utilise aussi une répulsion en inverse de la clearance, ou une variante Jones.
- Le vent existe dans le code mais n'est pas activé dans la validation Phase 6 ; il ne doit pas apparaître comme une fonctionnalité validée.

### 4.4 Chaîne expérimentale

```text
Basler → image Mono8 → ArUco → homographie pixel/mètre
→ pose (x, y, cap) → référence nominale/lookahead
→ commande différentielle L/R → USB série → ESP32 du rover
→ nouvelle observation → CSV/JSON → métriques nominal/réel
```

La caméra a été validée en Ethernet direct à 1500×1200 Mono8, 30 fps, 900/900 images pendant 30 s sans grab échoué, timeout, paquet incomplet ni trou de BlockID. Les campagnes physiques finales ont ensuite utilisé une topologie Wi-Fi plus lente à environ 3 observations/s pour faciliter le montage ; un watchdog indépendant borne le mouvement sans nouvelle image.

### 4.5 Incohérences et précautions trouvées

| Sujet | Constat | Conséquence éditoriale |
|---|---|---|
| Sens de « Newton » | Le nom peut évoquer Newton–Raphson, mais le code est un contrôleur par forces et intégration | Toujours écrire « correction locale newtonienne », avec une note explicite |
| Réel fixe vs réel mobile | L'évitement fixe complet est validé en Phase 6.9 ; l'évitement mobile complet ne l'est pas en 6.10 | Deux lignes séparées dans la matrice de validation |
| Lissage | Validé sur segments quasi rectilignes, pas avec l'obstacle | Ne pas juxtaposer le chiffre de lissage et une vidéo obstacle comme s'il s'agissait du même essai |
| `T:13` | L'avance fonctionne, la rotation `Z` n'a pas produit de virage utile ; `T:1` a validé les virages | Montrer `T:1` comme voie physique validée ; garder `T:13` dans une note de retour d'expérience |
| Arène | 2,5 m historique en Phase 5 bis, 2,0 m pour le réel | Afficher l'arène réelle 2×2 m et étiqueter les simulations historiques |
| Homographie | Plusieurs calibrations intermédiaires sont devenues obsolètes ; la référence finale est le quadrillage tapis | N'utiliser que les artefacts finaux, sans IP ni chemins locaux |
| README/tests | Le README dit encore que toute la suite passe ; audit actuel : 418 réussis, 6 échecs dashboard, 322/322 hors dashboard | Ne pas afficher « tous les tests passent » ; afficher le statut daté et la portée |
| Comparateur | Run `121907` : les deux pipelines valides ; run plus récent `132351` : SciPy rejeté sur convergence nominale, ligne valide | Présenter une comparaison exploratoire et le besoin d'un protocole figé |
| Campagne Lagrange | Speed-up final ≈10,22×, mais seulement 33 % de convergence nominale agrégée | Chiffre possible dans un détail, jamais comme KPI principal isolé |
| « Drone » | Le dépôt est nommé drone mais la validation physique porte sur un rover | Le site doit parler de systèmes autonomes/rover, et non prétendre à une validation drone |

---

## 5. Architecture recommandée du site

### Décision

**Une landing page verticale unique**, sans sous-pages au MVP. Une barre de navigation compacte pointe vers : Méthode, Résultats, Système réel, Validation, Limites. Les rapports et le code sont des liens sortants en fin de page.

### Ordre des sections

| # | Titre proposé | Objectif | Niveau visible |
|---:|---|---|---|
| 1 | De l'optimisation au mouvement | Résumer le projet et montrer immédiatement le rover en action | Rapide |
| 2 | Le défi : planifier sans connaître le futur | Poser contraintes statiques, mobiles et réalité matérielle | Rapide |
| 3 | Un pipeline en deux temps | Expliquer nominal « Lagrange » puis correction « Newton » | Rapide + détail |
| 4 | Ce que le calcul produit | Montrer candidats, nominal et trajectoire corrigée | Rapide + détail |
| 5 | La preuve par le réel | Mettre en avant l'évitement fixe répété et les métriques | Rapide |
| 6 | Du pixel à la commande | Expliquer caméra, homographie, ArUco, roues et watchdog | Rapide + détail |
| 7 | Comparer sans tricher | Présenter les familles de solveurs et une comparaison filtrée par sécurité | Technique |
| 8 | Ce qui est validé — et ce qui ne l'est pas encore | Matrice démontré / partiel / simulation / futur | Rapide |
| 9 | Limites et prochaine étape | Assumer mobile complet, lissage obstacle, non-linéarités moteur | Rapide |
| 10 | Projet, équipe et ressources | Crédits, laboratoire, code, rapports | Rapide |

À ne pas ajouter au MVP : historique exhaustif des phases, catalogue complet des scénarios, liste de tous les paramètres, galerie de dizaines de figures Matplotlib, page d'administration, backend, flux caméra live, simulation interactive lourde ou classements non stabilisés.

---

## 6. Parcours utilisateur rapide et technique

### Niveau 1 — lecture en 2 à 5 minutes

Le contenu principal est limité à :

- une phrase par enjeu ;
- un pipeline animé doucement ;
- trois équations sous forme de cartes visuelles ;
- trois chiffres de validation physique ;
- une vidéo courte ;
- une matrice de statut à quatre couleurs ;
- une conclusion sobre.

### Niveau 2 — approfondissement

Décision de composant : utiliser des éléments natifs **`<details>` / `<summary>`** stylés comme des cartes « Comprendre la méthode ». Ils sont accessibles au clavier, fonctionnent sans JavaScript et se replient naturellement sur mobile.

Trois blocs seulement :

1. « Voir la formulation et les hypothèses » ;
2. « Voir les solveurs et les métriques » ;
3. « Voir le protocole expérimental et les limites ».

Les infobulles seront réservées aux définitions de 1 à 5 mots (`clearance`, `RMSE`, `nominal`). Aucun contenu indispensable ne sera caché uniquement au survol.

---

## 7. Contenu détaillé de chaque section

| Section | Message principal | Contenu visible | Média/interaction | Détail dépliable | À éviter |
|---|---|---|---|---|---|
| Hero | « De l'optimisation mathématique au mouvement mesuré » | Titre, sous-titre, 3 KPI, bouton « Voir la méthode » | Boucle vidéo 8–12 s ou trajectoire SVG si média absent | Aucun | Long paragraphe, jargon de phase |
| Défi | Une trajectoire doit être sûre, faisable et réactive | Arène, départ, cible, obstacle fixe, mobile | Mini-scène SVG en couches | Hypothèses 2D et contraintes souples | Vent/PINN présentés comme acquis |
| Pipeline | Plan global statique puis réaction locale causale | 6 étapes maximum | Ligne de progression au scroll | Causalité, données futures exclues | Dire que Newton « optimise à nouveau » |
| Calcul | Plusieurs candidats, un nominal, une trajectoire corrigée | Superposition progressive | Sélecteur 3 états | Action discrète, EL, initialisation | Figure dashboard brute trop dense |
| Preuve réelle | Deux passages réussis autour d'un obstacle | Courbes nominal/réel + 3 KPI + vidéo | Curseur aller/retour | Critères et données des essais 14–15 | Mélanger résultats lissés sans obstacle |
| Système réel | La position observée ferme la boucle | 5 briques caméra→rover | Schéma horizontal responsive | Homographie, 30 fps Ethernet, 3 Hz Wi-Fi, watchdog | IP, SSH, numéros de série |
| Solveurs | Il faut comparer des pipelines valides, pas seulement des temps | 4 cartes familles + graphe SciPy/ligne | Toggle sécurité/qualité/temps | Runs, convergence, coefficients | « ligne gagne » sans contexte |
| Validation | La portée est connue et explicite | Matrice à quatre statuts | Filtres Simulation / Réel | Table des preuves et sources | Badge global « 100 % validé » |
| Limites | Les limites guident la suite | 3 cartes : mobile, virages/lissage, reproductibilité | Aucune | Tests dashboard et protocole futur | Roadmap spéculative longue |
| Ressources | Projet traçable et reproductible | Équipe, PIMM, Arts et Métiers, GitHub | Liens clairs | Rapports sélectionnés | Exposer tout `context/` publiquement |

---

## 8. Équations à présenter

### Sélection principale — trois blocs visibles

| Équation | Phase | Pourquoi la montrer | Explication simple | Placement | Schéma associé |
|---|---|---|---|---|---|
| `J[x] = ∫₀ᵀ [½ α‖ẋ‖² + V(x,t)]dt`, avec `x(0)=x₀`, `x(T)=x_T`, et `d/dt(∂L/∂ẋ)−∂L/∂x=0` | Nominal variationnel | Résume objectif, énergie, environnement et conditions aux limites | Chercher la courbe qui minimise un coût cumulé tout en gardant départ et arrivée fixes | Visible | Courbe entre deux points, couches du potentiel |
| `V_obs(c)=γ(1−(c/R)²)^p` si `0<c<R`, `0` si `c≥R`, où `c=‖x−o‖−r_obs−r_robot` | Nominal/obstacles | Correspond au modèle compact par défaut et montre que le rayon du rover compte | La pénalité n'agit que près de l'obstacle et augmente quand la marge libre diminue | Visible | Anneaux obstacle, rover et rayon d'influence |
| `m ẍ = F_attr + F_mobile + F_fixe + F_murs − ξ ẋ`, puis `vₖ₊₁=clip(vₖ+Δt aₖ)`, `xₖ₊₁=xₖ+Δt vₖ₊₁` | Correction locale newtonienne | Explique le rôle exact de « Newton » dans le dépôt | Une cible locale attire ; les dangers repoussent ; l'amortissement évite l'emballement ; vitesse et accélération sont bornées | Visible | Vecteurs de forces autour du rover |

Variables à définir :

- `x(t)` : position 2D ; `ẋ`, `ẍ` : vitesse et accélération ;
- `α` : poids cinétique ; `V` : somme des potentiels actifs ;
- `c` : clearance bord-à-bord ; `R` : distance d'influence ; `p=3` par défaut ;
- `m` : masse numérique du contrôleur ; `ξ` : amortissement ; `clip` : saturation de norme.

### Exactitude par rapport à l'implémentation

Le solveur SciPy minimise en réalité une approximation au point milieu :

```text
J_d = Σₖ Δtₖ L((xₖ+xₖ₊₁)/2, (xₖ₊₁−xₖ)/Δtₖ, (tₖ+tₖ₊₁)/2)
      + λ_s Σₖ ‖xₖ₊₁−2xₖ+xₖ₋₁‖² + J_v + J_a
```

Cette formule ira dans le premier bloc dépliable. `J_v` et `J_a` sont des pénalités polynomiales de dépassement ; elles ne garantissent pas formellement le respect des limites.

Le solveur Euler–Lagrange direct annule le résidu discret :

```text
rₖ = α (xₖ₊₁−2xₖ+xₖ₋₁)/Δt² − ∇V(xₖ,tₖ) = 0.
```

Cette équation est pertinente pour Amine mais secondaire dans le parcours visible, car le nominal physique validé vient du solveur SciPy variationnel.

Équations à ne pas montrer dans le parcours principal : dérivées complètes de chaque mur, cœur de pénétration, gradient analytique détaillé, forme Jones `1/d¹³`, équations du vent et métrique de coût réalisée.

---

## 9. Comparaison des solveurs

### Familles pertinentes

| Famille | Ce qu'elle fait | Place sur le site | Statut |
|---|---|---|---|
| SciPy variationnel | Minimise l'action discrète, L-BFGS-B, gradient analytique, initialisation multi-candidate | Carte principale | Nominal de référence et voie utilisée pour le réel |
| Euler–Lagrange direct | Résout le résidu EL discret avec `root` ou `least_squares` | Carte technique | Implémenté et testé, V1 plus restreinte |
| Ligne droite | Retourne la ligne départ–arrivée | Baseline visible | Très rapide, utile pour mesurer la valeur du nominal |
| Full Newton | Va directement au but par forces, sans nominal | Détail/ablation | Famille non équivalente, simulation seulement |

Les variantes `newton_controller_initial`, `verlet` et `jones` ne sont pas des solveurs nominaux. Elles seront regroupées sous « intégration/correcteur local » dans le détail : Euler semi-implicite, Velocity-Verlet causal et répulsion Jones.

### Comparaisons réellement défendables au MVP

1. **SciPy + correcteur initial vs ligne + correcteur initial** sur le run `20260709_121907`, parce que les deux pipelines y sont classés valides sur deux scénarios.
2. **Évolution du temps du nominal Lagrange** dans la campagne multi-révision, uniquement avec l'avertissement que le coût a changé et que la convergence finale agrégée n'est que de 33 %.
3. **Nominal vs réel** sur les essais physiques, qui est plus important pour Paco qu'un classement de solveurs.

Le run plus récent `132351` ne doit pas remplacer silencieusement `121907` : il rejette SciPy pour échec nominal sur les deux scénarios, malgré l'absence de collision et une distance finale faible. Il sert à illustrer la sensibilité au protocole et la nécessité du filtre de convergence.

### Métriques prioritaires

Ordre de lecture : sécurité → atteinte du but → fidélité → coût/temps.

- collisions mobile/statique et sortie d'arène ;
- clearance minimale ;
- distance finale au but ;
- écart RMS au nominal ;
- longueur réalisée ;
- vitesse/accélération maximales ;
- statut de convergence nominale ;
- temps nominal, temps correcteur, temps total.

### Trois visualisations MVP

1. **Trajectoires superposées** : initiales → nominale → corrigée/réelle, avec obstacle et enveloppes physiques.
2. **Barres groupées filtrées** SciPy/ligne : temps total, distance finale, clearance ; un badge `VALID` conditionne l'affichage du temps.
3. **Carte avant/après réel** : nominal et trace ArUco des essais 14–15, complétée par RMSE et marge minimale.

Les courbes de convergence détaillées, matrices de tous les scénarios et comparaisons de dizaines de commits iront dans les rapports, pas dans la landing page.

---

## 10. Preuves de validation

### Classement par force

| Force | Preuve | Conclusion autorisée | Réserve |
|---|---|---|---|
| **Forte** | Essais réels 14 et 15 autour d'un obstacle fixe, dans les deux sens, statut succès, safe stop, CSV/JSON et graphes | Le rover suit une courbe nominale autour d'un obstacle fixe dans le domaine testé | Mouvement impulsionnel à 3 Hz ; un montage et un obstacle |
| **Forte** | Caméra Ethernet direct : 900/900 frames, 30 fps, 0 erreur sur 30 s, Mac et Raspberry | L'acquisition brute cible est stable dans la topologie testée | Les essais Wi-Fi utilisent une autre cadence |
| **Forte ciblée** | Essais lissés 29–30, deux succès réels, 0 pivot, 0 arrêt intermédiaire | Le suivi continu est précis sur segments quasi rectilignes | Pas d'obstacle, pas de grand virage |
| **Intéressante** | Phase 6.10 sans mobile : cible atteinte ; mobile proche : arrêt préventif ; mobile plus loin : 16 corrections actives sans collision | La chaîne causale, la détection et les sécurités atteignent le matériel | Contournement mobile complet non atteint |
| **Intéressante** | Simulations Phase 5 bis multi-agent, correcteur causal, métriques et nombreux scénarios | Le comportement dynamique est étudié en simulation | Les forces souples n'offrent pas une garantie formelle universelle |
| **Intéressante** | 322 tests hors dashboard passent dans l'audit courant | Cœur, solveurs et modules expérimentaux disposent d'une base de non-régression | Ne remplace pas une preuve physique |
| **Secondaire** | Dashboards et images de simulation | Outils d'analyse et d'opération disponibles | Une visualisation seule ne valide rien |
| **Non-validation** | Nom de phase, dry-run, fichier `*_video`, objectif de roadmap, test court qui finit en timeout | Ne rien conclure sans métrique et statut | Doit être étiqueté « exploratoire » |

### Section « Validation » proposée

| Capacité | Simulation | Réel | Statut public |
|---|---|---|---|
| Nominal avec obstacles fixes | Oui | Oui | **Démontré** |
| Suivi de trajectoire courbe | Oui | Oui, essais 14–15 | **Démontré dans le domaine testé** |
| Tracking métrique ArUco | Oui/dry-run | Oui | **Démontré** |
| Acquisition caméra 30 fps | N/A | Oui, Ethernet direct | **Démontré** |
| Correction causale mobile | Oui | Force, commande et stop observés | **Partiel** |
| Contournement mobile complet | Oui sur scénarios | Non abouti dans les preuves actuelles | **À valider** |
| Multi-rover actif | Oui | Non démontré | **Simulation uniquement** |
| Suivi lissé avec obstacle | Prévisualisable | Non testé dans la campagne finale | **À revalider** |
| Drone réel / vol | Non | Non | **Hors périmètre actuel** |

Conclusion de section :

> **PACO a franchi le passage du calcul au réel pour le suivi et l'évitement fixe. La prochaine preuve décisive est un contournement mobile complet, reproductible et métriquement documenté.**

---

## 11. Direction artistique

### Direction retenue

Style clair, éditorial et scientifique, inspiré d'Apple/OpenAI : grands espaces, texte court, cartes mates, animations fonctionnelles, données au premier plan. Thème principal **clair** pour la lisibilité des courbes et des photos de laboratoire ; bande Hero bleu nuit possible, sans basculer tout le site en thème sombre.

### Palette

| Usage | Couleur | Valeur indicative |
|---|---|---|
| Fond principal | Ivoire froid | `#F7F7F4` |
| Surface/cartes | Blanc | `#FFFFFF` |
| Texte | Encre | `#101828` |
| Nominal/Lagrange | Bleu cobalt | `#2F5BEA` |
| Correction/Newton | Cyan profond | `#0E8FA3` |
| Réel/validé | Vert | `#16866B` |
| Obstacle/alerte | Corail | `#E45B5B` |
| Neutre/initial | Gris ardoise | `#98A2B3` |

### Typographie et grille

- pile système locale : `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` ;
- titres compacts, 600–700, largeur maximale 12–16 mots ;
- corps 17–19 px sur desktop, 16–18 px sur mobile ;
- largeur de lecture 68–74 caractères ;
- grille centrale max 1200 px, cartes à rayon 20–24 px, bordure fine et ombre très discrète.

### Traitement des éléments

- Courbes : même code couleur partout, épaisseur ≥2 px, motifs en plus des couleurs pour l'accessibilité.
- Équations : fond légèrement bleuté, formule courte, explication en une phrase, variables sous forme de chips.
- Schémas : SVG natifs, lignes simples, pas d'illustration 3D décorative.
- Vidéos : coins arrondis, `muted`, `playsinline`, contrôle visible hors Hero, poster optimisé.
- Photos : ratio cohérent 4:3 ou 16:9, recadrage simple, pas de filtre artistique.
- Micro-interactions : apparition douce 250–400 ms, tracé progressif des courbes, surbrillance d'une étape du pipeline.
- Respect de `prefers-reduced-motion` obligatoire.

Animations à éviter : parallaxe forte, scroll bloqué, particules, rotation 3D, compteurs qui repartent à chaque scroll, vidéo avec lecture sonore automatique, graphes qui changent d'échelle pendant l'animation.

---

## 12. Vidéos à filmer

Le dépôt contient déjà des MP4 de tracking, mais les essais physiques les plus solides 14–15 n'ont pas de MP4 clairement associé dans l'archive analysée. Les cinq prises ci-dessous maximisent la preuve avec peu ou pas de montage. Les découpes web pourront être automatisées plus tard par un script `ffmpeg` ; il suffit de fournir les originaux continus.

### V01 — boucle Hero

| Champ | Consigne |
|---|---|
| Fichier | `hero_rover_curve_v01.mp4` |
| Objectif/section | Montrer immédiatement un système réel en mouvement ; Hero |
| Durée | 10–15 s, maximum 20 s |
| Format | Vidéo continue, boucle silencieuse |
| Orientation/résolution/fps | Paysage 16:9, 1920×1080, 30 fps |
| Caméra | Téléphone fixe, vue oblique basse à moyenne, à l'extérieur de l'arène |
| Début/action/fin | Rover déjà immobile et visible → portion courbe fluide près de l'obstacle → sortie du cadre utile ou arrêt propre |
| Scénario | Profil Phase 6.9 `T:1` validé avec obstacle fixe ; ne pas utiliser la Phase 6.10 mobile |
| Cadrage | Rover sur un tiers, obstacle et direction de déplacement visibles |
| Arrière-plan | Retirer câbles libres, sacs, écrans lumineux et personnes |
| Prises | 3 prises courtes, garder la plus stable |
| Erreurs | Autofocus qui pompe, zoom numérique, caméra tenue à la main, obstacle hors champ |
| Son/appareil | Son supprimé ; téléphone sur trépied/support |
| Priorité | **P0** |

### V02 — preuve complète d'évitement fixe

| Champ | Consigne |
|---|---|
| Fichier | `validation_fixed_obstacle_full_v01.mp4` |
| Objectif/section | Prouver le parcours complet autour de l'obstacle ; Validation |
| Durée | 55–70 s, maximum 90 s |
| Format | Une prise continue avec courte légende sur le site |
| Orientation/résolution/fps | Paysage 16:9, 1920×1080, 30 fps |
| Caméra | Téléphone fixe en hauteur suffisante pour voir toute l'arène |
| Début/action/fin | Départ, but et obstacle visibles → trajet complet sans déplacement caméra → arrêt dans la zone cible |
| Scénario | Rejouer le profil documenté des essais `rotation_wifi_t1_obstacle_prealigned_forward` ou `return`, commande native `T:1`, obstacle ArUco 11 |
| Cadrage | Quatre bords utiles, aucun passage du rover masqué |
| Arrière-plan | Zone de sécurité libre, aucun opérateur dans l'arène |
| Prises | 2 maximum ; vérifier la première avant de répéter |
| Erreurs | Couper avant le stop, déplacer l'obstacle, changer la caméra/homographie juste avant, filmer un run exploratoire en échec |
| Son/appareil | Son non nécessaire ; téléphone fixe |
| Priorité | **P0** |

### V03 — tracking vu par la caméra

| Champ | Consigne |
|---|---|
| Fichier | `tracking_aruco_metric_v01.mp4` |
| Objectif/section | Montrer que pixels, IDs et coordonnées deviennent une mesure ; Système réel |
| Durée | 15–25 s, maximum 30 s |
| Format | Capture d'écran vidéo, silencieuse, légendée |
| Orientation/résolution/fps | 16:9 ou fenêtre native, ≥1440×900, 30 fps d'enregistrement |
| Caméra | Enregistrement direct de l'ordinateur, pas un téléphone filmant l'écran |
| Début/action/fin | Vue annotée stable IDs 0–3/10/11 → rover en mouvement et coordonnées mises à jour → stop avec ID10 toujours détecté |
| Scénario | Même essai fixe que V02 si possible ; aperçu opérateur ou flux annoté Phase 6.9 |
| Cadrage | Masquer terminal sensible, IP, chemin utilisateur et commandes SSH |
| Prises | 2 |
| Erreurs | Notifications visibles, curseur agité, logs illisibles, marker perdu |
| Son/appareil | Son coupé ; capture système |
| Priorité | **P0** |

### V04 — du candidat au nominal puis à la correction

| Champ | Consigne |
|---|---|
| Fichier | `simulation_lagrange_newton_v01.mp4` |
| Objectif/section | Expliquer visuellement les deux phases ; Méthode |
| Durée | 12–20 s, maximum 30 s |
| Format | Capture d'écran continue ou animation exportée |
| Orientation/résolution/fps | 16:9, 1920×1080, 30 fps |
| Caméra | Capture directe de l'écran |
| Début/action/fin | Candidats initiaux → nominal sélectionné → trajectoire corrigée et mobile visible |
| Scénario | `python -m trajopt.simulation.run_single --demo phase6_solver_scipy_test_V1_01_video` ou scénario Phase 5 bis équivalent validé en simulation |
| Cadrage | Figure seule ; retirer panneaux secondaires si illisibles |
| Prises | 1 export + 1 capture de secours |
| Erreurs | Terminal plein écran, légendes minuscules, animation trop rapide |
| Son/appareil | Sans son ; ordinateur |
| Priorité | **P0** |

### V05 — calcul, commande et mouvement dans un même plan

| Champ | Consigne |
|---|---|
| Fichier | `screen_to_rover_handoff_v01.mp4` |
| Objectif/section | Matérialiser le passage logiciel → réel ; transition avant Validation |
| Durée | 20–35 s, maximum 45 s |
| Format | Plan continu, légende courte |
| Orientation/résolution/fps | Paysage 16:9, 4K si disponible sinon 1080p, 30 fps |
| Caméra | Téléphone fixe derrière/à côté du poste, écran au premier plan et arène au second |
| Début/action/fin | Nominal visible à l'écran et rover arrêté → clic/lancement → rover commence à suivre → stop visible |
| Scénario | Phase 6.9 nominal fixe, enveloppe prudente et opérateur prêt |
| Cadrage | Écran lisible sans données sensibles ; rover suffisamment grand dans l'arrière-plan |
| Prises | 2 |
| Erreurs | Reflets écran, opérateur cachant le rover, interface avec IP/SSH, caméra déplacée pendant le run |
| Son/appareil | Son coupé ; téléphone fixe |
| Priorité | **P1**, indispensable si la prise est réalisable en moins de 10 min |

Vidéos optionnelles uniquement après preuve : multi-agent simulé ; arrêt watchdog réel ; contournement mobile complet. Ne pas filmer deux rovers ou un mobile comme « validation » tant que le scénario n'atteint pas la cible avec métriques et répétition.

---

## 13. Photos à prendre

| Fichier | Objectif/section | Cadrage exact | Placement/orientation | Lumière | Prises | Priorité |
|---|---|---|---|---|---:|---|
| `arena_overview_v01.jpg` | Situer l'expérience ; Système réel | Arène entière, rover, obstacle, marqueurs de coins | Depuis un coin haut, paysage | Éclairage plafond uniforme, sans fenêtre brûlée | 1 | P0 |
| `rover_aruco_v01.jpg` | Montrer le sujet physique et ID10 | Rover entier à 45°, marqueur lisible, roues visibles | À hauteur du rover, paysage | Lumière latérale douce, pas de reflet sur ArUco | 1 | P0 |
| `camera_arena_setup_v01.jpg` | Expliquer la perception | Caméra/support et arène dans le même cadre | Vue latérale large, paysage | Éviter contre-jour | 1 | P0 |
| `fixed_obstacle_geometry_v01.jpg` | Relier obstacle physique et enveloppe numérique | Rover, obstacle ID11 et espace entre eux | Vue oblique propre, paysage | Uniforme | 1 | P1 |
| `system_chain_v01.jpg` | Illustrer ordinateur–Raspberry–rover sans démontage | Poste, Raspberry/liaison visible, arène en arrière-plan | Vue 3/4, paysage | Écran à luminosité moyenne | 1 | P1 |

Photos explicitement éliminées : portrait d'équipe sans rôle éditorial, macro de carte électronique, photo artistique en mouvement, six angles du rover, câblage démonté, photo du routeur seul, capture d'écran prise au téléphone.

---

## 14. Checklist de tournage

Durée cible : 45 à 70 minutes selon la durée du scénario physique. Les photos seules restent faisables en moins de 30 minutes.

```text
[ ] 1. Nettoyer uniquement le champ : câbles libres, sacs, papiers, notifications écran.
[ ] 2. Fixer la caméra de tracking et ne plus toucher à sa position/focus/homographie.
[ ] 3. Placer rover, obstacle ID11, départ et cible du profil validé.
[ ] 4. Faire le preflight : IDs 0,1,2,3,10,11 visibles ; stop ; arène libre ; batterie.
[ ] 5. Prendre arena_overview_v01.jpg puis camera_arena_setup_v01.jpg.
[ ] 6. Installer le téléphone en vue large fixe ; vérifier netteté, 16:9 et action entière visible.
[ ] 7. Filmer validation_fixed_obstacle_full_v01.mp4. Vérifier immédiatement début, contournement, fin et absence d'occlusion.
[ ] 8. Sans changer le montage, filmer 2–3 prises de hero_rover_curve_v01.mp4.
[ ] 9. Placer le téléphone pour écran + arène et filmer screen_to_rover_handoff_v01.mp4.
[ ] 10. Filmer rover_aruco_v01.jpg, fixed_obstacle_geometry_v01.jpg et system_chain_v01.jpg.
[ ] 11. Enregistrer directement l'écran : tracking_aruco_metric_v01.mp4.
[ ] 12. Arrêter le rover et quitter l'arène ; enregistrer simulation_lagrange_newton_v01.mp4.
[ ] 13. Contrôle final : fichiers nommés, nets, cadrés, action visible, aucune donnée sensible, son inutile.
```

Ne refaire une prise que si l'un des quatre critères minimaux échoue : netteté, cadrage, action visible, absence d'élément gênant.

---

## 15. Arborescence et convention de nommage

### Dossier autonome à créer lors de l'implémentation

```text
paco-showcase/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   └── index.astro
│   ├── styles/
│   └── content/
├── public/
│   ├── images/
│   ├── videos/
│   ├── plots/
│   ├── diagrams/
│   └── documents/
├── data/
│   ├── validation.json
│   ├── solver-comparison.json
│   └── media-manifest.json
├── scripts/
│   ├── export-scientific-assets.mjs
│   └── optimize-media.sh
├── tests/
├── astro.config.mjs
├── package.json
├── tsconfig.json
├── README.md
└── .gitignore
```

Le site ne doit importer aucun module Python du dépôt à l'exécution. Les données scientifiques seront copiées sous forme de JSON/CSV réduit avec un manifeste indiquant fichier source, date, script d'export et hash éventuel.

### Convention

```text
<section>_<sujet>_<variant>_vNN.<ext>
```

Règles : minuscules, ASCII, tiret bas, aucun espace, version `v01`, suffixes explicites `raw`, `web`, `poster`, `mobile`. Exemple : `validation_fixed_obstacle_forward_v01_web.mp4`.

---

## 16. Contenus existants réutilisables

Le dépôt contient des milliers d'artefacts. Le tableau ci-dessous retient les exemplaires ou familles utiles au site, pas chaque répétition.

| Fichier existant | Ce qu'il montre | Qualité | Usage tel quel ? | Section | Copier ? | Précautions |
|---|---|---|---|---|---|---|
| `context/Codex/phase6/annexes/analyse_rotation_wifi/rotation_wifi_t1_obstacle_prealigned_forward_20260715_15_graphiques.png` | Nominal/réel, erreurs et commandes d'un succès obstacle | Scientifique, dense, 2080×1440 | Oui dans le détail ; régénérer une version simplifiée pour le visible | Preuve réelle | Oui, puis dérivé SVG/PNG | Titre interne long ; ne pas confondre `t13_z` métrique reconstruite et commande T:13 réelle |
| `.../rotation_wifi_t1_obstacle_prealigned_return_20260715_14_graphiques.png` | Répétition inverse | Bonne | Oui, détail | Validation | Oui | Même réserve |
| `.../analyse_rotation_wifi/comparaison_essais_T1.png` | Comparaison de la campagne T:1 | Bonne mais technique | Détail uniquement | Validation | Optionnel | Expliquer réussites/échecs |
| `.../analyse_lissage_trajectoire/comparaison_hache_lisse.png` | Haché vs profil lissé | Bonne, 2520×1260 | Oui après recadrage ; idéalement régénérer avec palette du site | Limites/progrès | Oui | Les colonnes ne décrivent pas le même scénario géométrique |
| `.../essai_29_validation_finale.png`, `essai_30_validation_finale.png` | Deux essais lissés finaux | Bonne | Détail | Résultats | Oui | Sans obstacle |
| `.../preflight_position_corrigee/..._annotated.png` | Arène réelle avec IDs et coordonnées | Très bonne preuve, 1500×1200 | Oui après anonymisation/crop | Système réel | Oui | Retirer toute métadonnée et vérifier absence de donnée sensible |
| `..._rectified.png` | Vue top-down après homographie | Bonne | Oui, côte à côte avec brute | Homographie | Oui | Calibration datée ; expliquer que c'est une vue plane |
| `outputs/trajectory_comparator_benchmark/20260709_132351.../site/images/*.png` | Figure complète SciPy/ligne | Dense, lisible sur grand écran | Détail seulement | Solveurs | Oui, mais pas comme graphique principal | Le panneau SciPy indique échec nominal |
| `outputs/trajectory_comparator_benchmark/20260709_121907.../processed/*.json` | Run où les deux pipelines sont valides | Données structurées | Oui via export réduit | Solveurs | Oui, données seulement | Deux scénarios, coefficients communs, exploration |
| `experiments/lagrange_campaign_01/RAPPORT_ANALYSE...md` | Campagne de 10 révisions, 300 runs | Très documentée | Lien de rapport + un graphique régénéré | Performance | Copier PDF/MD sélectionné | Coût non figé et convergence dégradée |
| `outputs/camera/phase6_9/20260715_192856...mp4` | Tracking top-down d'un run dashboard en statut `ok` | 1500×1200, 3 fps, 37,3 s | Utilisable comme preuve secondaire | Vidéo réel | Oui si visuellement propre | Ce n'est pas l'essai final 14/15 ; le dire |
| Autres `outputs/camera/phase6_9/*.mp4` | Nombreux essais réels, réussites et échecs | Variable | Ne pas sélectionner par le nom seul | Archives | Non au MVP | Vérifier dernière ligne CSV et rapport associé |
| `outputs/camera/phase6_10/..._real.mp4` | Essai réel 6.10 | Très court et statut erreur | Non comme validation | Limites | Non | Peut illustrer un essai exploratoire seulement |
| `outputs/camera/20260709_183541_arene_avec_rover/*.png` | Images caméra de l'arène et du rover | Bonne, 1500×1200 | Oui si une photo dédiée manque | Système réel | Optionnel | Non annoté, monochrome |
| `rover/data/phase6_5_camera/reference_frame_0006..0009.png` | Images brutes Basler 1920×1200 | Haute résolution | Secondaire | Caméra | Non prioritaire | Redondant, pas une preuve métrique |
| `outputs/simulation_images/*.png` | Grand catalogue de scénarios | Très variable, nombreux doublons | Régénérer un scénario canonique | Méthode | Non en masse | Noms historiques et versions multiples |
| `context/Phase6/*.md`, `context/Codex/phase6/annexes/*.md` | Rapports complets | Riches | Sélectionner 3–5 liens maximum | Ressources | Copier une sélection | Contiennent IP, SSH, chemins, détails de matériel : ne pas publier bruts sans revue |

Éléments absents ou insuffisants : vidéo extérieure propre des essais physiques finaux 14–15, photo claire de la caméra en situation, identité/portrait de l'équipe si souhaité, logos autorisés, texte officiel sur l'acronyme PACO.

---

## 17. Éléments manquants

| Manque | Bloquant pour coder ? | Bloquant pour publier ? | Défaut proposé |
|---|---:|---:|---|
| Signification officielle de PACO | Non | Oui pour le titre institutionnel | Utiliser « Projet PACO » sans développer l'acronyme |
| Noms/rôles des trois étudiants | Non | Oui pour les crédits | Carte équipe masquée jusqu'à réception |
| Logos et règles institutionnelles | Non | Selon publication | Nom texte PIMM / Arts et Métiers, sans logo |
| Portée public/interne | Non | Oui | Construire comme public et exclure IP, SSH, noms de machines et données sensibles |
| Destination de déploiement | Non | Non | GitHub Pages, site statique |
| Vidéo finale 14/15 | Non | Non, mais forte valeur | Utiliser d'abord la courbe + MP4 dashboard `ok`, puis remplacer |
| Lien/code public confirmé | Non | Oui pour CTA | Remote actuel GitHub, bouton désactivable |
| Langue secondaire | Non | Non | Français uniquement au MVP |

---

## 18. Textes essentiels proposés

| Élément | Texte | Longueur |
|---|---|---|
| Titre principal | **De l'optimisation au mouvement.** | Très court |
| Sous-titre | PACO calcule des trajectoires sous contraintes, les adapte aux observations et mesure leur exécution sur un rover réel. | Intermédiaire |
| Accroche | Planifier globalement. Réagir localement. Valider physiquement. | Très court |
| Résumé 3 lignes | Une trajectoire nominale exploite la géométrie statique de l'arène. Un correcteur causal peut réagir aux mobiles sans connaître leur futur. La caméra transforme ensuite chaque déplacement réel en données métriques comparables au plan. | Intermédiaire |
| Lagrange simple | La première phase dessine une référence globale : elle cherche une courbe peu coûteuse, régulière et éloignée des obstacles fixes, entre un départ et une arrivée imposés. | Intermédiaire |
| Newton simple | La seconde phase ne redessine pas tout le plan. Elle applique, pas à pas, des forces d'attraction, de répulsion et d'amortissement à partir de ce qui est observé maintenant. | Intermédiaire |
| Transition | Le nominal donne la direction ; la correction locale absorbe l'imprévu. | Très court |
| Solveurs | Plusieurs générateurs ont été conservés pour séparer qualité du plan, coût numérique et capacité du correcteur à compenser une référence simple. | Intermédiaire |
| Expérimentation | Du pixel à la roue, chaque étape est mesurée : homographie, pose ArUco, référence, commande, clearance et erreur au nominal. | Intermédiaire |
| Validation | L'évitement d'un obstacle fixe et le suivi courbe sont démontrés dans le réel ; l'évitement mobile complet reste la prochaine validation décisive. | Intermédiaire |
| Conclusion | PACO n'est plus seulement un modèle de simulation : c'est une chaîne instrumentée dont le domaine validé et les limites sont explicitement mesurés. | Intermédiaire |

Titres de section : « Le défi », « Un plan, puis une réaction », « Ce que voit le solveur », « La preuve par le réel », « Du pixel à la roue », « Comparer sans tricher », « Le périmètre validé », « La prochaine frontière ».

---

## 19. Priorités MVP

| Fonction/contenu | Priorité | Valeur Paco | Valeur Amine | Effort | Nouveau média | Nouvelles données | Bloquant | Ajoutable plus tard |
|---|---|---:|---:|---:|---:|---:|---:|---:|
| Landing page responsive | P0 | Haute | Haute | M | Non | Non | Oui | Non |
| Hero + statut honnête | P0 | Haute | Moyenne | S | Souhaité | Non | Oui | Non |
| Pipeline SVG progressif | P0 | Haute | Haute | M | Non | Non | Oui | Non |
| 3 équations pédagogiques | P0 | Moyenne | Haute | S | Non | Non | Oui | Oui |
| Courbe nominal/réel essais 14–15 | P0 | Haute | Haute | M | Non | Non | Oui | Oui |
| Matrice de validation | P0 | Haute | Haute | S | Non | Non | Oui | Oui |
| Schéma caméra→commande | P0 | Haute | Moyenne | S | Photo souhaitée | Non | Non | Oui |
| Détails `<details>` | P0 | Faible | Haute | S | Non | Non | Non | Oui |
| Vidéos V01–V04 | P1 | Haute | Moyenne | M | Oui | Non | Non | Oui |
| Graphe comparatif solveurs | P1 | Moyenne | Haute | M | Non | Export réduit | Non | Oui |
| Liens rapports/code | P1 | Moyenne | Haute | S | Non | Non | Non | Oui |
| Animation multi-agent | P2 | Moyenne | Moyenne | M | Export | Non | Non | Oui |
| Bilingue FR/EN | P2 | Moyenne | Faible | L | Non | Traduction | Non | Oui |
| Simulateur interactif | P3 | Faible | Moyenne | XL | Non | Oui | Non | Oui |

Le MVP reste une page statique sans backend, avec SVG et données JSON locales. Il est présentable même avant les nouvelles vidéos grâce aux artefacts déjà disponibles.

---

## 20. Version enrichie éventuelle

- bascule FR/EN à contenu structuré ;
- comparaison interactive des essais 14 et 15 ;
- lecteur synchronisé vidéo + position sur la courbe ;
- mini-explorateur de trois scénarios simulés ;
- frise chronologique du passage simulation → réel ;
- page « Méthode » séparée uniquement si la landing devient trop dense ;
- génération automatique des plots web depuis les CSV validés ;
- page d'annexes avec protocole de reproductibilité.

Ces ajouts ne nécessitent pas de restructurer le MVP si les contenus sont dès le départ stockés dans `src/content/` et `data/`.

---

## 21. Hypothèses prises

1. Le site sera en français au MVP.
2. La cible principale est une consultation desktop, avec mobile pleinement fonctionnel.
3. Le site sera potentiellement public ; les détails réseau, SSH, chemins personnels, noms de machines et numéros de série seront exclus.
4. « PACO » reste un nom propre tant que son développement officiel n'est pas fourni.
5. Le rover est la plateforme physique validée ; le mot drone ne sera utilisé que pour nommer le dépôt, pas pour revendiquer une expérimentation aérienne.
6. Les chiffres principaux viennent des artefacts du 15 juillet 2026, plus récents et plus solides que les premières validations Phase 6.8–6.10.
7. Les rapports historiques sont des sources de contexte ; le code courant, les JSON/CSV et les tests courants arbitrent en cas de conflit.
8. L'équipe accepte une communication honnête où « partiellement validé » est visible.
9. Aucun média externe ou image générée par IA n'est nécessaire au MVP.

---

## 22. Questions réellement bloquantes et réponse groupée attendue

Merci de répondre en recopiant uniquement les cases utiles. Toutes les questions sont regroupées ici.

### A. Bloquant avant publication, non bloquant pour commencer le code

| # | Réponse attendue | Choix rapide | Défaut si absence de réponse |
|---:|---|---|---|
| A1 | Que signifie officiellement « PACO » ? | Texte exact, ou `[ ] nom propre sans développement` | Nom propre |
| A2 | Le site sera-t-il public ? | `[ ] public` `[ ] interne` | Public, avec anonymisation stricte |
| A3 | Crédits | Noms, rôles, promotion ; nom exact de Paco et d'Amine à afficher | Section générique non publiée |
| A4 | Mentions/logos obligatoires | Fichiers SVG/PNG + ordre souhaité | PIMM et Arts et Métiers en texte |
| A5 | Code et rapports | `[ ] lien GitHub public autorisé` `[ ] code non public` ; rapports autorisés à publier | CTA code masqué, rapports non copiés |
| A6 | Déploiement | `[ ] GitHub Pages` `[ ] autre : …` | GitHub Pages |

### B. Média — une seule réponse suffit

| # | Question | Réponse courte |
|---:|---|---|
| B1 | Le scénario obstacle fixe validé `T:1` est-il reproductible aujourd'hui sans déplacer la caméra ? | `[ ] oui` `[ ] non` |
| B2 | Peux-tu fournir V01–V05 ? | `[ ] tous` `[ ] V01` `[ ] V02` `[ ] V03` `[ ] V04` `[ ] V05` `[ ] aucun pour le MVP` |
| B3 | Peux-tu prendre les cinq photos de la section 13 ? | `[ ] oui` `[ ] seulement : …` `[ ] utiliser l'existant` |
| B4 | Existe-t-il hors dépôt une vidéo des essais finaux 14 ou 15 ? | `[ ] oui, je la joins` `[ ] non` |

### C. Utile mais non bloquant

| # | Question | Défaut retenu |
|---:|---|---|
| C1 | Une version anglaise est-elle nécessaire dès le MVP ? | Non |
| C2 | Souhaites-tu montrer les échecs T:13 comme retour d'expérience ? | Oui, une note courte |
| C3 | Y a-t-il une date de soutenance ou de mise en ligne ? | Pas de date affichée |

Aucune autre validation section par section ne sera demandée. Après ces réponses, la construction peut commencer directement avec des placeholders pour les médias non encore livrés.

---

## 23. Plan de construction du site

### Stack retenue

- **Astro + TypeScript**, génération statique ;
- CSS natif avec variables de design, sans framework utilitaire ;
- composants Astro pour les sections ;
- SVG natifs pour le pipeline et les graphiques ;
- KaTeX uniquement si le rendu MathML/CSS natif n'est pas suffisant ;
- JavaScript client limité aux courbes progressives, filtres et préférences de mouvement ;
- aucun backend, aucune base de données.

Pourquoi : site éditorial statique, performance élevée, composants simples, données locales, faible surface de dépendances et déploiement facile. Aucun framework React/Vue n'est nécessaire au MVP.

### Composants

```text
SiteHeader
HeroEvidence
ChallengeScene
PipelineStep
MethodEquationCard
TrajectoryComparison
ValidationMetrics
SystemChain
SolverComparison
ValidationMatrix
LimitsCards
TechnicalDisclosure
MediaFigure
SiteFooter
```

### Données et textes

- `src/content/site.ts` : titres, textes et labels ;
- `data/validation.json` : KPI avec source et portée ;
- `data/solver-comparison.json` : export du run choisi ;
- `data/media-manifest.json` : source dépôt → fichier web ;
- `public/documents/` : uniquement les documents revus pour publication.

### Scripts scientifiques

Un script d'export lira les quatre JSON métriques finaux et les CSV associés, puis produira des données web minimales. Chaque KPI aura : valeur, unité, essai, date, source, statut et réserve. Les graphiques seront régénérés dans la palette du site au lieu d'être extraits manuellement d'une capture.

### Commandes prévues

```bash
cd paco-showcase
npm install
npm run dev
npm run test
npm run build
npm run preview
```

### Responsive

- desktop : grilles 12 colonnes, vidéo/texte côte à côte ;
- tablette : 6 colonnes, pipeline en deux rangées ;
- mobile : pile unique, pipeline horizontal défilable avec repères, tableaux transformés en cartes ;
- images `srcset`, MP4 H.264 + WebM si pertinent, posters JPEG/WebP ;
- aucun texte dans une image quand il peut être rendu en HTML.

### Qualité

- test de build et liens internes ;
- tests de données pour interdire un KPI sans source/portée ;
- audit Lighthouse performance/accessibilité ;
- navigation clavier, focus visible, contraste WCAG AA ;
- test `prefers-reduced-motion` ;
- vérification 375 px, 768 px, 1440 px ;
- contrôle que les rapports/médias publiés ne contiennent ni IP, ni chemin personnel, ni identifiant sensible ;
- comparaison finale de chaque chiffre avec le JSON source.

### Déploiement recommandé

GitHub Pages via GitHub Actions, avec URL de base configurable. Alternatives sans changement d'architecture : Netlify ou Vercel. Les médias lourds resteront sous quelques dizaines de Mo ; au-delà, utiliser un hébergement vidéo explicite plutôt que Git LFS par défaut.

### Séquence d'implémentation

1. créer `paco-showcase/` et le système de design ;
2. exporter/figer les données validées ;
3. construire Hero, pipeline et validation matrix ;
4. intégrer courbes et système réel ;
5. ajouter détails techniques et solveurs ;
6. optimiser les médias ;
7. tester responsive/accessibilité ;
8. revue factuelle finale ;
9. déployer.

---

## 24. Recommandation finale

Le site doit raconter une réussite précise, pas une promesse générale : **une méthode variationnelle produit un plan, une couche causale prépare la réaction à l'imprévu, et une chaîne expérimentale mesure ce qui se passe réellement.**

Le meilleur élément de preuve est le contournement fixe répété et quantifié. La meilleure preuve de maturité n'est pas un chiffre de vitesse : c'est la capacité du projet à montrer simultanément ses équations, ses données, ses sécurités, ses échecs et la frontière exacte de ce qui reste à valider.

Le MVP peut être construit immédiatement avec les contenus existants. Les nouveaux médias amélioreront fortement l'impact, mais ne bloquent pas l'architecture ni la rédaction. Après réponse unique à la section 22 et dépôt éventuel des fichiers, l'étape suivante est l'implémentation complète dans `paco-showcase/`.
