
import React from 'react';

interface HeaderProps {
    onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="w-full h-24 bg-gradient-to-r from-[rgba(15,39,43,0.27)] to-[rgba(15,39,43,0.06)] shadow-[0px_4px_46px_22px_rgba(15,39,43,0.42)] flex items-center justify-between px-8">
      <h1 className="text-5xl font-bold tracking-wider">CODING GITA</h1>
      <div className="flex items-center space-x-4">
          <div className="text-right">
              <p className="font-semibold">Khush Patel</p>
              <button onClick={onLogout} className="text-sm text-gray-400 hover:text-red-400 transition-colors">Logout</button>
          </div>
        <div className="w-16 h-16 bg-[#1E4E56] rounded-full flex items-center justify-center shadow-md cursor-pointer border-2 border-[#2A5A64]">
          <span className="text-3xl">K</span>
        </div>
      </div>
    </header>
  );
};

export default Header;