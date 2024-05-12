# WeatherApp - Server
 
## Description
Ce projet scolaire représente le code côté serveur de l'application WeatherApp, développé en utilisant Angular, MongoDB et Node.js.
L'API permet la gestion des sessions utilisateur, notamment l'authentification via Google Sign-In, la récupération des données de géolocalisation, et l'affichage des conditions météorologiques.


## Arborescence des fichiers
API/
│
├── "node_modules/" (Dossier de dépendances, ces dépendances sont installées avec la commande `npm install` après le téléchargement du code)
│
├── controllers/
│   └── sessionController.js
├── lib/
│   └── mongodb.js
├── models/
│   └── sessionModel.js
├── routes/
│   └── sessionRoutes.js
├── services/
│   └── weatherService.js
├──index.js
│
├── ".env" (Fichier à créer avec les variables d'environnement)
│
├── package-lock.json
│
└── package.json


## Fonctionnalités principales
- **Authentification Google Sign-In**: Permet aux utilisateurs de se connecter à l'application en utilisant leur compte Google.
- **Gestion des sessions**: Enregistre les données de géolocalisation des utilisateurs ainsi que les conditions météorologiques associées.
- **Récupération des données météorologiques**: Utilise l'API OpenWeather pour récupérer les conditions météorologiques en temps réel en fonction de la position géographique de l'utilisateur.
- **Création de nouvelles sessions**: Crée une nouvelle session avec les données de géolocalisation et les conditions météorologiques actuelles pour un utilisateur donné.
- **Récupération des sessions utilisateur**: Permet de récupérer les sessions enregistrées pour un utilisateur donné.
- **Récupération de la dernière session**: Permet de récupérer la dernière session enregistrée pour un utilisateur donné.


## Technologies utilisées
- [Node.js](https://nodejs.org/en/): Utilisé pour exécuter le code JavaScript côté serveur.
- [Express.js](https://expressjs.com/): Cadre de développement web utilisé pour créer des API RESTful.
- [MongoDB](https://www.mongodb.com/): Base de données NoSQL utilisée pour stocker les données des sessions utilisateur.
- [Mongoose](https://mongoosejs.com/): Outil de modélisation des données MongoDB pour Node.js, utilisé pour définir les schémas de données et interagir avec la base de données.
- [API Leaflet](https://leafletjs.com/): Bibliothèque JavaScript utilisée pour afficher des cartes interactives.
- [API OpenWeather](https://openweathermap.org/): Utilisée pour récupérer les conditions météorologiques en temps réel en fonction de la position géographique de l'utilisateur.


## Comment Exécuter le serveur
### Éléments nécessaires pour accéder à la solution:
- Un appareil compatible avec une connexion Internet.
- Un navigateur web moderne tel que Google Chrome, Mozilla Firefox, ou Safari.
- Un compte Google valide pour l'authentification via Google sign-in.

### Configuration
1. Clônez le dépôt depuis Github.
2. Installation des dépendances: Exécutez `npm install` pour installer toutes les dépendances nécessaires répertoriées dans package.json.
3. Démarrez le serveur: Exécutez npm start pour démarrer le serveur Node.js.
---

*Note : Ce code représente la partie serveur de l'application. Assurez-vous de lancer l'API côté serveur avant d'utiliser l'application côté client.*

*Assurez-vous que les liens vers les bibliothèques et fichiers JavaScript/CSS externes sont toujours valides au moment de l'exécution. Mise à jour recommandée pour les versions les plus récentes des bibliothèques.*