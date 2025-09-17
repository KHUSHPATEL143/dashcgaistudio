import React from 'react';
import OverallAttendance from '../components/OverallAttendance';
import UserProfileCard from '../components/UserProfileCard';
import SubjectsCard from '../components/SubjectsCard';
import AttendanceSummaryCard from '../components/AttendanceSummaryCard';
import MentorCard from '../components/MentorCard';
import DashboardCard from '../components/DashboardCard';

const DashboardPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 lg:grid-rows-6 gap-6 h-full" style={{ height: 'calc(100vh - 11.5rem)' }}>
        <OverallAttendance className="lg:col-span-8 lg:row-span-2" />
        <UserProfileCard className="lg:col-span-4 lg:row-span-3" />
        <DashboardCard className="lg:col-span-8 lg:row-span-3 h-full flex flex-col overflow-hidden">
            <AttendanceSummaryCard />
        </DashboardCard>
        <SubjectsCard className="lg:col-span-4 lg:row-span-3" />
        <MentorCard className="lg:col-span-8 lg:row-span-1" />
    </div>
  );
};

export default DashboardPage;