"use client";import {useState,FormEvent} from "react";import {site} from "@/config/site";
type S="idle"|"loading"|"error"|"ok";
export default function C(){const [st,setSt]=useState<S>("idle");const [msg,setMsg]=useState("");
async function go(e:FormEvent<HTMLFormElement>){e.preventDefault();if(st==="loading")return;const f=e.currentTarget;
if(!f.checkValidity()){f.reportValidity();setSt("error");setMsg("Merci de compléter les champs obligatoires.");return;}
if(!site.formEndpoint){setSt("error");setMsg("L'envoi n'est pas encore connecté : votre demande n'a PAS été transmise.");return;}
setSt("loading");try{const r=await fetch(site.formEndpoint,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Object.fromEntries(new FormData(f)))});
if(!r.ok)throw 0;setSt("ok");setMsg("Demande envoyée.");}catch{setSt("error");setMsg("Échec de l'envoi, merci de réessayer.");}}
const i="mt-1 w-full rounded border border-ink/30 p-2";
return(<div className="space-y-4"><h1 className="text-3xl font-bold">Demande de devis</h1><p>Les informations saisies servent uniquement à répondre à votre demande (voir la <a className="underline" href="/legal/confidentialite">politique de confidentialité</a>). Ne communiquez jamais de mot de passe ni de code de déverrouillage.</p>
<form onSubmit={go} noValidate className="grid max-w-xl gap-3">
<label>Nom et prénom *<input name="nom" required className={i}/></label>
<label>E-mail *<input name="email" type="email" required className={i}/></label>
<label>Téléphone (facultatif)<input name="tel" type="tel" className={i}/></label>
<label>Commune *<input name="commune" required className={i}/></label>
<label>Type de demande *<select name="type" required className={i}><option value="">Choisir</option><option>Réparation informatique</option><option>PC sur mesure</option><option>Smartphone</option></select></label>
<label>Marque et modèle<input name="modele" className={i}/></label>
<label>Description de la panne *<textarea name="desc" required rows={4} className={i}/></label>
<label>Mode de prise en charge<select name="mode" className={i}>{Object.values(site.mode).filter(m=>m.enabled).map(m=><option key={m.label}>{m.label}</option>)}</select></label>
<label>Disponibilités souhaitées<input name="dispo" className={i}/></label>
<button className="btn" disabled={st==="loading"}>{st==="loading"?"Envoi…":"Envoyer ma demande"}</button>
<p role="status" aria-live="polite" className={st==="ok"?"text-green-700":"text-red-700"}>{msg}</p></form></div>);}
