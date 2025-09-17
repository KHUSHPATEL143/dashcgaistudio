
import React from 'react';
import DashboardCard from '../components/DashboardCard';

interface PlaceholderPageProps {
  title: string;
}

const PlaceholderPage: React.FC<PlaceholderPageProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <DashboardCard className="w-full max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-gray-400">This page is under construction. Check back soon for updates!</p>
        <div className="mt-8 text-6xl opacity-20">🏗️</div>
      </DashboardCard>
    </div>
  );
};

export default PlaceholderPage;
