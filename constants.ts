import { Course, Notice, Review, Subject, TargetAudience, Teacher } from './types';

export const COURSES: Course[] = [
  {
    id: 'c1',
    title: '고1 3월 모의고사 대비 수학 특강',
    teacher: '김삼전',
    subject: Subject.Math,
    target: TargetAudience.High,
    schedule: '월/수 19:00 - 22:00',
    price: 350000,
    currentStudents: 18,
    maxStudents: 20,
    isClosingSoon: true,
    description: '3월 모의고사 1등급을 위한 필수 유형 정복'
  },
  {
    id: 'c2',
    title: '중3 내신 만점 영어 정규반',
    teacher: '이무트',
    subject: Subject.English,
    target: TargetAudience.Middle,
    schedule: '화/목 17:00 - 19:00',
    price: 280000,
    currentStudents: 12,
    maxStudents: 15,
    isClosingSoon: true,
    description: '서술형 평가 완벽 대비 및 고교 필수 영단어'
  },
  {
    id: 'c3',
    title: '수능 국어 문학 개념 완성',
    teacher: '박솔리',
    subject: Subject.Korean,
    target: TargetAudience.High,
    schedule: '토 10:00 - 13:00',
    price: 300000,
    currentStudents: 5,
    maxStudents: 25,
    isClosingSoon: false,
    description: '고전시가부터 현대소설까지 문학 개념 총정리'
  },
  {
    id: 'c4',
    title: '고2 물리1 내신 집중반',
    teacher: '최사이',
    subject: Subject.Science,
    target: TargetAudience.High,
    schedule: '일 14:00 - 17:00',
    price: 320000,
    currentStudents: 8,
    maxStudents: 15,
    isClosingSoon: false,
    description: '어려운 역학 파트를 쉽게 풀어내는 노하우'
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: 't1',
    name: '김삼전',
    subject: Subject.Math,
    slogan: '수포자 구원투수, 5등급을 1등급으로',
    imageUrl: 'https://picsum.photos/200/200?random=1',
    career: ['전 대치 명문학원 강사', '서울대 수학교육과 졸업']
  },
  {
    id: 't2',
    name: '이무트',
    subject: Subject.English,
    slogan: '빈칸추론의 신, 논리로 푸는 영어',
    imageUrl: 'https://picsum.photos/200/200?random=2',
    career: ['연세대 영어영문학과 졸업', 'TOEIC 만점 강사']
  },
  {
    id: 't3',
    name: '박솔리',
    subject: Subject.Korean,
    slogan: '지문 속에 답이 있다, 구조 독해 전문가',
    imageUrl: 'https://picsum.photos/200/200?random=3',
    career: ['고려대 국어교육과 졸업', '수능 국어 교재 집필']
  }
];

export const NOTICES: Notice[] = [
  {
    id: 'n1',
    title: '2024년 여름방학 특강 시간표 안내',
    date: '2024.06.15',
    isPinned: true,
    category: '공지'
  },
  {
    id: 'n2',
    title: '6월 모의평가 분석 설명회 개최',
    date: '2024.06.10',
    isPinned: true,
    category: '이벤트'
  },
  {
    id: 'n3',
    title: '중등부 기말고사 내신 대비반 개강',
    date: '2024.06.01',
    isPinned: false,
    category: '소식'
  },
  {
    id: 'n4',
    title: '학원 시설 방역 안내',
    date: '2024.05.28',
    isPinned: false,
    category: '공지'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    studentName: '고2 박OO',
    grade: '수학 4등급 -> 1등급',
    content: '김삼전 선생님 강의 듣고 문제 푸는 속도가 달라졌어요. 개념부터 확실히 잡아주십니다.',
    improvement: '+35점'
  },
  {
    id: 'r2',
    studentName: '중3 이OO',
    grade: '영어 80점 -> 100점',
    content: '서술형이 너무 무서웠는데, 선생님이 알려주신 패턴대로 쓰니까 감점이 없어요!',
    improvement: '+20점'
  },
  {
    id: 'r3',
    studentName: '고1 김OO',
    grade: '국어 모의고사 백분위 98%',
    content: '비문학 읽는 법을 배우고 나서 지문이 눈에 확 들어옵니다.',
    improvement: '상위 2%'
  }
];

export const PERFORMANCE_DATA = [
  { name: '1월', score: 65 },
  { name: '2월', score: 72 },
  { name: '3월', score: 78 },
  { name: '4월', score: 85 },
  { name: '5월', score: 92 },
  { name: '6월', score: 96 },
];