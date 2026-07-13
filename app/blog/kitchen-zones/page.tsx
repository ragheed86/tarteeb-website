import ArticlePage from "../article-page"; import { getPost } from "../articles";
export default function Page(){ return <ArticlePage post={getPost("kitchen-zones")}/>; }
