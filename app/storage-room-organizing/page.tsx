import ServicePage from "../components/service-page"; import { pageMetadata, serviceBySlug } from "../lib/site-data";
const service = serviceBySlug["storage-room-organizing"]; export const metadata = pageMetadata(service.title, service.description, `/${service.slug}`); export default function Page(){ return <ServicePage service={service}/>; }
