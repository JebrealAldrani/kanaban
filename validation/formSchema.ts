import {z} from "zod";

export const formSchema = z.object({
  title: z.string().min(3, { error: "العنوان مطلوب" }),
  desc: z.string().min(1, { error: "وصف المهمة مطلوب" }),
  project: z.enum(["1", "2", "3"]).optional(),
  department: z.enum(["MARKETING", "DEVELOPMENT", "RESOURCES"], {
    error: "الرجاء اختيار القسم",
  }),
  empName: z.enum(["1", "2", "3"], { error: "الرجاء اختيار المسؤول" }),
  priority: z.enum(["1", "2", "3"], { error: "الرجاء اختيار الأولوية" }),
  startDate: z.date({ error: "قم باختيار تاريخ بدأ المهمة" }),
  endDate: z.date({ error: "قم باختيار تاريخ انتهاء المهمة" }),
  status: z.enum(["TODO", "INPROGRESS", "COMPLETE", "PENDING"], {
    message: "قم باختيار حالة المهمة",
  }),
  file: z
  .string({ error: "الملف مطلوب" })
  .optional() // optional if the field is not always required
});
