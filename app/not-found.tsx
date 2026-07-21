import Link from "next/link";

export default function NotFound(){ return <main className="not-found"><p className="eyebrow">404</p><h1>هذه الصفحة غير موجودة</h1><p>قد يكون الرابط قديمًا أو كُتب بطريقة غير صحيحة.</p><div className="actions"><Link className="button" href="/">العودة للرئيسية</Link><a className="text-button" href="/request-quote">طلب عرض سعر</a></div></main>; }
