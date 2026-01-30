import React, { useState, useEffect } from 'react';
import { Badge, SectionTitle, Button } from '../components/UIComponents';
import { Loader2 } from 'lucide-react';
import { Notice } from '../types';
import { supabase } from '../lib/supabase';

const Notices: React.FC = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchNotices() {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('notices')
          .select('*')
          .order('is_pinned', { ascending: false })
          .order('created_at', { ascending: false });

        if (error) throw error;

        const mappedNotices: Notice[] = (data || []).map((item) => ({
          id: item.id,
          title: item.title,
          date: new Date(item.date).toLocaleDateString('ko-KR'),
          isPinned: item.is_pinned,
          category: item.category,
        }));

        setNotices(mappedNotices);
      } catch (err) {
        setError(err instanceof Error ? err.message : '공지사항을 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    }

    fetchNotices();
  }, []);

  const pinnedNotices = notices.filter(n => n.isPinned);
  const normalNotices = notices.filter(n => !n.isPinned);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 flex flex-col items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#175CD3]" />
        <p className="mt-4 text-[#6B7280]">공지사항을 불러오는 중...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto py-16 px-6 text-center">
        <p className="text-[#B91C1C]">{error}</p>
        <Button variant="secondary" className="mt-4" onClick={() => window.location.reload()}>
          다시 시도
        </Button>
      </div>
    );
  }

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
