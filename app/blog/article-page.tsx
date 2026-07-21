import type { BlogPost } from "./articles";

export default function ArticlePage({ post }: { post: BlogPost }) {
  return <main className="article-page">
    <header className="article-header"><a className="official-logo" href="/" aria-label="العودة إلى ترتيب"><img src="/tarteeb-logo-official.png" alt="شعار ترتيب" decoding="async" width="240" height="96"/></a><a href="/#blog">العودة إلى المدونة ←</a></header>
    <article>
      <div className="article-hero"><div><p className="eyebrow">{post.category} · {post.readTime}</p><h1>{post.title}</h1><p>{post.excerpt}</p></div><img src={post.image} alt={post.title} decoding="async" fetchPriority="high" width="1280" height="853"/></div>
      <div className="article-body"><p className="article-intro">{post.intro}</p>{post.sections.map((section)=><section key={section.title}><h2>{section.title}</h2><p>{section.body}</p></section>)}<aside><strong>هل مساحتك تحتاج نظامًا يناسب روتينك؟</strong><a href="/#assessment">اطلبي تقييم المساحة</a></aside></div>
    </article>
  </main>;
}
