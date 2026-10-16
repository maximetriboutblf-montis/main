import {site} from "@/config/site";
export default function s(){if(!site.url)return [];return["","/services/informatique","/services/pc-sur-mesure","/services/smartphone","/tarifs","/faq","/a-propos","/contact"].map(p=>({url:site.url+p}));}
