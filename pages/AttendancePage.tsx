import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';
import { Page } from '../types';

interface AttendancePageProps {
  setActivePage: (page: Page) => void;
}

type Status = 'Present' | 'Absent' | 'N/A';
type DayStatus = 'Marked' | 'Not Marked' | 'Holiday';

interface AttendanceRecord {
  date: string;
  day: string;
  dayStatus: DayStatus;
  subjectStatus: Status;
}

const attendanceData: Record<string, AttendanceRecord[]> = {
  'GIT & GITHUB': [
    { date: '17/09/2025', day: 'Wednesday', dayStatus: 'Not Marked', subjectStatus: 'Present' },
    { date: '16/09/2025', day: 'Tuesday', dayStatus: 'Not Marked', subjectStatus: 'Present' },
    { date: '15/09/2025', day: 'Monday', dayStatus: 'Not Marked', subjectStatus: 'Absent' },
    { date: '14/09/2025', day: 'Sunday', dayStatus: 'Holiday', subjectStatus: 'N/A' },
    { date: '13/09/2025', day: 'Saturday', dayStatus: 'Not Marked', subjectStatus: 'Present' },
    { date: '12/09/2025', day: 'Friday', dayStatus: 'Not Marked', subjectStatus: 'Present' },
    { date: '11/09/2025', day: 'Thursday', dayStatus: 'Not Marked', subjectStatus: 'Present' },
    { date: '10/09/2025', day: 'Wednesday', dayStatus: 'Not Marked', subjectStatus: 'Present' },
  ],
  'C Language': [],
  'HTML/CSS/JS': [],
  'UI/UX FIGMA': [],
  'MATHS': [],
};

const subjects = Object.keys(attendanceData);

const StatusPill: React.FC<{ status: Status }> = ({ status }) => {
    if (status === 'Present') {
        return <span className="bg-green-900/70 text-green-300 text-sm font-medium px-4 py-1.5 rounded-full border border-green-700/80">Present</span>;
    }
    if (status === 'Absent') {
        return <span className="bg-red-900/70 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full border border-red-700/80">Absent</span>;
    }
    return null;
};

const AttendancePage: React.FC<AttendancePageProps> = ({ setActivePage }) => {
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const currentSubjectData = attendanceData[activeSubject];

  return (
    <DashboardCard>
      <header className="flex justify-between items-start pb-4 border-b border-gray-700/50">
        <div>
          <h2 className="text-3xl font-semibold">Attendance - Last 30 Days</h2>
          <p className="text-gray-400 mt-1">Subject-wise daily status from 2025-09-01 to 2025-09-17</p>
        </div>
        <button onClick={() => setActivePage('Dashboard')} className="text-sm text-gray-400 hover:text-white transition-colors">
          Back to Dashboard
        </button>
      </header>

      <nav className="flex items-center my-6 border-b border-gray-700/50">
        {subjects.map(subject => (
          <button
            key={subject}
            onClick={() => setActiveSubject(subject)}
            className={`py-3 px-5 text-lg transition-colors duration-300 ${
              activeSubject === subject ? 'text-white font-semibold' : 'text-gray-400 hover:text-white'
            }`}
          >
            {subject}
          </button>
        ))}
      </nav>

      <section>
        <header className="flex justify-between items-center mb-6">
          <h3 className="text-2xl">{activeSubject}</h3>
          <p className="text-gray-400 text-sm">Range: 2025-09-01 → 2025-09-17</p>
        </header>

        <div className="space-y-1">
            <div className="grid grid-cols-3 gap-4 text-gray-400 px-4 pb-2">
                <span>Date</span>
                <span>Day Status</span>
                <span className="text-right">Subject Status</span>
            </div>
            {currentSubjectData.length > 0 ? (
                currentSubjectData.map((record) => {
                    const isWeekend = record.day === 'Sunday' || record.day === 'Saturday';
                    return (
                        <div key={record.date} className={`grid grid-cols-3 gap-4 items-center px-4 py-3 rounded-lg ${isWeekend ? 'bg-white/5' : ''}`}>
                            <span className="font-medium text-gray-200">{record.date}{isWeekend && <span className="text-gray-400 ml-2">{record.day}</span>}</span>
                            <div>
                                <span className="bg-gray-700 border border-gray-600 text-gray-300 px-3 py-1 rounded-md text-sm">{record.dayStatus}</span>
                            </div>
                            <div className="flex justify-end">
                                <StatusPill status={record.subjectStatus} />
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-center py-10 text-gray-500">
                    No attendance records for this subject.
                </div>
            )}
        </div>
      </section>
    </DashboardCard>
  );
};

export default AttendancePage;
