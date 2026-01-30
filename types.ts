export enum TargetAudience {
  Middle = '중등부',
  High = '고등부'
}

export enum Subject {
  Math = '수학',
  English = '영어',
  Korean = '국어',
  Science = '과학'
}

export interface Course {
  id: string;
  title: string;
  teacher: string;
  subject: Subject;
  target: TargetAudience;
  schedule: string;
  price: number;
  currentStudents: number;
  maxStudents: number;
  isClosingSoon: boolean;
  description: string;
}

export interface Teacher {
  id: string;
  name: string;
  subject: Subject;
  slogan: string;
  imageUrl: string;
  career: string[];
}

export interface Notice {
  id: string;
  title: string;
  date: string;
  isPinned: boolean;
  category: '공지' | '소식' | '이벤트';
}

export interface Review {
  id: string;
  studentName: string;
  grade: string;
  content: string;
  improvement: string;
}