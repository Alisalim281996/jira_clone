import z from 'zod'

export const signInZodValidation = z.object({
    email: z.string().trim().email(),
    password: z.string()
        .trim()
        .min(8, "Minimum 8 Characters")
        .max(64, "Maximam 64 characters")
        .regex(/[A-Z]/, "Must include at least one uppercase letter")
        .regex(/[a-z]/, "Must include at least one lowercase letter")
        .regex(/[0-9]/, "Must include at least one number")
        .regex(/[^A-Za-z0-9]/, "Must include at least one special characters")
})

export const signUpZodValidation = z.object({
    email: z.string().trim().email(),
    user_name: z.string().trim().min(5).max(36),
    password: z.string()
        .trim()
        .min(8, "Minimum 8 Characters")
        .max(64, "Maximam 64 characters")
        .regex(/[A-Z]/, "Must include at least one uppercase letter")
        .regex(/[a-z]/, "Must include at least one lowercase letter")
        .regex(/[0-9]/, "Must include at least one number")
        .regex(/[^A-Za-z0-9]/, "Must include at least one special characters")
})