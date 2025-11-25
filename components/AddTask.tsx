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
  FormDescription,
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

const AddTask = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });
  return (
    <SheetContent className="overflow-y-auto">
      <SheetHeader>
        <SheetTitle className="mb-4">إضافة مهمة</SheetTitle>
        <SheetDescription asChild>
          <Form {...form}>
            <form className="space-y-8">
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
                      <Input
                        {...field}
                        placeholder="أدخل الوصف التفصيلي للمهمة"
                        className="h-10"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Project Field */}
              <FormField
                control={form.control}
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المشروع</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="أدخل اسم المشروع" />
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
                name="project"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المشروع</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="أدخل اسم المشروع" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">المشروع الأول</SelectItem>
                          <SelectItem value="2">المشروع الثاني</SelectItem>
                          <SelectItem value="3">المشروع الثالث</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* EmpName field */}
              <FormField
                control={form.control}
                name="empName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>المسؤول</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="أدخل اسم المسؤول" />
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

              {/* badge field */}
              <FormField
                control={form.control}
                name="badge"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>الأولوية</FormLabel>
                    <FormControl>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="قم باختيار ألأولوية" />
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

              {/* Start Date Field */}
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ البدأ</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        value={
                          field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* End Date Field */}
              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تاريخ الإنتهاء </FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        value={
                          field.value
                            ? field.value.toISOString().split("T")[0]
                            : ""
                        }
                        onChange={(e) =>
                          field.onChange(new Date(e.target.value))
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit">إضافة المهمة</Button>
            </form>
          </Form>
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default AddTask;
