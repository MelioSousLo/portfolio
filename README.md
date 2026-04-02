# Portfolio — Arthur Dauneau

## Choix de design

Ce document explique les décisions prises pour la conception visuelle et technique du portfolio, incluant les animations du fond et des éléments graphiques.

---

## Couleurs

### Fond principal : `#fafaf8`

Un blanc légèrement teinté de chaud, presque crème, plutôt qu'un blanc pur `#ffffff`. Ce choix réduit le contraste agressif avec le texte noir, ce qui fatigue moins les yeux. Il apporte une impression de matière et de sobriété, proche d'une feuille de papier, renforçant le caractère professionnel du portfolio.

### Texte principal : `#1a1a1a`

Un noir légèrement adouci plutôt qu'un noir pur, pour un contraste fort sans être brutal. C’est la couleur standard des publications imprimées de qualité.

### Texte secondaire : `#555`, `#666`, `#aaa`, `#bbb`, `#ccc`

Une palette de gris déclinée en plusieurs niveaux pour créer une hiérarchie visuelle claire : contenu principal en sombre, descriptions en gris moyen, métadonnées en gris clair.

### Couleur d'accentuation : aucune

Aucun accent coloré n’est utilisé pour renforcer la sobriété. Les éléments interactifs (boutons, liens au survol) utilisent uniquement les contrastes noir/gris.

### Bordures et séparateurs : `#e8e8e4`, `#f0f0ec`

Des gris très légers, légèrement chauds, pour délimiter les sections sans créer de rupture visuelle forte.

---

## Typographie

### DM Serif Display — titres

Police serif élégante utilisée pour les titres (`h1`, `h2`, `h3`) et le nom dans la navbar. Poids régulier (400), contraste classique, apporte maturité et confiance, tout en restant lisible et sobre.

### Inter — texte courant

Sans-serif optimisée pour l’écran, utilisée pour le texte de corps, labels, boutons et navigation. Elle laisse le contenu occuper la place principale.

### Tailles et espacements

- Titres (`h1`) en `clamp()` pour une adaptation fluide à toutes tailles d'écran.  
- Texte courant dans une fourchette étroite (0.82rem à 1.05rem).  
- Interlignage généreux (`line-height: 1.7–1.75`) pour une lecture confortable.

---

## Mise en page

### Espace blanc généreux

Sections espacées de 96px verticalement, permettant respiration visuelle et distinction claire des sections.

### Largeur maximale : 1100px

Centrage du contenu pour lisibilité optimale sur toutes tailles d’écran.

### Grille responsive

Sections Compétences et Projets utilisent `auto-fit` et `minmax()` pour s’adapter automatiquement entre une colonne (mobile) et plusieurs colonnes (desktop).

### Navbar sticky sobre

Transparente au départ, elle devient blanche avec flou au scroll, évitant un bandeau lourd et assurant la lisibilité.

---

## Animations et éléments graphiques

### Fond étoilé dynamique

Le portfolio utilise un canvas animé avec :  

- **Étoiles statiques** avec variations subtiles de luminosité.  
- **Étoiles filantes** aléatoires, limitées pour ne pas surcharger l’écran.  
- **Nébuleuse douce** centrée, ajoutant de la profondeur à l’espace.  

Cette animation reste discrète et n’interfère pas avec le contenu textuel, renforçant l’expérience visuelle sans nuire à la lisibilité.

### Planète animée

Une planète stylisée flotte dans le coin supérieur droit, avec :  

- Gradient radial simulant volume et lumière.  
- **Cratères animés** pour un relief réaliste.  
- **Halo lumineux doux** autour du corps principal.  
- **Anneau fin** subtilement tournant pour ajouter du dynamisme.  

Elle s’intègre à la scène spatiale et contribue à l’identité visuelle élégante du portfolio.

---

## Principes directeurs

- **Sobriété** : suppression de tout élément décoratif inutile.  
- **Hiérarchie** : tailles, graisses et nuances de gris guident l’œil vers l’essentiel.  
- **Lisibilité** : toutes les décisions visuelles servent la lecture confortable du contenu.  
- **Professionnalisme** : inspiration du design éditorial, loin des tendances marketing flashy.