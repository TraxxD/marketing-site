import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .max(20, 'Phone number is too long')
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .max(1000, 'Message is too long')
    .optional()
    .or(z.literal('')),
  // Honeypot field — must remain empty
  website: z.string().max(0).optional(),
})

export type ContactFormData = z.infer<typeof contactSchema>
