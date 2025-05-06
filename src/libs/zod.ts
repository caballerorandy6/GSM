import { z } from "zod";

export const UserSchema = z.object({
  firstName: z.string().min(2, "Name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is required"),
  message: z.string().optional(),
});

export type UserFormData = z.infer<typeof UserSchema>;
