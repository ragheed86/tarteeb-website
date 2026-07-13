"use client";

import { useEffect, useMemo, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { PiCoatHangerLight, PiDoorOpenLight, PiGridFourLight, PiUserCircleLight } from "react-icons/pi";

const services = [
  ["المطابخ", "مناطق واضحة للتحضير والمخزون.", "/images/kitchen-before.jpg", "/images/kitchen-organized.jpg"],
  ["غرف الملابس", "اختيار أسرع وترتيب أسهل.", "/images/closet-before.jpg", "/images/closet-organized.jpg"],
  ["المستودعات", "مساحة مستغلة ومخزون معروف.", "/images/storage-before.jpg", "/images/storage-organized.jpg"],
  ["غرف الأطفال", "نظام بسيط يستطيع الطفل استخدامه.", "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=85", "/images/playroom-organized.jpg"],
  ["المكاتب", "أدوات وملفات في متناولك.", "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85", "/images/office-organized.jpg"],
  ["الانتقال", "منزل جديد مرتب من اليوم الأول.", "/images/storage-before.jpg", "/images/storage-organized.jpg"],
];

const steps = [
  ["01", "نفهم روتينك", "نتعرف على استخدامك للمساحة واحتياجات أفراد المنزل."],
  ["02", "نفرز ونصنف", "نقسم المحتويات إلى مجموعات واضحة حسب الاستخدام."],
  ["03", "نصمم النظام", "نحدد التوزيع الأنسب ومكانًا منطقيًا لكل فئة."],
  ["04", "نختار الأدوات", "نقيس أولًا ثم نختار المنظمات المناسبة بعد موافقتك."],
  ["05", "ننظم وننفذ", "نطبق النظام بصورة عملية وجمالية مع إشراف كامل."],
  ["06", "نسلّم نظامًا مستدامًا", "نشرح النظام لك أو للعاملة للمحافظة عليه يوميًا."],
];

const stats = [
  { Icon: PiUserCircleLight, value: 139, label: "عميل" },
  { Icon: PiDoorOpenLight, value: 230, label: "غرفة" },
  { Icon: PiGridFourLight, value: 193, label: "خزانة" },
  { Icon: PiCoatHangerLight, value: 7000, label: "علاقة" },
];

function CountUp({value}:{value:number}){
  const [shown,setShown]=useState(0);
  useEffect(()=>{let start=0;const duration=1400;const began=performance.now();const tick=(now:number)=>{const p=Math.min((now-began)/duration,1);setShown(Math.round(value*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(tick)};const id=requestAnimationFrame(tick);return()=>cancelAnimationFrame(id)},[value]);
  return <>{shown.toLocaleString("en-US")}</>;
}

function MethodExperience(){
  const [active,setActive]=useState(0);
  useEffect(()=>{const timer=setInterval(()=>setActive(v=>(v+1)%steps.length),4500);return()=>clearInterval(timer)},[]);
  return <div className="method-experience"><div className="method-nav" role="tablist" aria-label="مراحل منهج ترتيب">{steps.map(([n,t],i)=><button key={n} role="tab" aria-selected={active===i} onClick={()=>setActive(i)}><span>{n}</span><b>{t}</b></button>)}</div><div className="method-focus" role="tabpanel"><span className="method-number">{steps[active][0]}</span><p>المرحلة الحالية</p><h3>{steps[active][1]}</h3><div className="method-line"><i key={active}/></div><p className="method-copy">{steps[active][2]}</p><button className="method-next" onClick={()=>setActive((active+1)%steps.length)}>المرحلة التالية <ChevronLeft size={17}/></button></div></div>
}

const faqs = [
  ["كيف يتم تحديد سعر الخدمة؟", "بحسب حجم المساحة وكمية الأغراض والمدة المتوقعة وحجم الفريق. بعد مراجعة الصور، نرسل لك نطاق سعر واضحًا خلال 24 ساعة."],
  ["هل أدوات التخزين مشمولة؟", "تُحتسب بصورة مستقلة عند الحاجة، ولا يتم شراء أي منظمات قبل القياس والحصول على موافقتك."],
  ["هل تشمل الخدمة التنظيف؟", "الخدمة متخصصة في الفرز والتصنيف وتصميم أنظمة التنظيم، وليست خدمة تنظيف منزلي تقليدية."],
  ["هل يجب أن أكون موجودة؟", "وجودك مهم في قرارات الفرز الأولى، ويمكن للفريق متابعة التنفيذ بعد الاتفاق على القرارات الأساسية."],
  ["كيف تحافظون على الخصوصية؟", "نتعامل مع ممتلكاتك بسرية واحترام، ولا نصور أو ننشر أي مساحة دون موافقة صريحة."],
  ["هل يمكن تدريب العاملة المنزلية؟", "نعم، نشرح لها طريقة النظام وإعادة الأغراض إلى أماكنها ليبقى سهلًا بعد التسليم."],
];

function BeforeAfter({before, after, label, priority=false}:{before:string;after:string;label:string;priority?:boolean}) {
  const [split, setSplit] = useState(52);
  const move=(element:HTMLDivElement,clientX:number)=>{const rect=element.getBoundingClientRect();setSplit(Math.max(10,Math.min(90,((clientX-rect.left)/rect.width)*100)))};
  return <div className="compare" style={{"--split": `${split}%`} as React.CSSProperties}
    onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);move(e.currentTarget,e.clientX)}}
    onPointerMove={e=>{if(e.currentTarget.hasPointerCapture(e.pointerId))move(e.currentTarget,e.clientX)}}>
    <img className="after" src={after} alt={`${label} بعد التنظيم`} loading={priority?"eager":"lazy"} fetchPriority={priority?"high":"auto"} />
    <div className="before"><img src={before} alt={`${label} قبل التنظيم`} loading={priority?"eager":"lazy"} fetchPriority={priority?"high":"auto"} /></div>
    <span className="tag before-tag">قبل</span><span className="tag after-tag">بعد</span>
    <input aria-label="حرّكي للمقارنة بين قبل وبعد" type="range" min="10" max="90" value={split} onInput={e=>setSplit(+(e.currentTarget.value))} onChange={e=>setSplit(+e.currentTarget.value)} />
  </div>;
}

function ServiceCard({name,description,before,after}:{name:string;description:string;before:string;after:string}){
  const [showAfter,setShowAfter]=useState(false);
  return <article className={`service ${showAfter?"is-after":""}`} tabIndex={0} onClick={()=>setShowAfter(!showAfter)} onKeyDown={e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();setShowAfter(!showAfter)}}} aria-label={`${name}: اضغطي للتبديل بين قبل وبعد`}><div className="service-media"><img className="service-before" src={before} alt={`${name} قبل التنظيم`} loading="lazy"/><img className="service-after" src={after} alt={`${name} بعد التنظيم`} loading="lazy"/><span className="service-state before-state">قبل</span><span className="service-state after-state">بعد</span><button type="button" className="service-toggle" onClick={e=>{e.stopPropagation();setShowAfter(!showAfter)}}>{showAfter?"شاهدي قبل":"شاهدي بعد"}</button></div><div><h3>{name}</h3><p>{description}</p><a href="#assessment" onClick={e=>e.stopPropagation()}>اطلبي تقييمها ←</a></div></article>
}

function Quiz() {
  const [choice, setChoice] = useState("");
  const result = useMemo(() => choice ? ({"المطبخ":"تنظيم المطبخ","الملابس":"ترتيب غرفة الملابس","التخزين":"تنظيم المستودع","متعددة":"تنظيم المنزل بالكامل"} as Record<string,string>)[choice] : "", [choice]);
  return <div className="quiz-card">
    <p className="eyebrow">اختبار من دقيقة واحدة</p><h3>ما المساحة الأكثر حاجة للترتيب في منزلك؟</h3>
    <div className="quiz-options">{[["المطبخ","المطبخ"],["الملابس","غرفة الملابس"],["التخزين","المستودع"],["متعددة","عدة مساحات"]].map(([v,l])=><button key={v} onClick={()=>setChoice(v)} className={choice===v?"selected":""}>{l}</button>)}</div>
    {result && <div className="quiz-result"><span>توصيتنا لك</span><strong>{result}</strong><a href={`https://wa.me/?text=${encodeURIComponent(`مرحبًا، نتيجتي في اختبار ترتيب هي: ${result}. أرغب في تقييم هذه المساحة.`)}`} target="_blank">أرسلي النتيجة عبر واتساب</a></div>}
  </div>;
}

function Assessment() {
  const [step,setStep]=useState(1); const [done,setDone]=useState(false);
  const [form,setForm]=useState({name:"",phone:"",area:"",space:"المطبخ",goal:"إنشاء نظام سهل الاستمرار",notes:""});
  const set=(k:string,v:string)=>setForm({...form,[k]:v});
  const msg=`مرحبًا، أرغب في طلب تقييم لمساحتي من شركة ترتيب.%0Aالاسم: ${form.name}%0Aنوع المساحة: ${form.space}%0Aالحي: ${form.area}%0Aالهدف: ${form.goal}%0Aالملاحظات: ${form.notes}%0Aسأرسل الصور أو الفيديوهات للمساحة عبر المحادثة.`;
  if(done) return <div className="assessment success"><span>✓</span><h3>طلبك جاهز للمراجعة</h3><p>راجعي الملخص، ثم افتحي واتساب عندما تكونين مستعدة. لن تُرسل أي بيانات تلقائيًا.</p><dl><dt>الاسم</dt><dd>{form.name||"—"}</dd><dt>المساحة</dt><dd>{form.space}</dd><dt>الهدف</dt><dd>{form.goal}</dd></dl><div className="form-actions"><button onClick={()=>setDone(false)}>تعديل المعلومات</button><a className="primary" href={`https://wa.me/?text=${msg}`} target="_blank">فتح رسالة واتساب</a></div></div>;
  return <div className="assessment"><div className="progress"><span style={{width:`${step*25}%`}} /></div><p className="eyebrow">الخطوة {step} من 4</p>
    {step===1&&<><h3>معلومات التواصل</h3><div className="fields"><label>الاسم<input value={form.name} onChange={e=>set("name",e.target.value)} /></label><label>رقم الجوال<input inputMode="tel" value={form.phone} onChange={e=>set("phone",e.target.value)} /></label><label>الحي<input value={form.area} onChange={e=>set("area",e.target.value)} /></label></div></>}
    {step===2&&<><h3>معلومات المساحة</h3><div className="fields"><label>نوع المساحة<select value={form.space} onChange={e=>set("space",e.target.value)}><option>المطبخ</option><option>غرفة الملابس</option><option>المستودع</option><option>المنزل بالكامل</option><option>مكتب</option></select></label><label>حالة المكان<select><option>مستخدم حاليًا</option><option>منزل جديد</option><option>قبل الانتقال</option><option>بعد الانتقال</option></select></label></div></>}
    {step===3&&<><h3>ما الهدف الأهم؟</h3><div className="choice-grid">{["التخلص من الفوضى","استغلال أفضل للمساحة","الاستعداد للانتقال","إنشاء نظام سهل الاستمرار"].map(x=><button className={form.goal===x?"selected":""} onClick={()=>set("goal",x)} key={x}>{x}</button>)}</div></>}
    {step===4&&<><h3>الصور والملاحظات</h3><label className="upload">إضافة صور أو فيديو<input type="file" multiple accept="image/*,video/*" /></label><label>ملاحظات<textarea value={form.notes} onChange={e=>set("notes",e.target.value)} /></label></>}
    <div className="form-actions">{step>1&&<button onClick={()=>setStep(step-1)}>السابق</button>}<button className="primary" onClick={()=>step<4?setStep(step+1):setDone(true)}>{step<4?"التالي":"مراجعة الطلب"}</button></div>
  </div>;
}

export default function TarteeebSite(){
  const [menu,setMenu]=useState(false);
  return <main>
    <header><a className="official-logo" href="#top" aria-label="ترتيب Arrange and Organize"><img src="/tarteeb-logo-official.png" alt="شعار ترتيب الرسمي"/></a><button className="menu" aria-label="فتح القائمة" onClick={()=>setMenu(!menu)}>☰</button><nav className={menu?"open":""}>{[["قبل وبعد","top"],["خدماتنا","services"],["منهج ترتيب","method"],["من نحن","about"],["الأسئلة الشائعة","faq"]].map(([l,id])=><a key={id} href={`#${id}`} onClick={()=>setMenu(false)}>{l}</a>)}</nav></header>
    <section id="top" className="comparison-hero"><BeforeAfter priority label="المطبخ" before="/images/kitchen-before.jpg" after="/images/kitchen-organized.jpg"/></section>
    <section className="brand-intro"><p>ترتيب تحوّل مساحاتك المزدحمة إلى أنظمة عملية وجميلة، مصممة لتناسب حياتك وتستمر معك.</p></section>
    <section className="proof-counts" aria-label="أرقام ترتيب">{stats.map(({Icon,value,label})=><div key={label}><Icon aria-hidden="true"/><strong><CountUp value={value}/></strong><span>{label}</span></div>)}</section>
    <section id="services" className="section services-section"><div className="section-head"><div><p className="eyebrow">خدماتنا</p><h2>نرتب المساحة حول حياتك.</h2></div><p>مرّري المؤشر أو اضغطي على الصورة لرؤية النتيجة.</p></div><div className="service-grid">{services.map(([n,d,before,after])=><ServiceCard key={n} name={n} description={d} before={before} after={after}/>)}</div></section>
    <section id="method" className="method section"><div className="section-head"><div><p className="eyebrow">منهج ترتيب</p><h2>ست خطوات. نظام واحد يستمر.</h2></div><p>اختاري أي مرحلة لاستكشافها.</p></div><MethodExperience/></section>
    <section id="work" className="section transformations"><div className="section-head"><div><p className="eyebrow">تحولات أخرى</p><h2>قبل وبعد.</h2></div><p>اسحبي الخط داخل الصورة.</p></div><div className="transform-grid two"><article><h3>غرفة الملابس</h3><BeforeAfter label="غرفة الملابس" before="/images/closet-before.jpg" after="/images/closet-organized.jpg"/></article><article><h3>المخزن</h3><BeforeAfter label="المخزن" before="/images/storage-before.jpg" after="/images/storage-organized.jpg"/></article></div></section>
    <section id="about" className="section about"><div><p className="eyebrow">عن ترتيب</p><h2>نرتب باحترام وخصوصية.</h2></div><div><p>فريق سعودي مدرّب يعمل بإشراف واضح، دون أحكام أو تصوير بلا موافقة.</p><div className="commitment"><strong>متابعة بعد التسليم</strong><span>نعود إليك بعد أسبوعين للتأكد من سهولة النظام.</span></div></div></section>
    <section id="faq" className="section faq"><p className="eyebrow">قبل أن تبدئي</p><h2>أسئلة شائعة</h2><div>{faqs.map(([q,a])=><details key={q}><summary>{q}<span>+</span></summary><div className="faq-answer"><p>{a}</p></div></details>)}</div></section>
    <section id="assessment" className="section assess-wrap"><div className="assessment-copy"><p className="eyebrow">طلب تقييم المساحة</p><h2>ابدئي بخطوات بسيطة</h2><p>أخبرينا عن المساحة وهدفك، ثم راجعي الملخص وافتحي رسالة واتساب الجاهزة.</p></div><Assessment /></section>
    <section className="final-cta"><p className="eyebrow">خطوتك الأولى</p><h2>جاهزة لمساحة أسهل وأكثر راحة؟</h2><p>أرسلي صورًا أو فيديو للمساحة، وسيقوم فريق ترتيب بمراجعتها واقتراح نطاق العمل المناسب.</p><a href="https://wa.me/?text=مرحبًا،%20أرغب%20في%20تقييم%20مساحتي" target="_blank">أرسلي الصور عبر واتساب</a></section>
    <footer><div className="footer-brand"><a className="official-logo footer-official" href="#top" aria-label="ترتيب"><img src="/tarteeb-logo-official.png" alt="شعار ترتيب الرسمي"/></a><p>أنظمة تنظيم عملية للمنازل والمكاتب في الرياض.</p></div><div><h3>استكشفي</h3><a href="#services">الخدمات</a><a href="#work">قبل وبعد</a><a href="#method">منهج ترتيب</a></div><div><h3>تواصلي</h3><a href="https://wa.me/?text=مرحبًا،%20أرغب%20في%20تقييم%20مساحتي" target="_blank">واتساب</a><a href="#assessment">نموذج التقييم</a><span>الرياض، المملكة العربية السعودية</span></div><p className="copyright">© 2026 ترتيب. جميع الحقوق محفوظة.</p></footer>
    <a className="whatsapp" href="https://wa.me/?text=مرحبًا،%20أرغب%20في%20تقييم%20مساحتي" target="_blank" aria-label="أرسلي صور المساحة عبر واتساب"><span>و</span></a>
  </main>
}
