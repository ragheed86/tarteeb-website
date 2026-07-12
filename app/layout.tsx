import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ترتيب | تنظيم المنازل والمكاتب في الرياض",
  description: "نصنع أنظمة تنظيم عملية وجميلة تناسب روتينك وتستمر معك. خدمات ترتيب المنازل والمكاتب في الرياض.",
  keywords: ["ترتيب منازل بالرياض", "شركة تنظيم منازل بالرياض", "تنظيم المطابخ بالرياض", "ترتيب غرف الملابس بالرياض"],
  openGraph: { title: "ترتيب — مساحات أجمل، حياة أسهل", description: "نحوّل الفوضى إلى نظام يناسب حياتك", locale: "ar_SA", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ar" dir="rtl"><body>{children}</body></html>;
}
