import React from 'react';
import { Page } from '../types';

interface NavProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
}

const NavButton: React.FC<{ pageName: Page; activePage: Page; onClick: (page: Page) => void; }> = ({ pageName, activePage, onClick }) => {
  const isActive = activePage === pageName;
  const baseClasses = "px-5 py-2.5 rounded-lg text-xl cursor-pointer transition-all duration-300 flex items-center justify-center";
  const activeClasses = "bg-[#193E44] border-2 border-[#1E4E56] shadow-lg scale-105";
  const inactiveClasses = "bg-[#0F272B] border border-transparent hover:bg-[#143237]";

  return (
    <button onClick={() => onClick(pageName)} className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}>
      {pageName}
    </button>
  );
};


const Nav: React.FC<NavProps> = ({ activePage, setActivePage }) => {
  const pages: Page[] = ['Dashboard', 'Attendance', 'Tests', 'Test Overview', 'Overall'];

  return (
    <nav className="w-full h-20 bg-gradient-to-r from-[rgba(29,78,86,0.18)] to-[rgba(13,58,66,0.27)] shadow-[0px_4px_46px_22px_rgba(15,39,43,0.42)] flex items-center justify-center px-8 space-x-6">
      {pages.map(page => (
        <NavButton key={page} pageName={page} activePage={activePage} onClick={setActivePage} />
      ))}
    </nav>
  );
};

export default Nav;