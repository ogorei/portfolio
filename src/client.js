import { SanityClient } from "@sanity/client";
import { ImageUrlBuilder } from "@sanity/image-url/lib/types/builder";

export const client = SanityClient({
    projectId:'',
    dataSet:'',
    apiVersion:'',
    useCdn:true,
    token:''
})