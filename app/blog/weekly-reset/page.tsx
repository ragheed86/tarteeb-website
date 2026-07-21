import ArticlePage from "../article-page"; import { getPost } from "../articles"; import { pageMetadata } from "../../lib/site-data";
const post=getPost("weekly-reset"); export const metadata=pageMetadata(`${post.title} | ترتيب`,post.excerpt,"/blog/weekly-reset"); export default function Page(){ return <ArticlePage post={post}/>; }
