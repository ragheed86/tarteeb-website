import JsonLd from "./json-ld";
import { absolute } from "../lib/site-data";

export default function Breadcrumbs({ items }: { items: { name: string; href: string }[] }) {
  const all = [{ name: "الرئيسية", href: "/" }, ...items];
  return <><nav className="breadcrumbs" aria-label="مسار الصفحة"><ol>{all.map((item, i) => <li key={item.href}>{i < all.length - 1 ? <a href={item.href}>{item.name}</a> : <span aria-current="page">{item.name}</span>}</li>)}</ol></nav><JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: all.map((item, i) => ({ "@type": "ListItem", position: i + 1, name: item.name, item: absolute(item.href) })) }} /></>;
}
