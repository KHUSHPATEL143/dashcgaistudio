import React from 'react';
import DashboardCard from './DashboardCard';

interface OverallAttendanceProps {
    className?: string;
}

const OverallAttendance: React.FC<OverallAttendanceProps> = ({ className }) => {
    const present = 42;
    const total = 53;
    const percentage = Math.round((present / total) * 100);

    return (
        <DashboardCard className={className}>
            <div className="flex justify-between items-center pb-3 border-b border-gray-700/50">
                <h3 className="text-2xl">Overall Attendance</h3>
                <span className="text-2xl font-semibold text-gray-200">{percentage}%</span>
            </div>
            <div className="mt-6 space-y-3">
                <div className="w-full bg-gray-800 rounded-full h-4">
                    <div 
                        className="bg-green-500 h-4 rounded-full" 
                        style={{ width: `${percentage}%` }}
                        role="progressbar"
                        aria-valuenow={percentage}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-label="Overall attendance percentage"
                    ></div>
                </div>
                <p className="text-gray-400 text-base">Present {present} / {total} total marked sessions</p>
            </div>
        </DashboardCard>
    );
};

export default OverallAttendance;