"use client";

import { useForm } from "react-hook-form";
import {
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./ui/sheet";

import { formSchema } from "@/validation/formSchema";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";
import { CalendarIcon } from "lucide-react";
import { Task } from "@/types/interfaces";
import { Textarea } from "./ui/textarea";
import DropzoneUpload from "./DropzoneLoad";
import { toast } from "react-toastify";

interface AddTaskProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddTask = ({ setTasks, setOpen }: AddTaskProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "", // ✅ قيمة افتراضية بدلاً من undefined
      desc: "",
      project: undefined,
      department: undefined,
      empName: undefined,
      priority: undefined,
      startDate: undefined,
      endDate: undefined,
      status: undefined,
      file: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", data);

    const newTask: Task = {
      id: Date.now(),
      title: data.title,
      desc: data.desc,
      department: data.department,
      startDate: data.startDate.toISOString().split("T")[0],
      endDate: data.endDate.toISOString().split("T")[0],
      empName: data.empName,
      links: 0,
      messages: 0,
      priority: data.priority,
      status: data.status,
      project: data.project,
      file: data.file,
    };

    // Example: add task to state
    setTasks((prev: Task[]) => [...prev, newTask]);

    form.reset();
    toast.success("تم إضافة المهمة بنجاح");
    setOpen(false);
  };
  return (
    <SheetContent className="overflow-y-auto text-[#182B49]">
      <SheetHeader>
        <SheetTitle className="mb-4 text-[32px]">إضافة مهمة</SheetTitle>
        <SheetDescription asChild>
          قم بإضافة مهمة جديدة بتعبئة الحقول التالية
        </SheetDescription>
      </SheetHeader>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="space-y-8 flex flex-col gap-1.5 p-4"
        >
          {/* title Field */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>العنوان</FormLabel>
                <FormControl>
                  <Input {...field} placeholder=" أدخل عنوان المهمة" />
                </FormControl>
                {/* <FormDescription>
                     
                    </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Desc Field */}
          <FormField
            control={form.control}
            name="desc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>وصف المهمة</FormLabel>
                <FormControl>
                  <Textarea
                    {...field}
                    placeholder="أدخل الوصف التفصيلي للمهمة"
                    className="h-[100px] resize-none overflow-y-auto"
                  ></Textarea>
                  {/* <Input
                        {...field}
                        placeholder="أدخل الوصف التفصيلي للمهمة"
                        className="h-10"
                      /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Row 1 For 2 Columns */}
          <div className="grid space-x-0 md:space-x-4 space-y-8 md:space-y-0 grid-cols-1 md:grid-cols-2 items-start">
            {/* Project Field */}
            <FormField
              control={form.control}
              name="project"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>المشروع</FormLabel>
                  <FormControl>
                    <Select
                      dir="rtl"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المشروع" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">المشروع الأول</SelectItem>
                        <SelectItem value="2">المشروع الثاني</SelectItem>
                        <SelectItem value="3">المشروع الثالث</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {/* <FormDescription>
                      Enter Order Status
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* department field */}
            <FormField
              control={form.control}
              name="department"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>القسم</FormLabel>
                  <FormControl>
                    <Select
                      dir="rtl"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر القسم" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="MARKETING">قسم التسويق</SelectItem>
                        <SelectItem value="DEVELOPMENT">قسم البرمجة</SelectItem>
                        <SelectItem value="RESOURCES">قسم الموارد</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 2 For 2 Columns  */}
          <div className="grid space-x-0 md:space-x-4 space-y-8 md:space-y-0 grid-cols-1 md:grid-cols-2 items-start">
            {/* EmpName field */}
            <FormField
              control={form.control}
              name="empName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>المسؤول</FormLabel>
                  <FormControl>
                    <Select
                      dir="rtl"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر المسؤول" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1"> محمد</SelectItem>
                        <SelectItem value="2"> سالم</SelectItem>
                        <SelectItem value="3"> نور</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* priority field */}
            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>الأولوية</FormLabel>
                  <FormControl>
                    <Select
                      dir="rtl"
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="اختر الأولوية" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1"> عالية</SelectItem>
                        <SelectItem value="2"> متوسطة</SelectItem>
                        <SelectItem value="3"> منخفضة</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  {/* <FormDescription>
                      Enter Order Status
                    </FormDescription> */}
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Row 3 For 2 Columns */}
          <div className="grid space-x-0 md:space-x-4 space-y-8 md:space-y-0 grid-cols-1 md:grid-cols-2 items-start">
            {/* Start Date Field */}
            <FormField
              control={form.control}
              name="startDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تاريخ البدأ</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="اختر تاريخاً"
                      type="date"
                      value={
                        field.value
                          ? field.value.toISOString().split("T")[0]
                          : ""
                      }
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* End Date Field */}
            <FormField
              control={form.control}
              name="endDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>تاريخ الإنتهاء </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="اختر تاريخاً"
                      type="date"
                      value={
                        field.value
                          ? field.value.toISOString().split("T")[0]
                          : ""
                      }
                      onChange={(e) => field.onChange(new Date(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Status Field */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>الحالة</FormLabel>
                <FormControl>
                  <Select
                    dir="rtl"
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="اختر الحالة" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="TODO"> للتنفيذ</SelectItem>
                      <SelectItem value="INPROGRESS"> قيد التنفيذ</SelectItem>
                      <SelectItem value="COMPLETE"> منتهية</SelectItem>
                      <SelectItem value="PENDING"> متوقفة</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Upload file Field */}
          <FormField
            control={form.control}
            name="file"
            render={({ field }) => (
              <FormItem>
                <FormLabel>المرفقات</FormLabel>

                <FormControl>
                  <DropzoneUpload onChange={field.onChange} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex justify-end gap-2 w-full">
            <Button
              type="button"
              className="cursor-pointer bg-white text-[#182b49] hover:bg-[#f1f5f9]"
              onClick={() => setOpen(false)}
            >
              إلغاء
            </Button>
            <Button
              type="submit"
              className="cursor-pointer bg-[#182b49] text-[#b59859] hover:bg-[#193055]"
            >
              إضافة المهمة
            </Button>
          </div>
        </form>
      </Form>
    </SheetContent>
  );
};

export default AddTask;
