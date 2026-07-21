import type { Service } from "../lib/site-data";
import { absolute, services, site, whatsappUrl } from "../lib/site-data";
import BeforeAfter from "./before-after";
import JsonLd from "./json-ld";

export default function ServicePage({ service }: { service: Service }) {
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:service.faqs.map(([q,a])=>({"@type":"Question",name:q,acceptedAnswer:{"@type":"Answer",text:a}}))};
  const serviceSchema={"@context":"https://schema.org","@type":"Service",name:service.name,description:service.description,url:absolute(`/${service.slug}`),areaServed:{"@type":"City",name:"Riyadh"},provider:{"@type":"ProfessionalService",name:site.name,url:site.url}};
  const breadcrumbSchema={"@context":"https://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,name:"الرئيسية",item:site.url},{"@type":"ListItem",position:2,name:service.shortName,item:absolute(`/${service.slug}`)}]};
  const related=services.filter((item)=>item.slug!==service.slug).slice(0,3);
  return <main className="article-page"><JsonLd data={[serviceSchema,faqSchema,breadcrumbSchema]}/>
    <header className="article-header"><a className="official-logo" href="/" aria-label="العودة إلى ترتيب"><img src="/tarteeb-logo-official.png" alt="شعار ترتيب" decoding="async" width="240" height="96"/></a><a href="/request-quote">طلب عرض سعر ←</a></header>
    <article><div className="article-hero"><div><p className="eyebrow">خدمة احترافية داخل الرياض</p><h1>{service.name}</h1><p>{service.description}</p></div><img src={service.after} alt={`${service.name} بعد التنظيم`} decoding="async" fetchPriority="high" width="1280" height="853"/></div>
    <div className="article-body"><p className="article-intro">{service.problem}</p><section><h2>نظام مصمم لاستخدامك اليومي</h2><p>{service.solution}</p></section><section><h2>الفوائد</h2><ul>{service.benefits.map((item)=><li key={item}>{item}</li>)}</ul></section><section><h2>خطوات التنفيذ</h2><ol>{service.steps.map((step)=><li key={step}>{step}</li>)}</ol></section><section><h2>قبل وبعد</h2><BeforeAfter before={service.before} after={service.after} label={service.shortName}/></section><section><h2>أسئلة شائعة عن الخدمة</h2>{service.faqs.map(([q,a])=><div key={q}><h3>{q}</h3><p>{a}</p></div>)}</section><section><h2>خدمات مرتبطة</h2><p>{related.map((item,index)=><span key={item.slug}><a className="text-link" href={`/${item.slug}`}>{item.name}</a>{index<related.length-1?" · ":""}</span>)}</p></section><aside><strong>أرسلي صور أو فيديو للمساحة للحصول على تقييم</strong><a href={whatsappUrl(`مرحبًا، أرغب في معرفة تفاصيل خدمة ${service.name}.`)} target="_blank" rel="noreferrer" data-event="whatsapp_click">تواصلي عبر واتساب</a></aside></div></article>
  </main>;
}
