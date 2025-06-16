import { z } from "zod";

export const usernameValidation = z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(20, "Username can be maximum 20 characters")
    .regex(/^[a-zA-Z0-9_]+$/,"Username must not contain a special symbol")

export const signupSchema = z.object({
    username: usernameValidation,
    email: z.string().email({message: "Invalid email address"}),
    password: z.string().min(8 , {message: "Password must be at least 8 characters"}).max(50, {message: "Password can be at most 50 characters"})
})