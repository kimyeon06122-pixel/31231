import React from 'react';
import { LucideIcon } from 'lucide-react';

// Design Philosophy: Material Design 3 (Modern & Airy) with Pretendard Typography
// - Tighter tracking for headings
// - Refined colors

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tonal' | 'text';
  children: React.ReactNode;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, fullWidth, className = '', ...props }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]";
  
  const variants = {
    primary: "bg-[#175CD3] text-white hover:bg-[#1554C0] shadow-sm hover:shadow",
    secondary: "bg-[#1F2937] text-white hover:bg-[#111827] shadow-sm",
    tonal: "bg-[#EFF6FF] text-[#175CD3] hover:bg-[#DBEAFE]",
    text: "bg-transparent text-[#4B5563] hover:bg-[#F3F4F6] hover:text-[#111827]"
  };
  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button className={`${baseStyle} ${variants[variant]} ${widthClass} ${className}`} {...props}>
      {children}
    </button>
  );
};

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: 'filled' | 'elevated' | 'outlined';
}

export const Card: React.FC<CardProps> = ({ children, className = '', onClick, variant = 'filled' }) => {
  const variants = {
    filled: "bg-[#F3F4F6] border-none", 
    elevated: "bg-white shadow-sm border-none", 
    outlined: "bg-white border border-[#E5E7EB]" 
  };

  return (
    <div 
      onClick={onClick}
      className={`
        rounded-[24px] p-6 md:p-8
        ${variants[variant]}
        ${onClick ? 'cursor-pointer hover:bg-[#E5E7EB] transition-colors duration-200' : ''} 
        ${className}
      `}
    >
      {children}
    </div>
  );
};

interface BadgeProps {
  text: string;
  variant?: 'blue' | 'gray' | 'red';
}

export const Badge: React.FC<BadgeProps> = ({ text, variant = 'gray' }) => {
  const styles = {
    blue: "text-[#175CD3] bg-[#EFF6FF]",
    gray: "text-[#4B5563] bg-[#FFFFFF]", 
    red: "text-[#B91C1C] bg-[#FEF2F2]"
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-[13px] font-bold rounded-full ${styles[variant]} tracking-tight`}>
      {text}
    </span>
  );
};

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-12 ${align === 'center' ? 'text-center' : ''}`}>
    <h2 className="text-3xl md:text-[40px] font-bold text-[#111827] mb-3 tracking-tighter leading-tight">{title}</h2>
    {subtitle && <p className="text-[#6B7280] text-lg font-medium tracking-tight">{subtitle}</p>}
  </div>
);

interface IconLabelProps {
  icon: LucideIcon;
  label: string;
  value?: string;
}

export const IconLabel: React.FC<IconLabelProps> = ({ icon: Icon, label, value }) => (
  <div className="flex items-center gap-2 text-[15px]">
    <Icon size={18} className="text-[#9CA3AF]" />
    <span className="text-[#6B7280] font-medium">{label}</span>
    {value && <span className="font-bold text-[#111827] ml-auto tracking-tight">{value}</span>}
  </div>
);