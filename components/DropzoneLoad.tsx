"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";
import Image from "next/image";

interface DropzoneUploadProps {
  onChange: (file: string) => void; // <-- THIS is correct
}

export default function DropzoneUpload({ onChange }: DropzoneUploadProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {

      const file = acceptedFiles[0];
      if (!file) {
        setPickedImage(null);
        return;
      }

      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        setPickedImage(fileReader.result as string);
        onChange(fileReader.result as string);
      };
      
    },
    [onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "image/*": [],
      "application/pdf": [],
      "application/msword": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.ms-excel": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  });

  return (
    <div
      {...getRootProps()}
      className="w-[336px] h-[200px] relative border-2 border-dashed border-[#d0d7e3] rounded-xl p-10 text-center cursor-pointer bg-[#f9fbfd] hover:bg-[#f1f5f9] transition"
      dir="rtl"
    >
      <input {...getInputProps()} />

      {!pickedImage && (
        <div className="flex flex-col items-center justify-center gap-3">
          <Upload className="w-10 h-10 text-[#77839a]" />

          <p className="text-[#1a2a42] text-sm">
            {isDragActive
              ? "اترك الملف هنا..."
              : "انقر لتحميل الملفات أو اسحبها وأفلِتها هنا"}
          </p>

          <p className="text-[#77839a] text-xs">
            الملفات المسموحة: PDF, Word, Excel, JPG, PNG, GIF (الحد الأقصى: 10
            ميغابايت)
          </p>
        </div>
      )}

      {pickedImage && (
        <Image 
            src={pickedImage}
            fill
            alt="معاينة الملف"
            className="object-cover rounded-xl"
        />
      )}
    </div>
  );
}
