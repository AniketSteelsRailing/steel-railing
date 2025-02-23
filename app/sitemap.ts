import { Metadata, MetadataRoute } from "next";

const baseUrl = process.env.BASE_URL;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    return[
        { url:`${baseUrl}` },
        { url:`${baseUrl}/imagemodel/gate` },
        { url:`${baseUrl}/imagemodel/railing` },
        { url:`${baseUrl}/imagemodel/window` },
        { url:`${baseUrl}/aboutus` },
        { url:`${baseUrl}/contact-us` },
        { url:`${baseUrl}/service-form` },
        { url:`${baseUrl}/railingproject` },
        { url:`${baseUrl}/ourservices` },
    ]
}
