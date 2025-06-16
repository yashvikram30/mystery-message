import {z} from "zod";

export const verifySchema = z.object({
    code: z.string().length(6, {message: "Verification code should be of 6 digits"})
})