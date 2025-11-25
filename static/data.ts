
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
    count: 1
  },
  {
    title: "قيد التنفيذ",
    icon: Clock4,
    color: "#D97706",
    bg: "#FEF3C7",
    count: 1
  },
  {
    title: "مكتملة",
    icon: Check,
    color: "#16A34A",
    bg: "#DCFCE7",
    count: 3
  },
  {
    title: "متوقفة",
    icon: CircleAlert,
    color: "#DC2626",
    bg: "#FEE2E2",
    count: 5
  },
];

export const FILTERS = [
    {
        title: 'مهامي',
        icon: User
    },
    {
        title: 'القسم',
        icon: Funnel
    },
    {
        title: 'الأولوية',
        icon: Funnel
    },
    {
        title: 'الحالة',
        icon: Funnel
    },
    {
        title: 'المشروع',
        icon: Funnel
    },
    {
        title: 'المسؤول',
        icon: Funnel
    },
]

export const TASKS = [
  {
    colTitle: 'للتنفيذ',
    id: 'c1',
    color: '#3B82F6',
    tasks: [
      {
        id: 1,
        title: 'إنشاء خطة التسويق',
        desc: 'وضع استراتيجية تسويق للمنتج الجديد',
        department: 'حملة تسويقية للمنتج الجديد',
        date: '20/11/2025',
        links: 3,
        messages: 0,
        empName: 'نور محمد',
        badge: 'متوسط',
        ColId: 'c1',
      }
    ]
  },
{
    colTitle: 'قيد التنفيذ',
    id: 'c2',
    color: '#F59E0B',
    tasks: [
      {
        id: 2,
        title: 'الرئيسية',
        desc: ' للتكامل مع……الواجهة الأمامية',
        department: 'تطوير الموقع الإلكتروني',
        date: ' 20/11/2025',
        links: 1,
        messages: 3,
        empName: 'محمد علي',
        badge: 'عالية',
        ColId: 'c2',
      },
    ]
  },
  {
    colTitle: 'مكتملة',
    id: 'c3',
    color: '#22C55E',
    tasks: [
      {
        id: 3,
        title: 'تصميم الواجهة الرئيسية',
        desc: ' للصفحة الرئيسية……',
        department: 'تطوير الموقع الإلكتروني',
        date: ' 20/11/2025',
        links: 2,
        messages: 5,
        empName: 'سارة أحمد',
        badge: 'عالية',
        ColId: 'c3',
      },
      {
        id: 4,
        title: 'إنشاء قاعدة البيانات',
        desc: 'تصميم وتنفيذ قاعدة بيانات للمشروع',
        department: 'تطوير نظام إدارة المخزون',
        date: '20/11/2025',
        links: 0,
        messages: 2,
        empName: 'علي أحمد',
        badge: 'متوسط',
        ColId: 'c3',
      },
      {
        id: 5,
        title: 'تحديد متطلبات المستخدمين',
        desc: 'تصميم وتنفيذ قاعدة بيانات للمشروع',
        department: 'تطوير نظام إدارة المخزون',
        date: '20/11/2025',
        links: 0,
        messages: 2,
        empName: 'علي أحمد',
        badge: 'منخفض',
        ColId: 'c3'
      },
    ]
  },
  {
    colTitle: 'قيد التنفيذ',
    id: 'c4',
    color: '#EF4444',
    tasks: [
      {
        id: 6,
        title: 'إعداد مواد التدريب',
        desc: 'إعداد المستندات والعروض التقديمية للتدريب',
        department: 'تدريب الموظفين الجدد',
        date: ' 20/11/2025',
        links: 5,
        messages: 2,
        empName: 'محمد علي',
        badge: 'عالية',
        ColId: 'c4'
      },
    ]
  },
]
