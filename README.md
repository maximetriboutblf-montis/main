# Montis Tech — site (Next.js, TypeScript, Tailwind)
Lancer : `npm install && npm run dev` · Build : `npm run build`.
Tout se modifie dans `src/config/site.ts` (contact, tarifs, modes de prise en charge, infos légales).
Phase 2 (magasin) : `mode.shop.enabled=true`, `mode.home.enabled=false`, renseigner `address` et `hours`.
## À compléter
Domaine (`url`), téléphone, e-mail, infos légales, à-propos, communes, garanties, CGV/confidentialité (à faire vérifier).
## Non connecté
Formulaire : `formEndpoint` vide = aucun envoi réel (le site le dit). Brancher un service d'envoi + anti-spam côté serveur.
Non fait : formulaires PC/smartphone détaillés, FAQ complète, anti-spam serveur.
Domaine : définir NEXT_PUBLIC_SITE_URL (ex. https://votre-domaine.fr) avant déploiement ; sans lui, ni canonical ni sitemap.
