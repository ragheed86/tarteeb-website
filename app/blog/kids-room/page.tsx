import ArticlePage from "../article-page"; import { getPost } from "../articles"; import { pageMetadata } from "../../lib/site-data";
const post=getPost("kids-room"); export const metadata=pageMetadata(`${post.title} | ترتيب`,post.excerpt,"/blog/kids-room"); export default function Page(){ return <ArticlePage post={post}/>; }
