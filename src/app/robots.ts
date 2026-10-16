import {site} from "@/config/site";
export default function r(){return{rules:{userAgent:"*",allow:"/"},...(site.url?{sitemap:site.url+"/sitemap.xml"}:{})};}
