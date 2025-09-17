import React from 'react';
import DashboardCard from './DashboardCard';

const SubjectsCard: React.FC<{ className?: string }> = ({ className }) => {
  const subjects = [
    'SU11 - GIT & GITHUB',
    'SU14 - UI/UX FIGMA',
    'SU18 - C Language',
    'SU22 - HTML/CSS/JS'
  ];

  return (
    <DashboardCard className={className}>
      <h3 className="text-2xl mb-4">Subjects</h3>
      <div className="space-y-3">
        {subjects.map(subject => (
          <div key={subject} className="bg-black/30 p-4 rounded-lg text-base">
            {subject}
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default SubjectsCard;
