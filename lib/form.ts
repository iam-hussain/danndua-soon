
import * as z from "zod";

export const formSchema = z.object({
    email: z.string({ message: "" }).email({ message: "" }),
    phone: z.string().optional(),
    comments: z.string().optional(),
    agree: z.boolean({ message: "" }),
  });
  

  export type FormSchemaType = z.infer<typeof formSchema>