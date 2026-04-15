# Avia Ecosystem Unification — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Transformer les 6 projets Aevia en un écosystème unifié "Avia" avec le portfolio comme hub central, i18n FR/EN/ES, design system partagé, et un accès direct à tous les modules depuis un seul point d'entrée.

**Architecture:** Le portfolio (avia.vercel.app à terme) est le hub produit. AeviaLaunch + AeviaInbox + AeviaSecurity sont les 3 modules actifs. Marketplace et Live passent en showcase screenshot uniquement. Pas de monorepo — coordination par design tokens CSS partagés copiés entre projets.

**Tech Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS, next-intl (i18n), Framer Motion, Vercel

---

## PHASE 0 — Audit rapide (état actuel)

| Projet | URL actuelle | Statut | Rôle Avia |
|--------|-------------|--------|-----------|
| portfolio | valentin-milliand.vercel.app | ✅ Live | Hub central |
| skylaunch | aevia-launch.vercel.app | ✅ Live | Module Launch |
| skybot-inbox-ui | TBD | 🔨 Backend | Module Inbox |
| skysecurity/apps/web | TBD | 🔨 Build fixe | Module Security |
| marketplace | TBD | 📸 Screenshot | Showcase |
| skylive | TBD | 📸 Screenshot | Showcase |

---

## PHASE 1 — Portfolio Hub : Refonte "Avia"

### Task 1.1 : Rebranding Aevia → Avia (visible text only)

**Files:**
- Modify: `portfolio/app/page.tsx`
- Modify: `portfolio/components/Nav.tsx`
- Modify: `portfolio/app/layout.tsx`

**Steps:**
1. `page.tsx` L310: badge "Aevia Ecosystem" → "Avia Ecosystem"
2. `page.tsx` L51–112: rename interface `AeviaProject` → `AviaProduct`, const `aeviaProjects` → `aviaProducts`
3. `page.tsx` L128–183: rename `ProjectCard` → `ProductCard`
4. Nettoyer les descriptions dans le tableau (enlever "Aevia" des descriptions visibles)
5. `layout.tsx`: `title: "Avia — Valentin Milliand"`, mise à jour og:title, description

**Commit:** `feat(portfolio): rebrand Aevia → Avia`

---

### Task 1.2 : Section "Avia Ecosystem" sur la homepage

**Files:**
- Modify: `portfolio/app/page.tsx` (ajouter section après les projets)

**Contenu de la section:**
```
[ AeviaLaunch ]  [ AeviaInbox ]  [ AeviaSecurity ]  [ Marketplace* ]
  Site builder     CRM/Inbox       Security audit       (screenshot)
  → aevia-launch   → inbox url     → security url       → static img
```

**Chaque card contient:**
- Icône + nom du module
- Description 1 ligne
- Lien externe (target="_blank", rel="noopener noreferrer")
- Badge "Coming soon" si pas encore live
- Badge "Screenshot" si Marketplace/Live

**Steps:**
1. Ajouter `ecosystemModules` array avec: name, description, url, icon, status (live/soon/screenshot)
2. Créer section `<EcosystemSection>` avec grid 2×2 responsive (sm:2col, md:4col)
3. Design: même style que les project cards existantes (dark zinc, violet accent, hover glow)
4. Placer après la section skills, avant le footer

**Commit:** `feat(portfolio): add Avia ecosystem section`

---

### Task 1.3 : Screenshots Marketplace + Live

**Files:**
- Create: `portfolio/public/screenshots/marketplace.png`
- Create: `portfolio/public/screenshots/skylive.png`
- Modify: `portfolio/app/page.tsx` (section screenshots)

**Steps:**
1. Capturer screenshot des deux projets (Lighthouse ou manuellement)
2. Optimiser en WebP (max 1200px wide)
3. Ajouter une section "Also built" avec 2 cards image-only (pas de lien live)
4. `<Image>` Next.js avec `alt`, `width`, `height`

**Commit:** `feat(portfolio): add marketplace + skylive screenshots`

---

### Task 1.4 : Navigation inter-modules (Nav update)

**Files:**
- Modify: `portfolio/components/Nav.tsx`

**Steps:**
1. Après L14 (liens array), ajouter `ecosystemLinks` array:
   - `{ label: "AeviaLaunch", url: "https://aevia-launch.vercel.app", external: true }`
   - `{ label: "AeviaInbox", url: "https://skybot-inbox.vercel.app", external: true, badge: "Soon" }`
   - `{ label: "AeviaSecurity", url: "https://aevia-security.vercel.app", external: true, badge: "Soon" }`
2. L29–61 (desktop nav): après le lien "Projets", ajouter dropdown "Ecosystem" avec icône "→"
3. L76–110 (mobile nav): section accordion "Ecosystem" avec les 3 liens
4. Chaque lien externe: `target="_blank"` + `rel="noopener noreferrer"`

**Commit:** `feat(portfolio): add ecosystem navigation`

---

## PHASE 2 — i18n FR/EN/ES

> **⚠️ Note:** i18n est la tâche la plus volumineuse. Appliquer d'abord sur portfolio, puis copier le pattern sur skylaunch et skysecurity.

### Task 2.1 : Setup next-intl sur portfolio

**Install:**
```bash
npm install next-intl
```

**File structure:**
```
portfolio/
  messages/
    fr.json          ← default
    en.json
    es.json
  middleware.ts      ← routing i18n
  i18n/
    routing.ts       ← config locales + defaultLocale
    request.ts       ← getRequestConfig
  app/
    [locale]/        ← wrap all pages
      layout.tsx     ← NextIntlClientProvider
      page.tsx
      about/page.tsx
      contact/page.tsx
      projects/page.tsx
```

**Steps:**
1. Installer `next-intl`
2. Créer `i18n/routing.ts`:
   ```ts
   import { defineRouting } from 'next-intl/routing';
   export const routing = defineRouting({
     locales: ['fr', 'en', 'es'],
     defaultLocale: 'fr'
   });
   ```
3. Créer `middleware.ts` avec `createNavigation(routing)` — redirige `/` vers `/fr`
4. Créer `i18n/request.ts` pour charger les messages
5. Déplacer `app/page.tsx` → `app/[locale]/page.tsx` (et tous les autres)
6. Mettre à jour `app/[locale]/layout.tsx` avec `NextIntlClientProvider`
7. Ajouter `hreflang` links dans le layout head

**Commit:** `feat(portfolio): setup next-intl routing + middleware`

---

### Task 2.2 : Messages FR/EN/ES — portfolio

**Files:**
- Create: `portfolio/messages/fr.json`
- Create: `portfolio/messages/en.json`
- Create: `portfolio/messages/es.json`

**Structure JSON (fr.json exemple):**
```json
{
  "nav": {
    "about": "À propos",
    "projects": "Projets",
    "contact": "Contact",
    "ecosystem": "Écosystème"
  },
  "hero": {
    "title": "Valentin Milliand",
    "subtitle": "Développeur Full-Stack & Builder",
    "description": "Je construis des produits complets — du backend NestJS aux interfaces Next.js"
  },
  "ecosystem": {
    "title": "L'écosystème Avia",
    "subtitle": "Des outils pensés pour les créateurs et entrepreneurs",
    "launch": { "name": "AeviaLaunch", "desc": "Générateur de sites IA" },
    "inbox": { "name": "AeviaInbox", "desc": "CRM & messaging intelligent" },
    "security": { "name": "AeviaSecurity", "desc": "Audit de sécurité automatisé" }
  },
  "projects": { "title": "Projets" },
  "skills": { "title": "Stack technique" },
  "contact": { "title": "Contact", "cta": "Me contacter" },
  "footer": { "built": "Construit avec Next.js" }
}
```

**Steps:**
1. Extraire tous les textes hardcodés de `app/[locale]/page.tsx` dans les JSON
2. Utiliser `useTranslations('hero')` dans les composants client, `getTranslations` dans server components
3. EN + ES: traduire les strings (pas les noms propres, URLs, tech stack)

**Commit:** `feat(portfolio): add FR/EN/ES translations`

---

### Task 2.3 : i18n sur AeviaLaunch (skylaunch)

**Same pattern — adapter pour skylaunch:**
```
skylaunch/
  messages/fr.json, en.json, es.json
  middleware.ts
  i18n/routing.ts, request.ts
  app/[locale]/
    page.tsx
    themes/page.tsx
    themes/[id]/page.tsx
    configure/page.tsx
```

**Key strings to translate in skylaunch:**
- Hero: "Créez votre site en 60 secondes" / "Create your site in 60 seconds"
- CTA: "Démarrer" / "Get started"
- Nav: "Thèmes" / "Themes", "Créer mon site" / "Build my site"
- Theme labels, category names

**⚠️ Important:** Les templates générés (HTML) resteront en français par défaut pour l'instant — l'i18n du contenu généré par IA est hors scope Phase 1.

**Commit:** `feat(skylaunch): add i18n FR/EN/ES`

---

### Task 2.4 : i18n sur AeviaSecurity (skysecurity)

```
skysecurity/apps/web/
  messages/fr.json, en.json, es.json
  middleware.ts
  i18n/routing.ts, request.ts
  src/app/[locale]/
    page.tsx
    pricing/page.tsx
    audit/page.tsx
```

**Key strings:** landing hero, pricing table labels, audit form

**Commit:** `feat(skysecurity): add i18n FR/EN/ES`

---

## PHASE 3 — Design System partagé (CSS tokens)

> **Approche:** Fichier CSS tokens copié manuellement entre projets (pas de npm package — YAGNI pour un solo dev).

### Task 3.1 : Créer le fichier de tokens Avia

**File to create in each project:**
```
{project}/src/styles/avia-tokens.css   (ou app/avia-tokens.css)
```

**Contenu:**
```css
/* Avia Design Tokens */
:root {
  /* Background */
  --avia-bg:        #09090b;
  --avia-surface:   #18181b;
  --avia-surface-2: #27272a;

  /* Border */
  --avia-border:    #3f3f46;
  --avia-border-dim: #27272a;

  /* Text */
  --avia-text:      #fafafa;
  --avia-text-muted: #a1a1aa;
  --avia-text-dim:  #71717a;

  /* Accent */
  --avia-accent:    #7c3aed;  /* violet-700 */
  --avia-accent-hover: #6d28d9;
  --avia-accent-light: #8b5cf6;

  /* Gold (Premium) */
  --avia-gold:      #c9a96e;

  /* Radius */
  --avia-radius-sm: 6px;
  --avia-radius:    12px;
  --avia-radius-lg: 24px;
  --avia-radius-full: 9999px;
}
```

**Steps:**
1. Créer ce fichier dans portfolio, skylaunch, skysecurity
2. Importer dans `globals.css` de chaque projet: `@import './avia-tokens.css';`
3. Progressivement remplacer les valeurs hardcodées par les variables CSS
4. **Ne pas** refactoriser tout le code existant d'un coup — juste les nouveaux composants utilisent les tokens

**Commit (par projet):** `feat: add Avia design tokens`

---

## PHASE 4 — Auth centralisée (futur — post Stripe)

> **⚠️ Hors scope Phase 1.** Notes pour la suite:

- Auth via JWT dans le backend NestJS existant (skybot-inbox)
- Partage du token entre domaines via cookie `avia_session` sur `.avia.app` (si domaine unifié)
- Ou OAuth2 si domaines séparés
- Un seul compte utilisateur accède à: Launch, Inbox, Security

**Pour l'instant:** Chaque projet gère son auth indépendamment. L'auth centralisée est planifiée pour après les tests du week-end + Stripe.

---

## PHASE 5 — Stripe (semaine prochaine)

> Hors scope de ce plan. Notes:

- AeviaLaunch: paywall pour génération de site (plan Free = preview only, Pro = download/deploy)
- AeviaSecurity: paywall pour rapport d'audit complet
- AeviaInbox: abonnement mensuel (déjà prévu dans skybot-inbox)
- Marketplace: commissions sur ventes (déjà partiellement implémenté)
- Produits Stripe à créer: `avia_launch_pro`, `avia_security_report`, `avia_inbox_monthly`

---

## PHASE 6 — Render backends (fix immédiat requis)

> Ces fixes doivent être faits AVANT le week-end de test.

### Task 6.1 : Fix build command pour aevia-app-api, aevia-security-api

**Root cause:** `NODE_ENV=production` → npm skip devDeps → `@nestjs/cli` manquant

**Fix pour chaque service (via Render API PATCH):**
```json
{
  "serviceDetails": {
    "envSpecificDetails": {
      "buildCommand": "npm install --include=dev && ./node_modules/.bin/prisma generate && ./node_modules/.bin/nest build"
    }
  }
}
```

**Pour les monorepos (skylive, skysecurity):**
- Set `rootDir: "apps/api"` via Render PATCH
- Build command: `npm install --include=dev && ./node_modules/.bin/prisma generate && ./node_modules/.bin/nest build`

**Start command:**
```
./node_modules/.bin/prisma migrate deploy && node dist/main.js
```

### Task 6.2 : Fix aevia-live DATABASE_URL

- Créer une DB Neon (free tier) pour aevia-live
- Ajouter `DATABASE_URL` en env var sur Render
- Ou: désactiver aevia-live (Marketplace + Live = screenshot uniquement → pas besoin de backend live)

---

## Ordre d'exécution recommandé

```
Week 1 (ce week-end):
  [ ] Phase 6 — Fix Render backends (bloquant pour tests)
  [ ] Phase 1 — Portfolio hub rebrand + ecosystem section
  [ ] Phase 3 — Design tokens (rapide, 30 min par projet)

Week 2:
  [ ] Phase 2 — i18n (portfolio d'abord, puis launch + security)
  [ ] Phase 5 — Stripe

Plus tard:
  [ ] Phase 4 — Auth centralisée
```

---

## Checklist de validation (avant "live")

- [ ] Portfolio: section ecosystem avec liens vers tous les modules
- [ ] Portfolio: "Avia" branding cohérent
- [ ] AeviaLaunch: thèmes accessibles sans build (déjà fait avec GeneratedSite preview)
- [ ] AeviaLaunch: sitemap.xml à jour (21 themes + configure)
- [ ] Render: tous les backends déploient sans erreur
- [ ] Lighthouse: SEO 100 sur tous les projets (déjà fait)
- [ ] i18n: /fr /en /es fonctionnels sur portfolio
- [ ] Stripe: checkout fonctionnel sur au moins 1 produit

---

## Notes architecture

- **Pas de monorepo** pour l'instant — 6 projets indépendants coordonnés par convention
- **API unique**: NestJS backend de skybot-inbox sert de backend principal (API KEY protégé)
- **Domaine**: Garder les domaines Vercel actuels pour Phase 1 — migration vers `avia.app` en Phase 2+
- **Screenshots**: Utiliser `mcp__chrome-devtools__take_screenshot` ou Lighthouse pour capturer les UIs
