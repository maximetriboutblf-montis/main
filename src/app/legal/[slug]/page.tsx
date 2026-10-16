import {notFound} from "next/navigation";import {legal} from "@/config/legal";
export function generateStaticParams(){return Object.keys(legal).map(slug=>({slug}));}
export function generateMetadata({params}:{params:{slug:string}}){const d=legal[params.slug];return d?{title:d.title,robots:{index:false}}:{};}
export default function L({params}:{params:{slug:string}}){const d=legal[params.slug];if(!d)notFound();
return(<div className="space-y-5"><h1 className="text-3xl font-bold">{d.title}</h1>
<p className="rounded bg-amber-100 p-3 text-sm">Modèle : les mentions [À COMPLÉTER] / [À VÉRIFIER] doivent être traitées avant publication.</p>
{d.sections.map(([t,ps])=><section key={t} className="space-y-2"><h2 className="text-xl font-semibold">{t}</h2>{ps.map(x=><p key={x}>{x}</p>)}</section>)}</div>);}
