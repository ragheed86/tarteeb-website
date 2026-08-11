"use client";

import { useEffect, useState } from "react";
import { PiCoatHangerLight, PiDoorOpenLight, PiGridFourLight, PiUserCircleLight } from "react-icons/pi";
import { whatsappUrl } from "./lib/site-data";
import BeforeAfter from "./components/before-after";

type Lang = "ar" | "en";

const content = {
  ar: {
    langName: "English", menu: ["الأثر", "خدماتنا", "منهجنا", "قصص العميلات", "من نحن", "الأسئلة الشائعة"],
    hero: ["نظام يليق بحياتك، لا فوضى تُثقلها.", "ترتيب تحوّل مساحاتك إلى نظام هادئ ومتقن، يمنحك وقتك وطاقتك لما يستحقها فعلًا."],
    impact: ["أثرٌ تشعرين به في كل زاوية من بيتك.", "كل رقم هنا يعني بيتًا استعاد هدوءه، وامرأة استعادت وقتها."],
    stats: ["عميلة", "غرفة", "خزانة", "علاقة"],
    services: ["نصمم النظام حول إيقاع حياتك.", "كل مساحة في بيتك لها دور، ونحن نمنحها نظامًا يليق بهذا الدور."],
    serviceItems: [
      ["ترتيب وتنظيم المطابخ", "مساحة تُلهمك الطهي بدل أن تُرهقك."], ["ترتيب وتنظيم غرف الملابس", "كل قطعة في مكانها، وكل صباح أخف."],
      ["ترتيب وتنظيم المستودعات", "مخزون تعرفينه من نظرة، لا من بحث."], ["ترتيب وتنظيم غرف الأطفال", "نظام بسيط يكبر مع طفلك، ويشاركه بسهولة."],
      ["ترتيب وتنظيم المكاتب", "تركيز أوضح، حين تكون أدواتك في متناولك."], ["ترتيب وتنظيم المنزل بعد الانتقال", "بداية جديدة، بنظام جاهز من أول يوم."]
    ],
    method: ["من الفوضى إلى الراحة، بخطى واثقة.", "ست محطات مدروسة، تأخذك من الإرهاق إلى بيت يعمل لصالحك."],
    steps: [["نفهم روتينك", "نصغي إلى تفاصيل يومك قبل أن نلمس مساحتك."], ["نفرز ونصنف", "نُعيد قراءة كل قطعة بعين تعرف قيمتها."], ["نصمم النظام", "نبني هيكلًا يخدم احتياجاتك الفعلية."], ["نختار الأدوات", "بلا مبالغة، وبلا شراء قبل القياس."], ["ننظم وننفذ", "بأيدٍ مدرّبة، وخصوصية تامة."], ["نسلّم نظامًا مستدامًا", "يبقى مرتبًا معك، لا لأجلك فقط."]],
    stories: ["قبل وبعد… وحياة صارت أخف.", "اسحبي الخط، وشاهدي كيف يُعيد النظام تشكيل تفاصيل يومك."],
    storyItems: [["دلال الجعويني — غرفة الملابس", "كانت صباحاتها تبدأ بالبحث؛ اليوم تبدأ باختيار واثق."], ["مها العتيبي — المخزن", "لم تعد تشتري ما تملكه أصلًا؛ صار كل شيء في متناول نظرها."]],
    about: ["نرتب بيتك كما لو كان بيتنا.", "فريق سعودي مدرّب، يعمل بإشراف دقيق، واحترام تام لخصوصيتك — بلا أحكام، وبلا تصوير من دون إذنك.", "متابعة ما بعد التسليم", "نعود إليك بعد أسبوعين، لنتأكد أن النظام لا يزال يخدمك كما يجب."],
    blog: ["أفكار تصنع بيتًا يستمر مرتبًا.", "قصص حقيقية، وخطوات عملية، لبيت ينظم نفسه معك يومًا بعد يوم."],
    blogItems: ["من فوضى يومية إلى غرفة ملابس تخدم دلال", "خمس مناطق تجعل مطبخك أسهل كل يوم", "مخزن تعرفين محتواه من أول نظرة", "غرفة يرتبها طفلك بنفسه", "عشرون دقيقة تحافظ على ترتيب بيتك أسبوعيًا"],
    faqTitle: "الأسئلة الشائعة", faqs: [["كيف يُحدَّد سعر الخدمة؟", "بحسب مساحة المكان، وكمية المحتوى، والوقت المتوقع. نرسل لك نطاق السعر خلال 24 ساعة من مراجعة الصور."], ["هل أدوات التخزين مشمولة؟", "تُحسب بشكل منفصل عند الحاجة، ولا نشتري شيئًا قبل القياس وموافقتك."], ["هل تشمل الخدمة التنظيف؟", "خدمتنا تركّز على الفرز والتصميم والتنظيم، وليست خدمة تنظيف منزلي."], ["هل يلزم تواجدي؟", "حضورك مهم في القرارات الأولى، ويكمل فريقنا التنفيذ بعد الاتفاق معك."], ["كيف تحافظون على خصوصيتي؟", "نتعامل مع بيتك بسرية تامة، ولا نصور أو ننشر أي مساحة دون إذنك الصريح."], ["هل يمكن تدريب العاملة المنزلية على النظام؟", "بالتأكيد، نشرح لها كيفية الحفاظ على النظام ليبقى مرتبًا بعد التسليم."]],
    cta: ["ابدئي بخطوة واحدة بسيطة.", "احجزي استشارتك المجانية، ودعي بيتك يتحدث عن نفسه.", "احجزي استشارتك"],
    footer: ["أنظمة ترتيب متقنة، لمنازل ومكاتب الرياض.", "الرياض، المملكة العربية السعودية"], before: "قبل", after: "بعد"
  },
  en: {
    langName: "العربية", menu: ["Impact", "Services", "Our Method", "Client Stories", "About", "FAQ"],
    hero: ["A system worthy of your life, not chaos that weighs it down.", "Tarteeb transforms your spaces into calm, considered order — giving you back the time and energy for what truly matters."],
    impact: ["An impact you feel in every corner of your home.", "Every number here means a home that found its calm again, and a woman who reclaimed her time."],
    stats: ["Clients", "Rooms", "Closets", "Hangers"],
    services: ["We design order around the rhythm of your life.", "Every space in your home has a purpose — we give it a system worthy of that purpose."],
    serviceItems: [["Kitchen Organizing", "A space that inspires you to cook, instead of wearing you down."], ["Wardrobe Organizing", "Every piece in its place, and every morning a little lighter."], ["Storage Room Organizing", "Inventory you know at a glance, not after a search."], ["Kids' Room Organizing", "A simple system that grows with your child, and invites them in."], ["Office Organizing", "Sharper focus, when everything you need is within reach."], ["Post-Move Organizing", "A fresh start, with a system ready from day one."]],
    method: ["From chaos to calm, one confident step at a time.", "Six deliberate stages, carrying you from overwhelm to a home that works for you."],
    steps: [["We Understand Your Routine", "We listen to your daily details before we touch a single space."], ["We Sort & Categorize", "We revisit every item with an eye that knows its worth."], ["We Design the System", "We build a structure that serves your real needs."], ["We Select the Tools", "No excess, and nothing purchased before measuring."], ["We Organize & Execute", "By trained hands, with complete discretion."], ["We Deliver a Lasting System", "One that stays organized with you, not just for you."]],
    stories: ["Before and after… and a life made lighter.", "Drag the line, and watch how a new system reshapes the details of everyday life."],
    storyItems: [["Dalal Al-Juwaini — The Wardrobe", "Her mornings once began with searching; now they begin with confident choosing."], ["Maha Al-Otaibi — The Storage Room", "She no longer buys what she already owns — everything is now a glance away."]],
    about: ["We organize your home as if it were our own.", "A trained Saudi team, working under careful supervision, with complete respect for your privacy — no judgment, and no photography without your consent.", "Post-Delivery Follow-Up", "We return two weeks later, to make sure the system is still serving you as it should."],
    blog: ["Ideas that build a home that stays organized.", "Real stories and practical steps, for a home that organizes itself with you, day after day."],
    blogItems: ["From Daily Clutter to a Wardrobe That Serves Dalal", "Five Zones That Make Your Kitchen Easier Every Day", "A Storage Room You Know at a Glance", "A Room Your Child Can Organize Themselves", "Twenty Minutes That Keep Your Home Organized, Weekly"],
    faqTitle: "Frequently Asked Questions", faqs: [["How is the service price determined?", "By the size of the space, the volume of items, and the expected time. We send a price range within 24 hours of reviewing your photos."], ["Are storage tools included?", "They are calculated separately when needed — nothing is purchased before measuring and your approval."], ["Does the service include cleaning?", "Our service focuses on sorting, design, and organization — it is not a household cleaning service."], ["Do I need to be present?", "Your presence matters for the initial decisions; our team completes the execution once we agree on the essentials."], ["How do you protect my privacy?", "We handle your home with complete discretion and never photograph or share any space without your explicit consent."], ["Can you train household staff on the system?", "Absolutely — we show them how to maintain the system so it stays organized after delivery."]],
    cta: ["Begin with one simple step.", "Book your complimentary consultation, and let your home speak for itself.", "Book your consultation"],
    footer: ["Refined organizing systems, for the homes and offices of Riyadh.", "Riyadh, Saudi Arabia"], before: "Before", after: "After"
  }
} as const;

const images = [["/images/kitchen-before.webp", "/images/kitchen-organized.webp"], ["/images/closet-before.webp", "/images/closet-organized.webp"], ["/images/storage-before.webp", "/images/storage-organized.webp"], ["/images/storage-before.webp", "/images/playroom-organized.webp"], ["/images/closet-before.webp", "/images/office-organized.webp"], ["/images/storage-before.webp", "/images/storage-organized.webp"]];
const icons = [PiUserCircleLight, PiDoorOpenLight, PiGridFourLight, PiCoatHangerLight];
const values = [139, 230, 193, 7000];

function CountUp({ value }: { value: number }) { const [shown, setShown] = useState(0); useEffect(() => { const started = performance.now(); let id = 0; const tick = (now: number) => { const p = Math.min((now-started)/1200, 1); setShown(Math.round(value*(1-Math.pow(1-p,3)))); if (p<1) id=requestAnimationFrame(tick); }; id=requestAnimationFrame(tick); return () => cancelAnimationFrame(id); }, [value]); return <>{shown.toLocaleString("en-US")}</>; }

export default function TarteebSite() {
  const [lang, setLang] = useState<Lang>("ar"); const [menu, setMenu] = useState(false); const t = content[lang];
  useEffect(() => { document.documentElement.lang=lang; document.documentElement.dir=lang==="ar"?"rtl":"ltr"; }, [lang]);
  const ids = ["impact", "services", "method", "work", "about", "faq"];
  return <main className={`site-${lang}`}>
    <header><a className="official-logo" href="#top"><img src="/tarteeb-logo-official.png" alt="Tarteeb" width="240" height="96"/></a><button className="lang-toggle" onClick={() => setLang(lang==="ar"?"en":"ar")}>{t.langName}</button><button className="menu" aria-label="Menu" onClick={() => setMenu(!menu)}>☰</button><nav className={menu?"open":""}>{t.menu.map((label,i)=><a key={ids[i]} href={`#${ids[i]}`} onClick={()=>setMenu(false)}>{label}</a>)}</nav></header>
    <section id="top" className="luxury-hero"><div className="luxury-hero-copy"><p className="eyebrow">TARTEEB · ARRANGE &amp; ORGANIZE</p><h1>{t.hero[0]}</h1><p>{t.hero[1]}</p><a className="primary" href="#assessment">{t.cta[2]}</a></div><BeforeAfter before={images[0][0]} after={images[0][1]} label={t.serviceItems[0][0]} beforeText={t.before} afterText={t.after} priority/></section>
    <section id="impact" className="proof-counts"><div className="proof-copy"><h2>{t.impact[0]}</h2><p>{t.impact[1]}</p></div><div className="proof-grid">{values.map((value,i)=>{const Icon=icons[i];return <article className="proof-stat" key={t.stats[i]}><span className="proof-icon"><Icon/></span><strong><CountUp value={value}/></strong><span>{t.stats[i]}</span></article>})}</div></section>
    <section id="services" className="section services-section"><div className="section-head"><div><p className="eyebrow">{lang==="ar"?"خدماتنا":"OUR SERVICES"}</p><h2>{t.services[0]}</h2></div><p>{t.services[1]}</p></div><div className="service-grid">{t.serviceItems.map((item,i)=><article className="service" key={item[0]}><div className="service-media"><img src={images[i][1]} alt={item[0]} loading="lazy" width="1280" height="853"/></div><div><h3>{item[0]}</h3><p>{item[1]}</p></div></article>)}</div></section>
    <section id="method" className="method section"><div className="section-head"><div><p className="eyebrow">{lang==="ar"?"منهج ترتيب":"THE TARTEEB METHOD"}</p><h2>{t.method[0]}</h2></div><p>{t.method[1]}</p></div><div className="method-grid">{t.steps.map((step,i)=><article key={step[0]}><span>{String(i+1).padStart(2,"0")}</span><h3>{step[0]}</h3><p>{step[1]}</p></article>)}</div></section>
    <section id="work" className="section transformations"><div className="section-head"><div><h2>{t.stories[0]}</h2></div><p>{t.stories[1]}</p></div><div className="transform-grid two">{t.storyItems.map((story,i)=><article key={story[0]}><BeforeAfter before={images[i+1][0]} after={images[i+1][1]} label={story[0]} beforeText={t.before} afterText={t.after}/><h3>{story[0]}</h3><p>{story[1]}</p></article>)}</div></section>
    <section id="about" className="section about"><div className="about-motion"><img src="/images/kitchen-organized.webp" alt=""/><img src="/images/closet-organized.webp" alt=""/><img src="/images/storage-organized.webp" alt=""/></div><div className="about-copy"><h2>{t.about[0]}</h2><p>{t.about[1]}</p><div className="commitment"><strong>{t.about[2]}</strong><span>{t.about[3]}</span></div></div></section>
    <section id="blog" className="section blog-section"><div className="section-head"><div><h2>{t.blog[0]}</h2></div><p>{t.blog[1]}</p></div><div className="luxury-blog-grid">{t.blogItems.map((title,i)=><article key={title}><span>0{i+1}</span><h3>{title}</h3></article>)}</div></section>
    <section id="faq" className="section faq"><h2>{t.faqTitle}</h2><div>{t.faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><div className="faq-answer"><p>{a}</p></div></details>)}</div></section>
    <section id="assessment" className="section final-cta"><div><h2>{t.cta[0]}</h2><p>{t.cta[1]}</p></div><a href={whatsappUrl(lang==="ar"?"مرحبًا، أرغب في حجز استشارة مجانية مع ترتيب.":"Hello, I would like to book a complimentary consultation with Tarteeb.")} target="_blank" rel="noreferrer">{t.cta[2]}</a></section>
    <footer className="luxury-footer"><div><img src="/tarteeb-logo-official.png" alt="Tarteeb" width="240" height="96"/><p>{t.footer[0]}</p></div><p>{t.footer[1]}</p><p>© 2026 Tarteeb</p></footer>
  </main>;
}
