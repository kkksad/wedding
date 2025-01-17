// components/ScheduleSection.tsx
import React from "react";

interface ScheduleItem {
  time: string;
  event: string;
  description: string;
}

interface ScheduleSectionProps {
  schedule: ScheduleItem[];
}

const ScheduleSection: React.FC<ScheduleSectionProps> = ({ schedule }) => {
  return (
    <section>
      <h2>Программа</h2>
      <div>
        {schedule.map((item, index) => (
          <div key={index}>
            <div>{item.time}</div>
            <div>
              <h3>{item.event}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScheduleSection;
