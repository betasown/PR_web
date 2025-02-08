# Projet de Recherche de Stage

Ce projet est un site web de recherche de stage, développé dans le cadre d'un prosit avec l'école CESI. Il s'agit d'une application front-end permettant aux utilisateurs de rechercher des offres de stage.


## Technologies Utilisées

- HTML, JavaScript, CSS
- Utilisation de nextjs

## Architecture 

└── betasown-pr_web/
    ├── README.md
    ├── eslint.config.mjs
    ├── jsconfig.json
    ├── next.config.mjs
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.mjs
    ├── public/
    └── src/
        └── app/
            ├── globals.css
            ├── layout.js
            ├── page.js
            ├── a-propos/
            │   └── page.js
            ├── cgu/
            │   └── page.js
            ├── connexion/
            │   └── page.js
            ├── contact/
            │   └── page.js
            ├── inscription/
            │   └── page.js
            ├── ml/
            │   └── page.js
            └── offres/
                ├── page.js
                └── [id]/
                    └── page.js

## Installation

1. Clonez le dépôt :
    ```bash
    git clone https://github.com/betasown/PR_web.git
    ```
2. Installez les dépendances :
    ```bash
    cd votre-repo
    npm install
    ```
3. Démarrez le serveur de développement :
    ```bash
    npm run dev
    ```
4. Ouvrez votre navigateur et allez à l'adresse `http://localhost:3000`.

