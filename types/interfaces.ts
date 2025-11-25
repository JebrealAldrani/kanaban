export interface Task {
  id: number;
  title: string;
  desc: string;
  department: string;
  date: string;
  empName: string;
  links?: number;
  messages?: number;
  badge: string;
  ColId: string;
}

export interface Column {
  id: string;
  colTitle: string;
  color: string;
  tasks: Task[];
}