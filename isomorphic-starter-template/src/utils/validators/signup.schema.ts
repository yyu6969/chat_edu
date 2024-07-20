import { z } from 'zod';
import { messages } from '@/config/messages';
import {
    validateEmail,
    validatePassword,
    validateConfirmPassword,
} from './common.rules';

// form zod validation schema
export const signUpSchema = z.object({
    username: z.string().min(1, { message: messages.firstNameRequired }),
    email: validateEmail,
    password: validatePassword,
    confirmPassword: validateConfirmPassword,
    // isAgreed: z.boolean(),
});

// generate form types from zod validation schema
export type SignUpSchema = z.infer<typeof signUpSchema>;