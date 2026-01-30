-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  teacher TEXT NOT NULL,
  subject TEXT NOT NULL,
  target TEXT NOT NULL,
  schedule TEXT NOT NULL,
  price INTEGER NOT NULL,
  current_students INTEGER DEFAULT 0,
  max_students INTEGER NOT NULL,
  is_closing_soon BOOLEAN DEFAULT FALSE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create notices table
CREATE TABLE IF NOT EXISTS notices (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  date TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  category TEXT NOT NULL DEFAULT '공지',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS (but allow public read access)
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE notices ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to courses" ON courses FOR SELECT USING (true);
CREATE POLICY "Allow public read access to notices" ON notices FOR SELECT USING (true);

-- Insert sample course data
INSERT INTO courses (title, teacher, subject, target, schedule, price, current_students, max_students, is_closing_soon, description)
VALUES
  ('고1 3월 모의고사 대비 수학 특강', '김삼전', '수학', '고등부', '월/수 19:00 - 22:00', 350000, 18, 20, true, '3월 모의고사 1등급을 위한 필수 유형 정복'),
  ('중3 내신 만점 영어 정규반', '이무트', '영어', '중등부', '화/목 17:00 - 19:00', 280000, 12, 15, true, '서술형 평가 완벽 대비 및 고교 필수 영단어'),
  ('수능 국어 문학 개념 완성', '박솔리', '국어', '고등부', '토 10:00 - 13:00', 300000, 5, 25, false, '고전시가부터 현대소설까지 문학 개념 총정리'),
  ('고2 물리1 내신 집중반', '최사이', '과학', '고등부', '일 14:00 - 17:00', 320000, 8, 15, false, '어려운 역학 파트를 쉽게 풀어내는 노하우');

-- Insert sample notice data
INSERT INTO notices (title, date, is_pinned, category)
VALUES
  ('2024년 여름방학 특강 시간표 안내', '2024.06.15', true, '공지'),
  ('6월 모의평가 분석 설명회 개최', '2024.06.10', true, '이벤트'),
  ('중등부 기말고사 내신 대비반 개강', '2024.06.01', false, '소식'),
  ('학원 시설 방역 안내', '2024.05.28', false, '공지');
