import React from 'react';
import DashboardCard from './DashboardCard';

const MentorCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DashboardCard className={className}>
        <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-[#00A99D] rounded-full flex items-center justify-center text-2xl font-bold">
                A
            </div>
            <div>
                <h3 className="text-xl font-bold">Ankita</h3>
                <p className="text-sm text-gray-400">SUXCG / 14</p>
            </div>
        </div>
    </DashboardCard>
  );
};

export default MentorCard;
