import React from 'react';
import DashboardCard from './DashboardCard';

const UserProfileCard: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <DashboardCard className={className}>
      <div className="flex items-center space-x-4 mb-8">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold">
          PK
        </div>
        <div>
          <h3 className="text-2xl font-bold">PATEL KHUSH P</h3>
          <p className="text-base text-gray-400">khushpatel9979@gmail.com</p>
        </div>
      </div>
      <div className="space-y-6 text-lg text-gray-300">
        <p>Mobile</p>
        <p>DOB</p>
        <p>University</p>
      </div>
    </DashboardCard>
  );
};

export default UserProfileCard;
