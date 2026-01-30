import React, { useState } from 'react';
import { Button, Card, SectionTitle } from '../components/UIComponents';

const InputLabel = ({ children, required }: { children: React.ReactNode, required?: boolean }) => (
  <label className="block text-sm font-bold text-[#374151] mb-2">
    {children} {required && <span className="text-[#B91C1C]">*</span>}
  </label>
);

const StyledInput = (props: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input 
    {...props}
    className="w-full bg-white border border-[#D1D5DB] p-3 text-sm text-[#111827] placeholder-[#9CA3AF] rounded focus:outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3] transition-colors" 
  />
);

const Consultation: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-lg mx-auto py-32 px-6 text-center">
        <h2 className="text-2xl font-bold text-[#111827] mb-4">상담 신청이 완료되었습니다.</h2>
        <p className="text-[#4B5563] mb-8">
          입력하신 연락처로 담당자가 확인 후<br/>
          24시간 이내에 연락드리겠습니다.
        </p>
        <Button onClick={() => setSubmitted(false)} variant="secondary">돌아가기</Button>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-6">
      <SectionTitle title="상담 예약" subtitle="학생의 상황에 맞는 최적의 커리큘럼을 제안해 드립니다." align="center" />
      
      <form onSubmit={handleSubmit} className="space-y-8 mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <InputLabel required>학생 이름</InputLabel>
            <StyledInput type="text" required />
          </div>
          <div>
            <InputLabel required>학교 / 학년</InputLabel>
            <StyledInput type="text" placeholder="예: 삼전중 2학년" required />
          </div>
        </div>

        <div>
          <InputLabel required>학부모 연락처</InputLabel>
          <StyledInput type="tel" placeholder="010-0000-0000" required />
        </div>

        <div>
          <InputLabel>관심 과목</InputLabel>
          <div className="flex flex-wrap gap-3 mt-2">
            {['수학', '영어', '국어', '과학'].map(sub => (
              <label key={sub} className="flex items-center gap-2 cursor-pointer select-none">
                <input type="checkbox" className="w-4 h-4 text-[#175CD3] border-gray-300 rounded focus:ring-[#175CD3]" />
                <span className="text-sm text-[#4B5563]">{sub}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <InputLabel>고민 사항</InputLabel>
          <textarea 
            rows={5} 
            placeholder="현재 성적, 목표 대학, 학습 습관 등 고민되는 부분을 자유롭게 적어주세요."
            className="w-full bg-white border border-[#D1D5DB] p-3 text-sm text-[#111827] placeholder-[#9CA3AF] rounded focus:outline-none focus:border-[#175CD3] focus:ring-1 focus:ring-[#175CD3] transition-colors resize-none"
          ></textarea>
        </div>

        <div className="pt-4 border-t border-[#E5E7EB]">
          <Button type="submit" fullWidth variant="primary" className="py-4">상담 예약 신청하기</Button>
          <p className="text-center text-xs text-[#9CA3AF] mt-4">
            개인정보는 상담 목적으로만 사용됩니다.
          </p>
        </div>
      </form>
    </div>
  );
};

export default Consultation;