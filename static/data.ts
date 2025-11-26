import { Column, Task } from "@/types/interfaces";
import {
  LayoutDashboard,
  Briefcase,
  ListChecks,
  ChartNoAxesColumn,
  MessageSquare,
  Calendar,
  ClipboardCheck,
  Users,
  Building2,
  FolderTree,
  Bell,
  ShieldCheck,
  User,
  File,
  Settings,
  CircleAlert,
  Clock4,
  Check,
  Funnel,
} from "lucide-react";

export const MENU_ITEMS_1 = [
  {
    title: "موحة المعلومات",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "المشاريع",
    url: "/",
    icon: Briefcase,
  },
  {
    title: "المهام",
    url: "/",
    icon: ListChecks,
  },
  {
    title: "التقارير",
    url: "/",
    icon: ChartNoAxesColumn,
  },
  {
    title: "التفاعل الاجتماعي",
    url: "/",
    icon: MessageSquare,
  },
  {
    title: " المواعيد والتقويم",
    url: "/",
    icon: Calendar,
  },
  {
    title: "المهام الشخصية",
    url: "/",
    icon: ClipboardCheck,
  },
  {
    title: "الفريق",
    url: "/",
    icon: Users,
  },
];

export const MENU_ITEMS_2 = [
  {
    title: "الشركات",
    url: "/",
    icon: Building2,
  },
  {
    title: "الأقسام",
    url: "/",
    icon: FolderTree,
  },
  {
    title: "الأفرقة",
    url: "/",
    icon: Users,
  },
  {
    title: "التنبيهات",
    url: "/",
    icon: Bell,
  },
  {
    title: "الرسائل",
    url: "/",
    icon: MessageSquare,
  },
  {
    title: "المستخدمون",
    url: "/",
    icon: Users,
  },
  {
    title: "الصلاحيات و الأدوار",
    url: "/",
    icon: ShieldCheck,
  },
  {
    title: "الملف الشخصي",
    url: "/",
    icon: User,
  },
  {
    title: "صفحة Logs",
    url: "/",
    icon: File,
  },
  {
    title: "الإعدادات",
    url: "/",
    icon: Settings,
  },
];

export const INFO_CARDS = [
  {
    title: "للتنفيذ",
    icon: CircleAlert,
    color: "#2563EB",
    bg: "#DBEAFE",
    count: 1,
  },
  {
    title: "قيد التنفيذ",
    icon: Clock4,
    color: "#D97706",
    bg: "#FEF3C7",
    count: 1,
  },
  {
    title: "مكتملة",
    icon: Check,
    color: "#16A34A",
    bg: "#DCFCE7",
    count: 3,
  },
  {
    title: "متوقفة",
    icon: CircleAlert,
    color: "#DC2626",
    bg: "#FEE2E2",
    count: 5,
  },
];

export const FILTERS = [
  {
    title: "مهامي",
    icon: User,
  },
  {
    title: "القسم",
    icon: Funnel,
  },
  {
    title: "الأولوية",
    icon: Funnel,
  },
  {
    title: "الحالة",
    icon: Funnel,
  },
  {
    title: "المشروع",
    icon: Funnel,
  },
  {
    title: "المسؤول",
    icon: Funnel,
  },
];

export const TASKS: Task[] = [
  {
    id: 1,
    title: "إنشاء خطة التسويق",
    desc: "وضع استراتيجية تسويق للمنتج الجديد",
    department: 'MARKETING',
    startDate: "20/11/2025",
    endDate: "25/11/2025",
    links: 3,
    messages: 0,
    empName: '1',
    priority: '2',
    status: "TODO",
  },
  {
    id: 2,
    title: "الرئيسية",
    desc: " للتكامل مع……الواجهة الأمامية",
    department: 'DEVELOPMENT',
    startDate: "20/11/2025",
    endDate: "25/11/2025",
    links: 1,
    messages: 3,
    empName: '1',
    priority: '1',
    status: "INPROGRESS",
  },
  {
    id: 3,
    title: "تصميم الواجهة الرئيسية",
    desc: " للصفحة الرئيسية……",
    department: 'DEVELOPMENT',
    startDate: "20/11/2025",
    endDate: "25/11/2025",
    links: 2,
    messages: 5,
    empName: '3',
    priority: '1',
    status: "COMPLETE",
  },
  {
    id: 4,
    title: "إنشاء قاعدة البيانات",
    desc: "تصميم وتنفيذ قاعدة بيانات للمشروع",
    department: 'DEVELOPMENT',
    startDate: "20/11/2025",
    endDate: "25/11/2025",
    links: 0,
    messages: 2,
    empName: '2',
    priority: '2',
    status: "COMPLETE",
  },
  {
    id: 5,
    title: "تحديد متطلبات المستخدمين",
    desc: "تصميم وتنفيذ قاعدة بيانات للمشروع",
    department: 'DEVELOPMENT',
    startDate: "20/11/2025",
    endDate: "25/11/2025",
    links: 0,
    messages: 2,
    empName: '2',
    priority: '3',
    status: "COMPLETE",
  },
  {
    id: 6,
    title: "إعداد مواد التدريب",
    desc: "إعداد المستندات والعروض التقديمية للتدريب",
    department: 'RESOURCES',
    startDate: "20/11/2025",
    endDate: "25/11/2025",
    links: 5,
    messages: 2,
    empName: '1',
    priority: '1',
    status: "PENDING",
  },
  
];

export const COLUMNS: Column[] = [
  {
    colTitle: "للتنفيذ",
    id: "TODO",
    color: "#3B82F6",
  },
  {
    colTitle: "قيد التنفيذ",
    id: "INPROGRESS",
    color: "#F59E0B",
  },
  {
    colTitle: "مكتملة",
    id: "COMPLETE",
    color: "#22C55E",
  },
  {
    colTitle: "متوقفة",
    id: "PENDING",
    color: "#EF4444",
  },
];
