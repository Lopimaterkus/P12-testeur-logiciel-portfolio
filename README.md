# **P12-testeur-logiciel-portfolio**

# **Portfolio de Armelle Barban**

# **Table des matières**

1. Aperçu
2. Technologie Utilisées
3. Installation
4. Utilisation
5. Fonctionnalités
6. Projets
7. Optimisations et Corrections
8. Déploiement
9. Contact

# **Aperçu**

Ce projet est un portfolio web qui permet de :

-Présenter mon profil de développeur et testeur  
-Lister mes compétences techniques  
-Montrer des exemples de projets sur lesquels j'ai travaillé

# **Technologie Utilisées**

-HTML5  
-CSS3  
-JavaScript  
-Bootstrap  
-Font Awesome pour les icônes  
-GitHub Pages pour le déploiement

# **Installation**

Pour cloner et exécuter ce projet sur votre machine locale, suivez ces étapes :

1. Clonez le repository:

```
git clone https://github.com/Lopimaterkus/P12-testeur-logiciel-portfolio.git

```

2. Accédez au répertoire du projet :

```
cd Projet-12\P12-testeur-logiciel-portfolio-master

```

3. Installez les dépendances dans IDE: Visual Studio Code (VSCode):

https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

# **Utilisation**

1. Ouvrez le projet dans Visual Studio Code.
2. Installez l'extension Live Server si ce n'est pas déjà fait.
3. Cliquez avec le bouton droit sur le fichier `index.html` et sélectionnez "Open with Live Server".
4. Le site sera accessible à l'adresse http://127.0.0.1:5500 (ou une autre adresse spécifiée par Live Server).

# **Fonctionnalités**

-**Présentation du profil**: Une section dédiée à mon parcours et à mes compétences.  
-**Projets** : Présentation détaillée de mes projets avec des liens vers les dépôts GitHub correspondants.  
-**Responsive Design**: Optimisé pour une visualisation sur différents appareils.  
-**Accessibilité**: Conforme aux bonnes pratiques en matière de SEO et d'accessibilité.

# **Projets**

-**Présentation des différents projets effectués durant la formation**

# **Optimisations et Corrections**

## **Bugs Résolus**

1. **Icônes Font Awesome non affichées** : Le problème était dû à l'absence du lien vers la feuille de style de Font Awesome dans le fichier HTML. La solution consistait à ajouter le lien suivant dans la balise head, avant le lien vers Bootstrap :

```
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
    integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
    crossorigin="anonymous" referrerpolicy="no-referrer">
```

2. **Problèmes d'affichage dynamique** : Une erreur d'orthographe a été corrigée dans le script pour garantir le bon fonctionnement de l'affichage dynamique.

## **Optimisations**

1. **Optimisation des image** : Les images ont été compressées et converties au format WebP pour un chargement plus rapide tout en conservant une haute qualité. Le format WebP permet de réduire la taille des fichiers sans compromettre la qualité visuelle.

2. **Contraste des couleurs** : Le contraste des couleurs a été ajusté pour répondre aux standards d'accessibilité. Cela garantit une meilleure lisibilité pour tous les utilisateurs, y compris ceux ayant des déficiences visuelles.

3. **Structure des titres** : Hiérarchie des titres ajustée pour le SEO et l'accessibilité.

# **Déploiement**

Le site est déployé sur GitHub Pages et est accessible à l'adresse suivante :
https://lopimaterkus.github.io/P12-testeur-logiciel-portfolio/

# **Contact**

Pour toute question ou collaboration, vous pouvez me contacter via :

-**Email** : julien.baraer29@gmail.com  
-**LinkedIn** : https://www.linkedin.com/in/julien-baraer-061780274/