import ArticlePage from "../article-page"; import { getPost } from "../articles"; import { pageMetadata } from "../../lib/site-data";
const post=getPost("kitchen-zones"); export const metadata=pageMetadata(`${post.title} | ترتيب`,post.excerpt,"/blog/kitchen-zones"); export default function Page(){ return <ArticlePage post={post}/>; }
