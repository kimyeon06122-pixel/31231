import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Notices from './pages/Notices';
import Consultation from './pages/Consultation';
import { Button } from './components/UIComponents';
import { Menu, X, LogOut, User } from 'lucide-react';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [showUserMenu, setShowUserMenu] = React.useState(false);
  const location = useLocation();
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  const NavLink = ({ to, label }: { to: string, label: string }) => {
    const isActive = location.pathname === to;
    return (
      <Link 
        to={to} 
        className={`text-[15px] transition-all duration-200 ${
          isActive 
            ? 'font-bold text-[#111827]' 
            : 'font-medium text-[#6B7280] hover:text-[#175CD3]'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {label}
      </Link>
    );
  };

  const handleSignIn = async () => {
    await signInWithGoogle();
  };

  const handleSignOut = async () => {
    await signOut();
    setShowUserMenu(false);
  };

  return (
    // Simple, clean header with backdrop blur
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-[72px] flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-[#175CD3] text-white flex items-center justify-center rounded-lg font-extrabold text-lg">
            Up
          </div>
          <span className="text-xl font-bold text-[#111827] tracking-tighter">Up Academy</span>
        </Link>

        {/* Desktop Menu - Standard Text Links */}
        <nav className="hidden md:flex gap-8 items-center">
          <NavLink to="/" label="홈" />
          <NavLink to="/courses" label="강의 시간표" />
          <NavLink to="/teachers" label="강사진" />
          <NavLink to="/notices" label="공지사항" />
        </nav>

        {/* Right Action */}
        <div className="hidden md:flex items-center gap-3">
          {loading ? (
            <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse"></div>
          ) : user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 px-3 py-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                {user.user_metadata?.avatar_url ? (
                  <img
                    src={user.user_metadata.avatar_url}
                    alt="프로필"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full bg-[#175CD3] flex items-center justify-center text-white text-sm font-bold">
                    {user.email?.[0]?.toUpperCase() || 'U'}
                  </div>
                )}
                <span className="text-sm font-medium text-[#111827] max-w-[100px] truncate">
                  {user.user_metadata?.full_name || user.email?.split('@')[0]}
                </span>
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-bold text-[#111827]">
                      {user.user_metadata?.full_name || '사용자'}
                    </p>
                    <p className="text-xs text-[#6B7280] truncate">{user.email}</p>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="w-full px-4 py-3 text-left text-sm text-[#B91C1C] hover:bg-red-50 flex items-center gap-2 transition-colors"
                  >
                    <LogOut size={16} />
                    로그아웃
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Button
              variant="tonal"
              onClick={handleSignIn}
              className="px-4 py-2 text-sm font-semibold flex items-center gap-2"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
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
              Google 로그인
            </Button>
          )}
          <Link to="/consultation">
            <Button variant="primary" className="px-5 py-2.5 text-sm font-semibold shadow-sm hover:shadow-md transition-shadow">상담 예약</Button>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-[#111827] p-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 p-6 flex flex-col gap-6 shadow-xl min-h-[50vh]">
          <div className="flex flex-col gap-5">
            <NavLink to="/" label="홈" />
            <NavLink to="/courses" label="강의 시간표" />
            <NavLink to="/teachers" label="강사진" />
            <NavLink to="/notices" label="공지사항" />
          </div>
          
          {/* Mobile Auth Section */}
          <div className="pt-4 border-t border-gray-100">
            {loading ? (
              <div className="w-full h-12 bg-gray-200 rounded-full animate-pulse"></div>
            ) : user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 px-2 py-2">
                  {user.user_metadata?.avatar_url ? (
                    <img
                      src={user.user_metadata.avatar_url}
                      alt="프로필"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-[#175CD3] flex items-center justify-center text-white font-bold">
                      {user.email?.[0]?.toUpperCase() || 'U'}
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-[#111827]">
                      {user.user_metadata?.full_name || '사용자'}
                    </p>
                    <p className="text-xs text-[#6B7280]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={handleSignOut}
                  className="w-full px-4 py-3 text-left text-sm text-[#B91C1C] bg-red-50 rounded-xl flex items-center gap-2"
                >
                  <LogOut size={16} />
                  로그아웃
                </button>
              </div>
            ) : (
              <Button
                fullWidth
                variant="tonal"
                onClick={handleSignIn}
                className="py-3 flex items-center justify-center gap-2"
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
                Google 로그인
              </Button>
            )}
          </div>
          
          <div className="mt-auto pt-4 border-t border-gray-100">
            <Link to="/consultation" onClick={() => setIsMenuOpen(false)}>
              <Button fullWidth variant="primary" className="py-3">상담 예약</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

const Footer: React.FC = () => (
  <footer className="bg-white border-t border-gray-100 pt-16 pb-12 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-1">
          <h5 className="font-bold text-[#111827] text-lg mb-4 tracking-tight">Up Academy</h5>
          <p className="text-[#6B7280] text-[15px] leading-relaxed">
            데이터 기반의 입시 로드맵.<br/>
            결과로 증명하는 프리미엄 교육 기관.
          </p>
        </div>
        <div>
          <h5 className="font-bold text-[#111827] text-[15px] mb-4">수강 안내</h5>
          <ul className="space-y-3 text-[14px] text-[#6B7280]">
            <li className="hover:text-[#175CD3] cursor-pointer transition-colors">강의 시간표</li>
            <li className="hover:text-[#175CD3] cursor-pointer transition-colors">입학 테스트</li>
            <li className="hover:text-[#175CD3] cursor-pointer transition-colors">수강료 안내</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#111827] text-[15px] mb-4">고객 센터</h5>
          <ul className="space-y-3 text-[14px] text-[#6B7280]">
            <li className="hover:text-[#175CD3] cursor-pointer transition-colors">자주 묻는 질문</li>
            <li className="hover:text-[#175CD3] cursor-pointer transition-colors">1:1 상담 문의</li>
            <li className="hover:text-[#175CD3] cursor-pointer transition-colors">오시는 길</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-[#111827] text-[15px] mb-4">Contact</h5>
          <p className="text-[#6B7280] text-[14px] leading-relaxed">
            02-1234-5678<br/>
            서울 강남구 대치동 123-45
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-[#9CA3AF] border-t border-gray-50 pt-8">
        <span>© 2024 Up Academy Inc.</span>
        <div className="flex gap-6">
          <span className="cursor-pointer hover:text-[#111827] transition-colors">이용약관</span>
          <span className="cursor-pointer hover:text-[#111827] transition-colors font-semibold">개인정보처리방침</span>
        </div>
      </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <div className="min-h-screen bg-white flex flex-col font-sans text-[#111827]">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/teachers" element={<Teachers />} />
              <Route path="/notices" element={<Notices />} />
              <Route path="/consultation" element={<Consultation />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;
