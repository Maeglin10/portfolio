# Plan SEO Aevia — état + roadmap

Audit effectué le 2026-05-28 sur les 5 sites en prod.

## ✅ Fait dans cette session

| # | Fix | Impact |
|---|---|---|
| 1 | Hub Aevia : `og:image` manquante dans `[locale]/layout.tsx` → ajoutée | **Critique** : les partages LinkedIn/WhatsApp/Facebook affichent maintenant la vraie OG image au lieu d'un texte gris |
| 2 | Security : alias `aevia-security.vercel.app` pointait sur vieux deploy "SkySecurity" → ré-aliasé | **Critique** : le brand affiché en SERP est maintenant "Aevia Security" en français |
| 3 | Market : metadata 100% anglaise ("ServiceHub") → rebrand complet en français | **Critique** : Google FR va indexer correctement |
| 4 | Toutes les descriptions > 160 chars → raccourcies (Hub 211→159, Launch 202→156, Inbox 199→156) | **Important** : Google ne tronque plus avec "..." dans les résultats |
| 5 | Launch title 65→51 chars, Inbox title 70→56 chars | **Important** : titres complets affichés en SERP |
| 6 | Pages produit `/launch /inbox /security` : ajout server-side layout avec JSON-LD : | |
|  | • `FAQPage` schema (4 questions par produit) | **Rich snippets** dans Google (FAQ collapsibles dans SERP) |
|  | • `BreadcrumbList` schema | **Breadcrumb** affiché en SERP au lieu de l'URL |
|  | • `Product` + `Offer` schema avec prix | Éligibilité à **Google Shopping** + rich pricing snippets |

## 🎯 Wins rapides à faire dans la prochaine session (2-4h)

### A. Google Search Console
1. Créer un compte sur https://search.google.com/search-console
2. Ajouter les 5 domaines :
   - `aevia.vercel.app`
   - `aevia-launch.vercel.app`
   - `aevia-inbox.vercel.app`
   - `aevia-security.vercel.app`
   - `aevia-market.vercel.app`
3. Vérification via meta tag (déjà supporté, le code fait `<meta name="google-site-verification" />` quand l'env `GOOGLE_VERIFICATION` est set)
4. Soumettre les sitemaps de chaque site
5. **Important** : ça déclenche l'indexation Google et tu vois les stats d'impressions/clics

### B. Schema markup avancé manquant

| Site | Schema à ajouter | Bénéfice SERP |
|---|---|---|
| Hub Aevia | `Organization` complet avec `logo`, `sameAs`, `contactPoint` | Knowledge Graph Google |
| Hub Aevia /blog | `Article` + `Author` schema sur chaque post | Rich snippet dates + auteur |
| Launch | `HowTo` schema sur "Comment ça marche" | Étapes affichées en SERP |
| Inbox | `SoftwareApplication` avec aggregateRating quand reviews | Note 5 étoiles en SERP |
| Security | `WebSite` avec `SearchAction` (search box) | Sitelinks search en SERP |
| Market | `Service` + `Offer` par catégorie | Pricing visible |

### C. Performance Core Web Vitals

Faire un audit Lighthouse sur chaque site et viser :
- **LCP < 2.5s** (Largest Contentful Paint)
- **FID < 100ms** (First Input Delay) — Now INP
- **CLS < 0.1** (Cumulative Layout Shift)

Quick wins probables :
- `<Image priority>` sur les hero images (LCP)
- `font-display: swap` sur les fonts custom (FOIT)
- Précharger les fonts critiques avec `<link rel="preload" as="font">`
- Réduire le JS non-utilisé (next-bundle-analyzer)
- Lazy load tout ce qui est below-the-fold

### D. Content SEO

**Pages manquantes à forte valeur SEO** :
- `/glossaire` : 50-100 termes liés à WhatsApp Business, sécurité web, freelance, sites web (chacun = 1 page longue à thématique)
- `/guides/` : guides longs (3000-5000 mots) sur les sujets pivot (ex: "Comment connecter WhatsApp Business à son site")
- `/comparatifs/` : "Aevia Launch vs Wix", "Aevia Inbox vs Front", "Aevia Security vs Detectify" — pages comparatives (long-tail SEO)
- `/cas-clients/` : étude de cas de chaque client (avec Maison Maria = premier post)

**Articles blog SEO à publier** (sur `/portfolio` blog) :
1. "Combien coûte un site web pro en 2026 ?" → cible Launch
2. "Les 7 meilleurs CRM WhatsApp Business pour PME" → cible Inbox
3. "Pourquoi votre site n'est pas sécurisé (et comment vérifier en 60s)" → cible Security
4. "Comment trouver un freelance web fiable en France ?" → cible Market
5. "WhatsApp vs Instagram DM : lequel pour votre business ?" → cible Inbox
6. "Audit DNS pour débutants : SPF, DKIM, DMARC expliqués simplement" → cible Security
7. "10 templates de site web pour restaurants" → cible Launch
8. "Le guide complet du paiement Stripe pour freelances" → cible Market

### E. Internal linking SEO

- Footer commun avec liens vers les 4 autres sites Aevia (déjà fait partiellement, à étendre)
- Sur chaque page produit, ajouter un encart "Autres produits Aevia" avec liens contextuels
- Sur blog, lier chaque article aux pages produits pertinentes

### F. Local SEO (pour Maison Maria et futurs clients locaux)

- Google Business Profile vérifié (gratuit)
- Schema `LocalBusiness` avec `geo` coordinates (déjà fait pour Maison Maria)
- Citations annuaires : PagesJaunes, Justacôté, Yelp, TripAdvisor (Resto/Beauté)
- Encourager les clients à laisser des avis Google

### G. Backlinks (long terme)

- Soumettre à Product Hunt (Aevia Launch, Inbox, Security)
- HackerNews "Show HN" pour Aevia Launch
- Articles invités sur blogs FR Tech (Maddyness, FrenchWeb, Frenchburst)
- Listings : BetaList, Indie Hackers, Reddit r/SaaS, r/startups
- Cross-promotion avec autres SaaS FR

## 📊 KPIs à monitorer

Mettre en place dashboards mensuels :
- **Search Console** : impressions, clics, CTR, position moyenne par page
- **Vercel Analytics** : trafic organique, conversion par page
- **Google Analytics 4** (optionnel) : sources de trafic, parcours utilisateur

Objectif M1 : 100 impressions/jour Hub Aevia
Objectif M3 : 1k impressions/jour, 50 clics/jour, position moyenne top 30
Objectif M6 : 10k impressions/jour, 500 clics/jour, top 10 sur "site web 2h" + "audit sécurité site"

## 🛠 Outils SEO gratuits recommandés

- **Google Search Console** (obligatoire)
- **PageSpeed Insights** (perf + Core Web Vitals)
- **Google Rich Results Test** : valider les JSON-LD
- **Schema.org Validator** : vérifier la syntaxe
- **Screaming Frog Free** : crawl interne 500 URLs (suffit largement)
- **Ubersuggest** (3 recherches/jour gratuites) : volumes de recherche
- **Ahrefs Webmaster Tools** (gratuit sur vos propres domaines) : backlinks + organic keywords
