import { z } from "zod";
import { zodSafeEmail } from "../../../backend/src/shared/validators/email.validator";

export const updateEmailRequest = z.strictObject({
  email: zodSafeEmail(),
});

export type UpdateEmailRequest = z.infer<typeof updateEmailRequest>;
