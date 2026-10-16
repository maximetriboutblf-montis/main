import {ImageResponse} from "next/og";export const size={width:180,height:180};export const contentType="image/png";export const alt="Montis Tech";
export default function I(){return new ImageResponse(<div style={{width:"100%",height:"100%",background:"#1c2128",display:"flex",alignItems:"center",justifyContent:"center",color:"#6aa5e0",fontSize:90,fontWeight:700}}>MT</div>,size);}
