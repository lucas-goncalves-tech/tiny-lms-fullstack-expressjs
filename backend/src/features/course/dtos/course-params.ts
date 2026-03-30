import z from "zod";
import { zodSlugValidator } from "../../../backend/src/shared/validators/common-fields.validator";

export const courseSlugParamsRequest = z.object({
  courseSlug: zodSlugValidator("courseSlug"),
});
