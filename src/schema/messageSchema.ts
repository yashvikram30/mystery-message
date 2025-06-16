import {z} from "zod";

export const messageSchema = z.object({
    message: z.string().min(10, {message: "Content must be of at least 10 characters"}).max(300, {message: "Content must be of at most 5000 characters"})
})