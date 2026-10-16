import Link from "next/link";
import { site } from "@/config/site";
const nav=[["/services/informatique","Informatique"],["/services/pc-sur-mesure","PC sur mesure"],["/services/smartphone","Smartphone"],["/tarifs","Tarifs"],["/faq","FAQ"],["/a-propos","À propos"]];
export function Header(){return(<header className="border-b border-ink/10"><div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 p-4">
<Link href="/" className="flex items-center gap-2 font-semibold"><svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true"><path d="M2 26 12 8l6 10 4-6 8 14z" fill="none" stroke="#2f6fb3" strokeWidth="2.5" strokeLinejoin="round"/><circle cx="12" cy="8" r="2.5" fill="#1c2128"/></svg>{site.name}</Link>
<nav aria-label="Principal" className="flex flex-wrap gap-4 text-sm">{nav.map(([h,l])=><Link key={h} href={h}>{l}</Link>)}<Link href="/contact" className="font-semibold text-steel">Demander un devis</Link></nav></div></header>);}
export function Footer(){return(<footer className="mt-16 bg-ink p-6 text-sm text-white/80"><div className="mx-auto max-w-5xl space-y-2"><p>{site.name} — {site.tagline}</p><p>{site.hours.join(" · ")}. Aucun magasin ouvert au public.</p>
<p className="flex gap-4">{[["mentions-legales","Mentions légales"],["confidentialite","Confidentialité"],["cgv","CGV"],["cookies","Cookies"]].map(([s,l])=><Link key={s} href={`/legal/${s}`}>{l}</Link>)}</p></div></footer>);}
