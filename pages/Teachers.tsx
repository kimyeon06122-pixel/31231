import React from 'react';
import { TEACHERS } from '../constants';
import { Card, SectionTitle, Badge } from '../components/UIComponents';

const Teachers: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-6">
      <SectionTitle title="강사진 소개" subtitle="전문성을 갖춘 업학원의 대표 강사진입니다." />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {TEACHERS.map(teacher => (
          <Card key={teacher.id} variant="filled" className="overflow-hidden hover:bg-[#EFF6FF] transition-colors p-0">
            <div className="p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-24 h-24 bg-white rounded-full overflow-hidden flex-shrink-0">
                   <img 
                     src={teacher.imageUrl} 
                     alt={teacher.name} 
                     className="w-full h-full object-cover"
                   />
                </div>
                <div>
                  <Badge text={teacher.subject} variant="blue" />
                  <h3 className="text-2xl font-bold text-[#111827] mt-2">{teacher.name}</h3>
                </div>
              </div>
              
              <div className="mb-6">
                 <p className="text-[#175CD3] font-bold text-lg mb-4">"{teacher.slogan}"</p>
                 <div className="space-y-2">
                    {teacher.career.map((c, i) => (
                      <p key={i} className="text-sm text-[#4B5563] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#9CA3AF] rounded-full"></span>
                        {c}
                      </p>
                    ))}
                 </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Teachers;