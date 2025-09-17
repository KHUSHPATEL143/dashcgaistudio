import React, { useState } from 'react';
import { Role } from '../types';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [selectedRole, setSelectedRole] = useState<Role>(Role.Student);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRoleSelect = (role: Role) => {
    setSelectedRole(role);
  };

  const roleButtonClasses = (role: Role) => 
    `w-full h-20 rounded-2xl flex items-center justify-center text-3xl cursor-pointer transition-all duration-300
     ${selectedRole === role 
        ? 'bg-[#193E44] border-2 border-[#1E4E56] shadow-lg scale-105' 
        : 'bg-[#0F272B] border border-[#193E44] hover:bg-[#143237]'}`;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <header className="absolute top-8 text-center w-full">
        <p className="text-2xl text-gray-300">Welcome Back To</p>
        <h1 className="text-7xl font-bold tracking-wider">CODING GITA</h1>
      </header>

      <main className="w-full max-w-4xl mt-32 bg-gradient-to-br from-[rgba(13,58,66,0.32)] to-[rgba(15,39,43,0.32)] rounded-2xl shadow-2xl border border-[#2A3145] p-8 backdrop-blur-sm">
        <h2 className="text-3xl text-center mb-8">Sign in to your account</h2>
        
        <form className="space-y-8">
          <div>
            <label className="text-2xl mb-3 block">Select Role</label>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button type="button" onClick={() => handleRoleSelect(Role.Student)} className={roleButtonClasses(Role.Student)}>
                {Role.Student}
              </button>
              <button type="button" onClick={() => handleRoleSelect(Role.Mentor)} className={roleButtonClasses(Role.Mentor)}>
                {Role.Mentor}
              </button>
              <button type="button" onClick={() => handleRoleSelect(Role.Teacher)} className={roleButtonClasses(Role.Teacher)}>
                {Role.Teacher}
              </button>
            </div>
          </div>

          <div>
            <label className="text-2xl mb-3 block">Email</label>
            <input 
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
              className="w-full p-4 bg-[#193E44] rounded-2xl border-2 border-[#1E4E56] text-2xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E4E56]"
            />
          </div>

          <div>
            <label className="text-2xl mb-3 block">Password</label>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full p-4 bg-[#193E44] rounded-2xl border-2 border-[#1E4E56] text-2xl text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1E4E56]"
            />
          </div>

          <button 
            type="button"
            onClick={onLogin}
            className="w-full h-20 bg-[#0F272B] rounded-2xl border-2 border-[#1E4E56] text-4xl hover:bg-[#193E44] transition-colors duration-300"
          >
            Sign in
          </button>
        </form>
        
        <div className="text-center mt-8 text-gray-400 text-sm">
          <p>Use your role-based credentials. Contact admin if you need help.</p>
          <p>Didn't have an account? <a href="#" className="underline hover:text-white">Click here to sign up</a></p>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
