import React from 'react';
import { ArrowRight, ChevronRight, PlayCircle, FileText, Award, Star } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button, Card, SectionTitle, Badge } from '../components/UIComponents';
import { COURSES, PERFORMANCE_DATA, REVIEWS } from '../constants';
import { useNavigate, Link } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const closingCourses = COURSES.filter(c => c.isClosingSoon);

  return (
    <div className="w-full">
      {/* Hero Section: Clean, Airy, No Border */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#F3F4F6] px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#175CD3]"></span>
              <span className="text-[#4B5563] font-bold text-sm">2024 여름학기 수강신청</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#111827] leading-[1.1] tracking-tight">
              성적 향상의<br />
              <span className="text-[#175CD3]">확실한 로드맵</span>
            </h1>
            <p className="text-xl text-[#4B5563] max-w-lg leading-relaxed font-medium">
              감성적인 위로 대신, 철저한 데이터와<br/>
              체계적인 관리로 결과를 증명합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button onClick={() => navigate('/courses')} variant="primary" className="px-10 py-4 text-base">
                강의 조회하기
              </Button>
              <Button onClick={() => navigate('/consultation')} variant="tonal" className="px-10 py-4 text-base">
                상담 예약하기
              </Button>
            </div>
          </div>
          
          {/* Right Side: Filled Surface Card (No Border) */}
          <div className="relative">
             <div className="bg-[#F3F4F6] rounded-[32px] p-8 md:p-12 relative z-10">
                <div className="flex justify-between items-end mb-8">
                   <div>
                      <p className="text-sm text-[#6B7280] font-bold uppercase tracking-wider mb-2">Total Students</p>
                      <p className="text-4xl font-bold text-[#111827]">1,240+</p>
                   </div>
                   <div className="text-right">
                      <p className="text-sm text-[#6B7280] font-bold uppercase tracking-wider mb-2">Avg. Improvement</p>
                      <p className="text-4xl font-bold text-[#175CD3]">+24.5pt</p>
                   </div>
                </div>
                {/* Simplified Chart */}
                <div className="h-64 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={PERFORMANCE_DATA}>
                      <defs>
                        <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#175CD3" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#175CD3" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                      <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 12}} dy={10} />
                      <Area type="monotone" dataKey="score" stroke="#175CD3" strokeWidth={3} fillOpacity={1} fill="url(#colorScore)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Featured Courses: Cards are now "Filled" style */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#111827]">마감 임박 강의</h2>
              <p className="text-[#6B7280] mt-3 text-lg">조기 마감이 예상되는 인기 강좌입니다.</p>
            </div>
            <Link to="/courses" className="hidden md:flex items-center justify-center w-12 h-12 bg-[#F3F4F6] rounded-full hover:bg-[#E5E7EB] transition-colors">
              <ArrowRight size={20} className="text-[#111827]" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {closingCourses.slice(0, 3).map(course => (
              <Card key={course.id} variant="filled" className="flex flex-col h-full hover:bg-[#EFF6FF] transition-colors duration-300">
                <div className="flex justify-between items-start mb-6">
                   <div className="flex gap-2">
                     <Badge text={course.subject} variant="gray" />
                     <Badge text={course.target} variant="gray" />
                   </div>
                   <span className="bg-white px-3 py-1 rounded-full text-[#B91C1C] text-xs font-bold shadow-sm">
                     잔여 {course.maxStudents - course.currentStudents}석
                   </span>
                </div>
                <h3 className="text-2xl font-bold text-[#111827] mb-3 leading-snug">{course.title}</h3>
                <p className="text-[#4B5563] text-sm mb-8 flex-grow line-clamp-2 leading-relaxed">{course.description}</p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#6B7280] font-bold text-xs">T</div>
                    <span className="font-bold text-[#111827]">{course.teacher} 선생님</span>
                  </div>
                  <Button variant="secondary" fullWidth className="w-full bg-[#111827] text-white" onClick={() => navigate('/consultation')}>
                    수강 신청
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Section: Simple Iconography */}
      <section className="py-24 px-6 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="학습 지원 시스템" subtitle="성적 향상을 위한 완벽한 인프라." />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {icon: FileText, title: "기출 분석 자료실", desc: "10년치 기출문제와 자체 분석 노트 제공"},
              {icon: Award, title: "명예의 전당", desc: "SKY 합격 선배들의 합격 수기 및 멘토링"},
              {icon: PlayCircle, title: "무한 복습 시스템", desc: "모든 현장 강의 고화질 녹화본 제공"}
            ].map((item, i) => (
              <div key={i} className="group p-8 rounded-[32px] bg-white hover:bg-[#175CD3] transition-colors duration-300">
                <div className="w-14 h-14 bg-[#F3F4F6] flex items-center justify-center rounded-2xl mb-6 text-[#111827] group-hover:bg-white/10 group-hover:text-white transition-colors">
                  <item.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3 group-hover:text-white transition-colors">{item.title}</h3>
                <p className="text-[#4B5563] text-base leading-relaxed group-hover:text-white/80 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews: Star Ratings Included */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="수강생 리얼 후기" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {REVIEWS.map((review) => (
              <Card key={review.id} variant="filled" className="bg-[#F9FAFB]">
                {/* 5 Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#FBBF24" className="text-[#FBBF24]" />
                  ))}
                </div>
                
                <h3 className="text-lg font-bold text-[#111827] mb-2 leading-relaxed">
                  "{review.content}"
                </h3>
                
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#E5E7EB] flex items-center justify-center font-bold text-[#6B7280]">
                      {review.studentName[0]}
                    </div>
                    <div>
                      <span className="block font-bold text-[#111827] text-sm">{review.studentName}</span>
                      <span className="text-xs text-[#6B7280]">{review.grade}</span>
                    </div>
                  </div>
                  <span className="bg-[#EFF6FF] text-[#175CD3] px-3 py-1 rounded-full text-xs font-bold">
                    {review.improvement}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;