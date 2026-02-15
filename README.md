# Routing — Landing Page

Landing page pour le SaaS de routing/dispatch **Routing**.

## Stack

- **Vite** + **React** + **Tailwind CSS v4**
- **Framer Motion** — animations légères
- **Lucide React** — icônes

## Développement local

```bash
npm install
npm run dev
```

Le serveur démarre sur `http://localhost:5173`.

## Build de production

```bash
npm run build
```

Les fichiers statiques sont générés dans le dossier `dist/`.

## Déploiement Netlify

### Option 1 — Git (recommandé)

1. Poussez le repo sur GitHub / GitLab.
2. Connectez le repo dans [app.netlify.com](https://app.netlify.com).
3. Netlify détecte automatiquement la config via `netlify.toml` :
   - Build command : `npm run build`
   - Publish directory : `dist`
4. Chaque push déclenche un déploiement.

### Option 2 — Drag & Drop

1. Lancez `npm run build` en local.
2. Glissez le dossier `dist/` sur [app.netlify.com/drop](https://app.netlify.com/drop).
3. Le site est en ligne.

### Option 3 — Netlify CLI

```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod --dir=dist
```

## Structure

```
src/
├── components/
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── HowItWorks.jsx
│   ├── Features.jsx
│   ├── Connectivity.jsx
│   ├── Pricing.jsx
│   ├── FAQ.jsx
│   └── Footer.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## URLs placeholders

| Route           | Usage                    |
| --------------- | ------------------------ |
| `/app/signup`   | Inscription              |
| `/app/login`    | Connexion                |
| `/privacy`      | Politique confidentialité|
| `/terms`        | CGU                      |
| `mailto:contact@routing.app` | Contact       |
