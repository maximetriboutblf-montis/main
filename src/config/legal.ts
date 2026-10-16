import { site } from "./site";
const c = (v: string) => v || "[À COMPLÉTER]";
const L = site.legal;
export const legal: Record<string, { title: string; sections: [string, string[]][] }> = {
"mentions-legales": { title: "Mentions légales", sections: [
 ["Éditeur du site", [`Nom commercial : ${site.name} (nom provisoire)`, `Éditeur / forme juridique : ${c(L.editor)} — ${c(L.status)}`, `SIRET : ${c(L.siret)}`, `Adresse professionnelle : ${c(site.address)}`, `Téléphone : ${c(site.phone)} · E-mail : ${c(site.email)}`]],
 ["Responsable de publication", [c(L.publisher)]],
 ["Hébergeur", [c(L.host)]],
 ["Médiateur de la consommation", [`${c(L.mediator)} (coordonnées et site à indiquer, obligatoire pour un professionnel vendant à des consommateurs)`]],
 ["Propriété intellectuelle", ["Les contenus du site (textes, logo, éléments graphiques) sont protégés. Toute reproduction sans autorisation est interdite."]],
]},
"confidentialite": { title: "Politique de confidentialité", sections: [
 ["Responsable du traitement", [`${c(L.editor)} — contact : ${c(site.email)}`]],
 ["Données collectées", ["Via le formulaire : nom, prénom, e-mail, téléphone (facultatif), commune, description de l'appareil et de la panne, disponibilités. Ne nous communiquez jamais de mot de passe ni de code de déverrouillage."]],
 ["Finalités et bases légales", ["Répondre à votre demande et établir un devis (mesures précontractuelles) ; gérer la relation client et la facturation (contrat, obligation légale)."]],
 ["Durées de conservation", ["[À VÉRIFIER] Demandes sans suite : durée limitée à définir (ex. quelques mois). Données de facturation : durées légales applicables."]],
 ["Destinataires et prestataires", ["Les données sont destinées à l'éditeur. Prestataires : hébergeur et service d'envoi du formulaire [À COMPLÉTER : nom, rôle, données transmises, pays]."]],
 ["Vos droits", ["Accès, rectification, effacement, opposition, limitation, portabilité : écrivez à l'adresse ci-dessus. Réclamation possible auprès de la CNIL (cnil.fr)."]],
 ["Sécurité", ["Connexion HTTPS, collecte limitée au nécessaire, aucune donnée sensible demandée via le site."]],
]},
"cgv": { title: "Conditions générales de vente et de prestation", sections: [
 ["1. Objet", [`Les présentes conditions régissent les prestations de ${site.name} : réparation et dépannage informatique, montage de PC sur mesure, réparation de smartphones.`]],
 ["2. Devis et accord", ["Un devis est établi après diagnostic. Aucune réparation n'est réalisée sans votre accord. Le diagnostic peut être facturé : son prix est annoncé avant sa réalisation. Les tarifs publiés sont indicatifs."]],
 ["3. Pièces et commandes", ["Les pièces sont facturées en sus si non incluses. Un acompte peut être demandé avant commande de pièces, après validation du devis [À VÉRIFIER : montant]. Des délais ou indisponibilités de pièces sont possibles ; vous en êtes informé."]],
 ["4. Paiement", ["[À COMPLÉTER : moyens et délais de paiement, pénalités le cas échéant.]"]],
 ["5. Garantie commerciale de 6 mois", [`Les prestations réalisées sont garanties ${site.warranty.months} mois à compter de la remise de l'appareil, pour le défaut lié à la prestation effectuée.`,
   "Sont exclus : casse ou dommage non liés à la prestation (chute, choc, écrasement), contact avec l'eau ou un liquide, oxydation, surtension, ouverture ou intervention par un tiers, usure normale, panne distincte de celle réparée, logiciels malveillants.",
   "Cette garantie s'ajoute aux garanties légales, qu'elle ne remplace pas : garantie légale de conformité et garantie des vices cachés pour les produits vendus [À VÉRIFIER avant publication]."]],
 ["6. Limites d'intervention", ["Aucune réparation ni récupération de données n'est garantie avant diagnostic. Nous vous conseillons de sauvegarder vos données avant remise. Une ouverture peut affecter l'étanchéité ou certaines fonctions d'un smartphone. Aucun contournement de verrouillage ou d'antivol n'est réalisé."]],
 ["7. Appareil non réparable ou non récupéré", ["Si l'appareil n'est pas réparable, ou si le devis est refusé, il vous est restitué ; le diagnostic éventuellement annoncé reste dû. [À VÉRIFIER : durée de conservation et conditions pour un appareil non récupéré.]"]],
 ["8. Rétractation", ["Pour un contrat conclu à distance ou hors établissement, vous disposez en principe de 14 jours pour vous rétracter. Si vous demandez que la prestation commence avant la fin de ce délai, vous réglez la part déjà exécutée ; une fois la prestation entièrement exécutée avec votre accord exprès, le droit de rétractation prend fin. [À VÉRIFIER : formulaire type et modalités]"]],
 ["9. Réclamations et médiation", [`Contact : ${c(site.email)}. Après réclamation écrite, vous pouvez saisir gratuitement le médiateur de la consommation : ${c(L.mediator)}.`]],
 ["10. Droit applicable", ["Droit français. Les droits des consommateurs ne sont pas limités par ces conditions."]],
]},
"cookies": { title: "Cookies et préférences", sections: [
 ["Utilisation actuelle", ["Ce site n'utilise aucun traceur de mesure d'audience ni de publicité : aucun consentement n'est donc nécessaire et aucune bannière n'est affichée."]],
 ["Évolution", ["Si un outil d'analyse est ajouté, un choix « accepter / refuser » aussi simple l'un que l'autre sera proposé, et la liste des services sera documentée ici."]],
]},
};
