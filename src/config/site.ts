// Configuration centrale. "" = à compléter (rien n'est affiché publiquement tant que c'est vide).
export const site = {
  name: "Montis Tech", // nom provisoire : disponibilité non vérifiée
  tagline: "Réparation informatique, PC sur mesure et smartphones dans le Val de Morteau.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "", // domaine définitif : à définir via NEXT_PUBLIC_SITE_URL (vide = pas de canonical/sitemap)
  phone: "", email: "", address: "", // adresse : ne rien inventer
  area: "Morteau (25500) et Val de Morteau",
  communes: [] as string[],
  // Phase 2 : shop.enabled=true et home.enabled=false
  mode: { home: { enabled: true, label: "Intervention chez le client, dans la zone desservie" },
          appointment: { enabled: true, label: "Rendez-vous au point de dépôt (adresse communiquée après validation)" },
          shop: { enabled: false, label: "Dépôt en magasin" } },
  hours: ["Accueil sans rendez-vous : 16h–20h (jours à préciser)", "En dehors de ce créneau : sur rendez-vous"], // jours à COMPLÉTER
  warranty: { months: 6 }, // garantie commerciale sur les prestations
  formEndpoint: "", // URL du service d'envoi (formulaire non connecté tant que vide)
  legal: { editor: "", status: "", siret: "", publisher: "", host: "", mediator: "" },
  socials: {} as Record<string, string>,
};
export const prices = [
  ["Diagnostic informatique", "20–40 €"], ["Remplacement SSD ou RAM", "25–50 € de main-d'œuvre"],
  ["Nettoyage et entretien PC", "40–70 €"], ["Réinstallation et configuration", "40–70 €"],
  ["Montage PC", "80–150 €"], ["Diagnostic smartphone", "15–30 €"],
  ["Remplacement batterie smartphone", "30–60 € de main-d'œuvre"], ["Remplacement écran smartphone", "40–80 € de main-d'œuvre"],
] as const;
export const services = {
  informatique: { title: "Réparation informatique à Morteau", intro: "Dépannage de PC fixes et portables : diagnostic, remplacement de composants compatibles, réinstallation, nettoyage, transfert de données.",
    items: ["Diagnostic matériel et logiciel","Problèmes de démarrage","Remplacement SSD, RAM, alimentation, ventilateurs","Nettoyage et entretien","Optimisation et réinstallation de Windows","Pilotes, logiciels, périphériques","Transfert et sauvegarde de données","Diagnostic réseau domestique"],
    limits: ["Aucune récupération de données n'est garantie sans diagnostic.","Les réparations de carte mère par microsoudure ne sont pas proposées."] },
  "pc-sur-mesure": { title: "Montage de PC sur mesure à Morteau", intro: "PC gaming, bureautique, polyvalent ou pour logiciels professionnels : conseil, vérification de compatibilité, montage, câblage, BIOS, tests.",
    items: ["Conseil dans le choix des composants","Montage complet et câblage","Mise à niveau d'un PC existant","Configuration du BIOS et installation de l'OS si prévue au devis","Tests de stabilité"],
    limits: ["Le prix des composants est distinct de la prestation de montage.","Aucun prix ni stock de composants n'est affiché ici.","Un acompte peut être demandé avant commande de pièces, après validation du devis."] },
  smartphone: { title: "Réparation smartphone à Morteau", intro: "Réparations selon le modèle et la disponibilité des pièces.",
    items: ["Diagnostic","Remplacement d'écran et de batterie","Problèmes de charge, connecteur lorsque réalisable","Conseils de sauvegarde"],
    limits: ["Qualité variable des pièces : origine, compatibles ou reconditionnées.","Certaines fonctions ou l'étanchéité peuvent être affectées après ouverture.","Pas de réparation garantie pour tous les modèles ; aucun contournement d'antivol ou de sécurité.","Batteries gonflées ou endommagées : précautions spécifiques."] },
} as const;
