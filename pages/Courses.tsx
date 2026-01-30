import React, { useState } from 'react';
import { COURSES } from '../constants';
import { Badge, Button, IconLabel, SectionTitle, Card } from '../components/UIComponents';
import { User, Calendar, Check } from 'lucide-react';
import { Subject, TargetAudience } from '../types';

// MD3 Choice Chip
interface FilterChipProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const FilterChip: React.FC<FilterChipProps> = ({ label, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`px-5 py-2.5 text-sm font-bold rounded-full transition-all flex items-center gap-2 ${
      active 
      ? 'bg-[#111827] text-white' 
      : 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
    }`}
  >
    {active && <Check size={14} strokeWidth={3} />}
    {label}
  </button>
);

const Courses: React.FC = () => {
  const [targetFilter, setTargetFilter] = useState<string>('All');
  const [subjectFilter, setSubjectFilter] = useState<string>('All');

  const filteredCourses = COURSES.filter(course => {
    const targetMatch = targetFilter === 'All' || course.target === targetFilter;
    const subjectMatch = subjectFilter === 'All' || course.subject === subjectFilter;
    return targetMatch && subjectMatch;
  });

  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <SectionTitle title="전체 강의 목록" subtitle="학년과 과목에 맞춰 최적의 강의를 선택하세요." />

      {/* Filters: Chips Layout */}
      <div className="mb-16 space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-[#9CA3AF] mr-2">대상</span>
          <FilterChip label="전체" active={targetFilter === 'All'} onClick={() => setTargetFilter('All')} />
          {Object.values(TargetAudience).map(t => (
            <FilterChip key={t} label={t} active={targetFilter === t} onClick={() => setTargetFilter(t)} />
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-[#9CA3AF] mr-2">과목</span>
          <FilterChip label="전체" active={subjectFilter === 'All'} onClick={() => setSubjectFilter('All')} />
          {Object.values(Subject).map(s => (
            <FilterChip key={s} label={s} active={subjectFilter === s} onClick={() => setSubjectFilter(s)} />
          ))}
        </div>
      </div>

      {/* Course Grid: MD3 Filled Cards */}
      <div className="grid grid-cols-1 gap-4">
        {filteredCourses.map(course => (
          <Card key={course.id} variant="filled" className="flex flex-col md:flex-row md:items-center p-6 md:p-8 gap-8 group hover:bg-[#EFF6FF]">
            
            {/* Info Section */}
            <div className="flex-grow space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Badge text={course.target} variant="gray" />
                <Badge text={course.subject} variant="blue" />
                {course.isClosingSoon && (
                  <span className="text-[#B91C1C] text-xs font-bold bg-[#FEF2F2] px-2 py-1 rounded-full">
                    마감임박
                  </span>
                )}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-[#111827] mb-2 group-hover:text-[#175CD3] transition-colors">{course.title}</h3>
                <p className="text-[#4B5563] text-base">{course.description}</p>
              </div>
              
              <div className="flex flex-wrap gap-6 pt-2">
                <IconLabel icon={User} label="강사" value={course.teacher} />
                <IconLabel icon={Calendar} label="일정" value={course.schedule} />
              </div>
            </div>

            {/* Action Section */}
            <div className="flex flex-col items-end gap-6 min-w-[240px]">
               <div className="text-right">
                  <span className="text-2xl font-bold text-[#111827]">{course.price.toLocaleString()}원</span>
                  <span className="text-sm text-[#6B7280] block">/ 월 (4주 기준)</span>
               </div>
               
               <div className="w-full">
                  <div className="flex justify-between text-xs mb-2 px-1">
                    <span className="text-[#6B7280] font-medium">현재 모집률</span>
                    <span className="font-bold text-[#111827]">{Math.round((course.currentStudents / course.maxStudents) * 100)}%</span>
                  </div>
                  <div className="w-full bg-white h-2 rounded-full overflow-hidden mb-4">
                    <div 
                      className="bg-[#175CD3] h-full rounded-full" 
                      style={{ width: `${(course.currentStudents / course.maxStudents) * 100}%` }}
                    ></div>
                  </div>
                  <Button 
                    fullWidth 
                    variant={course.currentStudents >= course.maxStudents ? "secondary" : "primary"}
                    disabled={course.currentStudents >= course.maxStudents}
                  >
                    {course.currentStudents >= course.maxStudents ? "대기 신청" : "수강 신청하기"}
                  </Button>
               </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-32 bg-[#F3F4F6] rounded-[32px]">
          <p className="text-[#6B7280] font-medium text-lg">해당하는 강의가 없습니다.</p>
          <Button variant="text" className="mt-4" onClick={() => {setTargetFilter('All'); setSubjectFilter('All');}}>
             모든 강의 보기
          </Button>
        </div>
      )}
    </div>
  );
};

export default Courses;