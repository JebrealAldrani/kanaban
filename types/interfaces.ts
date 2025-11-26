export interface Task {
  id: number;
  title: string;
  desc: string;
  department: 'MARKETING' | 'DEVELOPMENT' | 'RESOURCES';
  startDate: string;
  endDate: string;
  empName: "1" | '2' | '3';
  links?: number;
  messages?: number;
  priority: "1" | '2' | '3';
  status: 'TODO' | 'INPROGRESS' | 'COMPLETE' | 'PENDING';
  project? : '1'| '2' | '3'
  file? :string
}

export interface Column {
  id: 'TODO' | 'INPROGRESS' | 'COMPLETE' | 'PENDING';
  colTitle: string;
  color: string;
}