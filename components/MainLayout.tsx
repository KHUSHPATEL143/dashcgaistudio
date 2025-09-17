import React, { useState } from 'react';
import Header from './Header';
import Nav from './Nav';
import DashboardPage from '../pages/DashboardPage';
import AttendancePage from '../pages/AttendancePage';
import PlaceholderPage from '../pages/PlaceholderPage';
import { Page } from '../types';

interface MainLayoutProps {
    onLogout: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ onLogout }) => {
  const [activePage, setActivePage] = useState<Page>('Dashboard');

  const renderContent = () => {
    switch (activePage) {
      case 'Dashboard':
        return <DashboardPage />;
      case 'Attendance':
        return <AttendancePage setActivePage={setActivePage} />;
      case 'Tests':
        return <PlaceholderPage title="Tests" />;
      case 'Test Overview':
        return <PlaceholderPage title="Test Overview" />;
      case 'Overall':
        return <PlaceholderPage title="Overall" />;
      default:
        return <DashboardPage />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onLogout={onLogout} />
      <Nav activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-grow p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default MainLayout;