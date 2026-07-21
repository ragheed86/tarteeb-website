import type { Metadata } from "next";
import TarteeebSite from "./site";
import JsonLd from "./components/json-ld";
import { generalFaqs, site } from "./lib/site-data";

export const metadata: Metadata = { title: "ترتيب وتنظيم المنازل في الرياض | شركة ترتيب", description: "شركة ترتيب متخصصة في تنظيم المنازل والمكاتب بالرياض. ننظم المطابخ وغرف الملابس والمستودعات ونخلق نظامًا عمليًا يسهل المحافظة عليه ويرفع جودة الحياة.", alternates: { canonical: site.url } };

export default function Home() {
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:generalFaqs.slice(0,6).map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  return <><JsonLd data={faqSchema}/><TarteeebSite /></>;
}
