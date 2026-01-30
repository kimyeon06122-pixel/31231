import React from 'react';
import { NOTICES } from '../constants';
import { Badge, SectionTitle } from '../components/UIComponents';

const Notices: React.FC = () => {
  const pinnedNotices = NOTICES.filter(n => n.isPinned);
  const normalNotices = NOTICES.filter(n => !n.isPinned);

  return (
    <div className="max-w-4xl mx-auto py-16 px-6">
      <SectionTitle title="공지사항" />

      <div className="border-t border-[#111827]">
        {/* Pinned List */}
        {pinnedNotices.map(notice => (
          <div key={notice.id} className="flex flex-col md:flex-row md:items-center py-4 px-2 border-b border-[#E5E7EB] bg-[#F9FAFB] hover:bg-[#F3F4F6] cursor-pointer transition-colors gap-2 md:gap-4">
            <div className="flex items-center gap-3 md:w-24 flex-shrink-0">
               <Badge text="중요" variant="red" />
            </div>
            <div className="flex-grow font-bold text-[#111827]">
              {notice.title}
            </div>
            <div className="text-xs text-[#6B7280] md:w-24 text-right">
              {notice.date}
            </div>
          </div>
        ))}

        {/* Normal List */}
        {normalNotices.map(notice => (
          <div key={notice.id} className="flex flex-col md:flex-row md:items-center py-4 px-2 border-b border-[#E5E7EB] hover:bg-[#F9FAFB] cursor-pointer transition-colors gap-2 md:gap-4">
            <div className="flex items-center gap-3 md:w-24 flex-shrink-0">
              <span className="text-xs text-[#6B7280] font-medium">{notice.category}</span>
            </div>
            <div className="flex-grow text-[#374151]">
              {notice.title}
            </div>
            <div className="text-xs text-[#9CA3AF] md:w-24 text-right">
              {notice.date}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notices;