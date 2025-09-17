import React, { useState, useCallback } from 'react';
import LoginPage from './pages/LoginPage';
import MainLayout from './components/MainLayout';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = useCallback(() => {
    setIsLoggedIn(true);
  }, []);
  
  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0D1F23] to-[#112F36] text-white">
      {isLoggedIn ? <MainLayout onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />}
    </div>
  );
}

export default App;