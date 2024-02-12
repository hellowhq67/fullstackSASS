import connectMongoDB from "@/database/db";
import { createUploadthing } from "uploadthing/server";
const f = createUploadthing()


export const ourFileRouter = {
    imageUploader: f({ image: { maxFileSize: "4MB" } })
        .onUploadComplete(async ({ metadata, file }) => {
           return (file.url)
            

        }),

}