import z from "zod";
import { zodSlugValidator } from "../../../backend/src/shared/validators/common-fields.validator";

export const lessonSlugParamsRequest = z.object({
  courseSlug: zodSlugValidator("courseSlug"),
  lessonSlug: zodSlugValidator("lessonSlug"),
});
