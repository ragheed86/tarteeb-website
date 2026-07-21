import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ترتيب | تنظيم المنازل والمكاتب في الرياض",
  description: "نصنع أنظمة تنظيم عملية وجميلة تناسب روتينك وتستمر معك. خدمات ترتيب المنازل والمكاتب في الرياض.",
  keywords: ["ترتيب منازل بالرياض", "شركة تنظيم منازل بالرياض", "تنظيم المطابخ بالرياض", "ترتيب غرف الملابس بالرياض"],
  openGraph: { title: "ترتيب — مساحات أجمل، حياة أسهل", description: "نحوّل الفوضى إلى نظام يناسب حياتك", locale: "ar_SA", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}<footer><div className="footer-brand"><a className="official-logo footer-official" href="/#top" aria-label="ترتيب"><img src="/tarteeb-logo-official.png" alt="شعار ترتيب الرسمي" loading="lazy" decoding="async" width="240" height="96"/></a><p>أنظمة تنظيم عملية للمنازل والمكاتب في الرياض.</p></div><div><h3>استكشفي</h3><a href="/#services">الخدمات</a><a href="/#work">قبل وبعد</a><a href="/#method">منهج ترتيب</a><a href="/#blog">المدونة</a></div><div><h3>تواصلي</h3><a href="https://wa.me/?text=مرحبًا،%20أرغب%20في%20تقييم%20مساحتي" target="_blank" rel="noreferrer">واتساب</a><a href="/#assessment">نموذج التقييم</a><span>الرياض، المملكة العربية السعودية</span></div><p className="copyright">© 2026 ترتيب. جميع الحقوق محفوظة.</p></footer></body></html>;
}
