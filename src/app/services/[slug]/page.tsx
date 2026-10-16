import Link from "next/link";import {notFound} from "next/navigation";import {Json} from "@/components/Json";import {site,services} from "@/config/site";
export function generateStaticParams(){return Object.keys(services).map(slug=>({slug}));}
export function generateMetadata({params}:{params:{slug:string}}){const s=(services as any)[params.slug];return s?{title:s.title,description:s.intro,...(site.url?{alternates:{canonical:`/services/${params.slug}`}}:{})}:{};}
export default function P({params}:{params:{slug:string}}){const s=(services as any)[params.slug];if(!s)notFound();
return(<article className="space-y-5"><Json data={{"@context":"https://schema.org","@type":"Service",name:s.title,description:s.intro,provider:{"@type":"Organization",name:site.name},areaServed:site.area}}/><h1 className="text-3xl font-bold">{s.title}</h1><p>{s.intro}</p>
<h2 className="text-xl font-semibold">Prestations</h2><ul className="list-disc pl-5">{s.items.map((i:string)=><li key={i}>{i}</li>)}</ul>
<h2 className="text-xl font-semibold">Limites</h2><ul className="list-disc pl-5">{s.limits.map((i:string)=><li key={i}>{i}</li>)}</ul>
<Link className="btn" href="/contact">Demander un devis</Link></article>);}
