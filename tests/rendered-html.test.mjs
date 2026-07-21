import assert from "node:assert/strict";
import test from "node:test";

const htmlRoutes = [
  "/", "/home-organizing-riyadh", "/wardrobe-organizing", "/kitchen-organizing",
  "/storage-room-organizing", "/kids-room-organizing", "/moving-organizing",
  "/office-organizing", "/projects", "/about", "/faq", "/request-quote", "/privacy",
  "/blog/closet-reset", "/blog/kids-room", "/blog/kitchen-zones", "/blog/storage-system", "/blog/weekly-reset",
];

async function request(path) {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${Math.random()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`https://tarteebandmore.com${path}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("all public HTML routes render with SEO essentials", async () => {
  for (const route of htmlRoutes) {
    const response = await request(route);
    assert.equal(response.status, 200, route);
    const html = await response.text();
    assert.match(html, /<html[^>]*lang="ar"[^>]*dir="rtl"/i, route);
    assert.match(html, /<title>[^<]+<\/title>/i, route);
    assert.match(html, /<meta[^>]+name="description"/i, route);
    assert.match(html, /<link[^>]+rel="canonical"/i, route);
    assert.equal((html.match(/<h1[\s>]/gi) ?? []).length, 1, `${route} must have one H1`);
  }
});

test("home page exposes local business and FAQ structured data", async () => {
  const html = await (await request("/")).text();
  assert.match(html, /ProfessionalService/);
  assert.match(html, /LocalBusiness/);
  assert.match(html, /FAQPage/);
  assert.match(html, /نحوّل الفوضى إلى نظام يناسب أسلوب حياتك/);
});

test("service page exposes Service, FAQ and breadcrumb data", async () => {
  const html = await (await request("/kitchen-organizing")).text();
  assert.match(html, /BreadcrumbList/);
  assert.match(html, /FAQPage/);
  assert.match(html, /\"@type\":\"Service\"/);
});

test("unknown routes return a real 404", async () => {
  const response = await request("/this-page-does-not-exist");
  assert.equal(response.status, 404);
  assert.match(await response.text(), /هذه الصفحة غير موجودة/);
});

test("robots and sitemap endpoints are generated", async () => {
  const robots = await request("/robots.txt");
  assert.equal(robots.status, 200);
  assert.match(await robots.text(), /Sitemap: https:\/\/tarteebandmore\.com\/sitemap\.xml/);
  const sitemap = await request("/sitemap.xml");
  assert.equal(sitemap.status, 200);
  const xml = await sitemap.text();
  assert.match(xml, /home-organizing-riyadh/);
  assert.match(xml, /request-quote/);
});
