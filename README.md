## ReactJs Movie

### ReactJs / Api movie

### instalation :

Instalation : `npm i`

### Lancement projet :

Start : `npm start`

---

## Le Frontend :

- Dans le `/src` on vas trouver les dossiers `/components`, `/pages`, `/styles`, ainsi que les fichiers `/App.js` et `/index.js`

  - Dans le dossier`/components` :

    - On trouve le Footer `/Footer.js` qui est le footer de nos pages
    - On trouve La Navbar `/NavBar.js`
    - Enfin le fichier `/Search.js` où l'on trouve notre Input qui est dans notre NavBar cette Input nous permet de recherche un film à l'aide de sont titre et d'y accéder

  - Dans le dossier `/pages` :

    - On y trouve le fichier Movie `/Movie.js` qui est notre page d'aceuil où est affiché nos films trié par ordre de populatité à l'aide d'une API
    - On y trouve le fichier DetailsMovie `/DetailsMovie.js` qui est notre page ou l'ont affiche les details d'un film cliqué ou recherché à l'aide de notre NavBar ou y trouveras une bande annonce/Synopsis/...

  - Dans le dossier `/styles` on y trouve tous le css :

    - Dans `/styles/components`:
      - `_footer.scss` qui est le css du footer présent dans `../components/Footer.js`
      - `_navbar.scss` qui est le css de la NavBar présent dans `../components/Navbar.js`
      - `_search.scss` qui est le css de notre Input ainsi que de nos films affiché suite à la recherche `../components/Search.js`
    - Dans `/styles/pages`: - `details.scss` qui est le css de notre page avec les details d'un films selectioné `../pages/DetailsMovie.js` - `_movie.scss` qui est le css de notre page d'aceuil ou nos film sont repertorié `../pages/Movie.js`
    - Le fichier `_settings.css` est la ou nous mettre tous les paramettre de bases qui seront réutilisé partous dans le css
    - Le fichier `index.scss` permet de relier tous les fichier css

  - Dans le fichier `App.js` on y trouve les routes pour accéder a tous les fichiers et comment ils seront affiché
  - Dans le fichier `index.js` c'est notre liens entre `app.js` et `.../public/index.html`
