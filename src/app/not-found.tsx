import Link from "next/link";export const metadata={title:"Page introuvable"};
export default function N(){return(<div className="space-y-4"><h1 className="text-3xl font-bold">Page introuvable</h1><p>Cette page n'existe pas.</p><Link className="btn" href="/">Retour à l'accueil</Link></div>);}
