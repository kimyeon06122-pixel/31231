import React from 'react';
import { ArrowRight, ChevronRight, PlayCircle, FileText, Award, Star, LogOut, User } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button, Card, SectionTitle, Badge } from '../components/UIComponents';
import { COURSES, PERFORMANCE_DATA, REVIEWS } from '../constants';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const closingCourses = COURSES.filter(c => c.isClosingSoon);
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <div className="w-full">
      {/* Welcome / Login Section */}
      <section className="bg-gradient-to-br from-[#EFF6FF] to-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gray-200 animate-pulse"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
                <div className="h-3 bg-gray-200 rounded w-1/4 animate-pulse"></div>
              </div>
            </div>
          ) : user ? (
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="프로필"
                    className="w-14 h-14 rounded-full object-cover ring-4 ring-[#EFF6FF]"
                  />
                ) : (
                  <div className="w-14 h-14 rounded-full bg-[#175CD3] flex items-center justify-center text-white text-xl font-bold ring-4 ring-[#EFF6FF]">
                    {user.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
                <div>
                  <p className="text-lg font-bold text-[#111827]">
                    안녕하세요, {user.user_metadata?.full_name || user.email?.split('@')[0]}님!
                  </p>
                  <p className="text-sm text-[#6B7280]">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button 
                  variant="tonal" 
                  onClick={() => navigate('/consultation')}
                  className="flex-1 sm:flex-none px-6 py-2.5"
                >
                  상담 예약
                </Button>
                <button
                  onClick={handleSignOut}
                  className="flex items-center gap-2 px-4 py-2.5 text-sm text-[#B91C1C] hover:bg-red-50 rounded-xl transition-colors"
                >
                  <LogOut size={16} />
                  로그아웃
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280]">
                  <User size={28} />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#111827]">로그인하고 더 많은 혜택을 받아보세요</p>
                  <p className="text-sm text-[#6B7280]">수강 신청, 맞춤 상담 등 다양한 서비스를 이용하실 수 있습니다.</p>
                </div>
              </div>
              <Button
                variant="primary"
                onClick={handleSignIn}
                className="w-full sm:w-auto px-6 py-3 flex items-center justify-center gap-3 text-base"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google로 시작하기
              </Button>
            </div>
          )}
        </div>
      </section>

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
