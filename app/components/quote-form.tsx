"use client";

import { useState } from "react";
import { track } from "./analytics";
import { whatsappUrl } from "../lib/site-data";

export default function QuoteForm() {
  const [form, setForm] = useState({ name: "", phone: "", space: "تنظيم المنزل", count: "1", district: "", notes: "" });
  const set = (key: keyof typeof form, value: string) => setForm((current) => ({ ...current, [key]: value }));
  const submit = (event: React.FormEvent) => {
    event.preventDefault();
    const message = `مرحبًا، أرغب في طلب عرض سعر من ترتيب.\nالاسم: ${form.name}\nرقم الجوال: ${form.phone}\nنوع المساحة: ${form.space}\nعدد المساحات: ${form.count}\nالحي: ${form.district}\nوصف مختصر: ${form.notes || "—"}`;
    track("quote_form_submit", { space_type: form.space });
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };
  return <form className="quote-form" onSubmit={submit}>
    <div className="form-grid">
      <label>الاسم<input name="name" autoComplete="name" required value={form.name} onChange={(e) => set("name", e.target.value)} /></label>
      <label>رقم الجوال<input name="phone" type="tel" inputMode="tel" autoComplete="tel" required value={form.phone} onChange={(e) => set("phone", e.target.value)} /></label>
      <label>نوع المساحة<select name="space" value={form.space} onChange={(e) => set("space", e.target.value)}><option>تنظيم المنزل</option><option>غرفة الملابس</option><option>المطبخ</option><option>المستودع</option><option>غرفة الأطفال</option><option>بعد الانتقال</option><option>المكتب</option></select></label>
      <label>عدد المساحات<input name="count" type="number" min="1" max="30" required value={form.count} onChange={(e) => set("count", e.target.value)} /></label>
      <label>الحي<input name="district" autoComplete="address-level3" required value={form.district} onChange={(e) => set("district", e.target.value)} /></label>
      <label className="full-field">وصف مختصر<textarea name="notes" rows={4} value={form.notes} onChange={(e) => set("notes", e.target.value)} placeholder="ما أكثر ما يزعجك في المساحة؟" /></label>
    </div>
    <p className="form-note">الخدمة داخل الرياض. يعتمد السعر على حجم المساحة وكمية الأغراض، وتُحسب المنظمات منفصلة بعد موافقتك.</p>
    <button className="button" type="submit">إرسال الطلب عبر واتساب</button>
  </form>;
}
