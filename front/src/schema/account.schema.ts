import { z } from "zod";

export const schemaRegister = z.object({
    photoProfile: z.string().optional(),
    name: z.string().min(1, "Nome é obrigatorio"),
    email: z.string().min(1, "O email é obrigatoria").email("Email inválido"),
    password: z.string().min(1, "A senha é obrigatoria")
})

export const schemaLogin = z.object({
    email: z.string().min(1, "O email é obrigatorio").email("Email inválido"),
    password: z.string().min(1, "A senha é obrigatoria")
})