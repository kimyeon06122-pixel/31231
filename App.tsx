import React from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Teachers from './pages/Teachers';
import Notices from './pages/Notices';
import Consultation from './pages/Consultation';
import { Button } from './components/UIComponents';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

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
        <div className="hidden md:block">
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
          <div className="mt-4 pt-4 border-t border-gray-100">
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
  );
};

export default App;