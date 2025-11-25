import z from "zod";

export const formSchema = z.object({
  title: z.string().min(3, {message: "العنوان مطلوب"}),
  desc: z.string().min(1, {message: "وصف المهمة مطلوب"}),
  project: z.enum(["1", "2", '3'], {
    message: "الرجاء اختيار المشروع",
  }),
  department: z.enum(["قسم البرمجة", "قسم المحاسبة", "قسم الموارد البشرية"], {
    message: "الرجاء اختيار المشروع",
  }),
  empName: z.enum(['1', '2', '3'], {
    message: "الرجاء اختيار المسؤول",
  }),
  badge: z.enum(['3', '1', '2'], {
    message: "الرجاء اختيار المسؤول",
  }),
  startDate: z.date({message: 'قم باختيار تاريخ بدأ المهمة'}),
  startEnd: z.date({message: 'قم باختيار تاريخ انتهاء المهمة'}),
  status: z.enum(['قيد التنفيذ', 'معلقة', 'منتهية'], {
    message: 'قم باختيار حالة المهمة',
  }),
  file: z
      .any()
      .refine(
        (file) =>
          typeof window === "undefined" ||
          file instanceof FileList ||
          file instanceof File,
        "Invalid file",
      ),
});