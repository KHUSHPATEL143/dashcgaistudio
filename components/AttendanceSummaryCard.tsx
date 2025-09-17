import React, { useState } from 'react';

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

const AttendanceSummaryCard: React.FC = () => {
  const [activeSubject, setActiveSubject] = useState(subjects[0]);
  const currentSubjectData = attendanceData[activeSubject];

  return (
    <div className="flex flex-col h-full">
      <nav className="flex items-center border-b border-gray-700/50 flex-shrink-0">
        {subjects.map(subject => (
          <button
            key={subject}
            onClick={() => setActiveSubject(subject)}
            className={`py-3 px-4 text-base transition-colors duration-300 ${
              activeSubject === subject ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-400 hover:text-white'
            }`}
          >
            {subject}
          </button>
        ))}
      </nav>

      <section className="flex-grow overflow-y-auto pt-4">
        <header className="flex justify-between items-center mb-4 px-2">
          <h3 className="text-xl">{activeSubject}</h3>
          <p className="text-gray-400 text-xs">Range: 2025-09-01 → 2025-09-17</p>
        </header>

        <div className="space-y-1">
            <div className="grid grid-cols-3 gap-4 text-gray-400 px-4 pb-2 text-sm">
                <span>Date</span>
                <span>Day Status</span>
                <span className="text-right">Subject Status</span>
            </div>
            {currentSubjectData.length > 0 ? (
                currentSubjectData.map((record) => {
                    const isWeekend = record.day === 'Sunday';
                    return (
                        <div key={record.date} className={`grid grid-cols-3 gap-4 items-center px-4 py-3 rounded-lg text-sm ${isWeekend ? 'bg-white/5' : ''}`}>
                            <span className="font-medium text-gray-200">{record.date}{isWeekend && <span className="text-gray-400 ml-2">{record.day}</span>}</span>
                            <div>
                                <span className="bg-gray-700 border border-gray-600 text-gray-300 px-3 py-1 rounded-md text-xs">{record.dayStatus}</span>
                            </div>
                            <div className="flex justify-end">
                                <StatusPill status={record.subjectStatus} />
                            </div>
                        </div>
                    );
                })
            ) : (
                <div className="text-center py-10 text-gray-500">
                    No records for this subject.
                </div>
            )}
        </div>
      </section>
    </div>
  );
};

export default AttendanceSummaryCard;
