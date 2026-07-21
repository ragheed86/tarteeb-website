import type { Metadata } from "next";
import "./globals.css";
import Analytics from "./components/analytics";
import JsonLd from "./components/json-ld";
import { absolute, services, site, whatsappUrl } from "./lib/site-data";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ترتيب وتنظيم المنازل في الرياض | شركة ترتيب", template: "%s" },
  description: "شركة ترتيب متخصصة في تنظيم المنازل والمكاتب بالرياض. ننظم المطابخ وغرف الملابس والمستودعات ونخلق نظامًا عمليًا يسهل المحافظة عليه ويرفع جودة الحياة.",
  keywords: ["ترتيب منازل بالرياض", "شركة تنظيم منازل بالرياض", "تنظيم المطابخ بالرياض", "ترتيب غرف الملابس بالرياض"],
  icons: { icon: "/favicon.svg" },
  alternates: { canonical: site.url },
  openGraph: { title: "ترتيب وتنظيم المنازل في الرياض | شركة ترتيب", description: "نحوّل الفوضى إلى نظام يناسب حياتك", url: site.url, siteName: site.name, locale: "ar_SA", type: "website", images: [{ url: "/og.png", width: 1200, height: 630, alt: "ترتيب وتنظيم المنازل في الرياض" }] },
  twitter: { card: "summary_large_image", title: "ترتيب وتنظيم المنازل في الرياض | شركة ترتيب", description: "نحوّل الفوضى إلى نظام يناسب حياتك", images: ["/og.png"] },
};

const businessSchema = { "@context": "https://schema.org", "@type": ["ProfessionalService", "LocalBusiness"], "@id": `${site.url}/#business`, name: site.name, alternateName: "Tarteeb", url: site.url, logo: absolute("/tarteeb-logo-official.png"), image: absolute("/og.png"), description: "خدمة احترافية لترتيب وتنظيم المنازل والمكاتب في الرياض وبناء أنظمة عملية سهلة الاستمرار.", areaServed: { "@type": "City", name: "Riyadh" }, address: { "@type": "PostalAddress", addressLocality: "Riyadh", addressCountry: "SA" }, contactPoint: { "@type": "ContactPoint", contactType: "customer service", url: whatsappUrl("مرحبًا، أرغب في التواصل مع ترتيب.") }, hasOfferCatalog: { "@type": "OfferCatalog", name: "خدمات ترتيب وتنظيم المساحات", itemListElement: services.map((service) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: service.name, url: absolute(`/${service.slug}`) } })) } };
const organizationSchema = { "@context": "https://schema.org", "@type": "Organization", "@id": `${site.url}/#organization`, name: site.name, url: site.url, logo: { "@type": "ImageObject", url: absolute("/tarteeb-logo-official.png"), width: 240, height: 96 } };
const websiteSchema = { "@context": "https://schema.org", "@type": "WebSite", "@id": `${site.url}/#website`, name: site.name, url: site.url, inLanguage: "ar-SA", publisher: { "@id": `${site.url}/#organization` } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}<footer><div className="footer-brand"><a className="official-logo footer-official" href="/#top" aria-label="ترتيب"><img src="/tarteeb-logo-official.png" alt="شعار ترتيب الرسمي" loading="lazy" decoding="async" width="240" height="96"/></a><p>أنظمة تنظيم عملية للمنازل والمكاتب في الرياض.</p></div><div><h3>استكشفي</h3><a href="/#services">الخدمات</a><a href="/#work">قبل وبعد</a><a href="/#method">منهج ترتيب</a><a href="/#blog">المدونة</a></div><div><h3>تواصلي</h3><a href="https://wa.me/?text=مرحبًا،%20أرغب%20في%20تقييم%20مساحتي" target="_blank" rel="noreferrer">واتساب</a><a href="/#assessment">نموذج التقييم</a><span>الرياض، المملكة العربية السعودية</span></div><p className="copyright">© 2026 ترتيب. جميع الحقوق محفوظة.</p></footer><Analytics/><JsonLd data={[businessSchema,organizationSchema,websiteSchema]}/></body></html>;
}
