
import React from 'react';

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-[#1A1E2C]/80 backdrop-blur-sm border border-[#2A3145] rounded-2xl p-6 shadow-lg h-full ${className}`}>
      {children}
    </div>
  );
};

export default DashboardCard;