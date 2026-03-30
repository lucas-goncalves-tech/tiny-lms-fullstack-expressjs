import z from "zod";
import { zodSafeEmail } from "../../../backend/src/shared/validators/email.validator";
import { zodPasswordValidator } from "../../../backend/src/shared/validators/common-fields.validator";

export const loginRequest = z.strictObject({
  email: zodSafeEmail(),
  password: zodPasswordValidator("Senha").trim(),
});

export type LoginRequest = z.infer<typeof loginRequest>;
