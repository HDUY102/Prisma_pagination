import {z} from "zod";
const LoginSchema = z.object({
    password: z.string().min(3,"Requires password to be more than 3 characters").max(255),
    email: z.string().min(3,"Requires email to be more than 3 characters").max(255)
})
export default LoginSchema