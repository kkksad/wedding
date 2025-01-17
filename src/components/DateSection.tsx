// components/DateSection.tsx
import React from "react";
import styles from "../styles/DateSection.module.css";

interface DateSectionProps {
  selectedDate: number;
}

const DateSection: React.FC<DateSectionProps> = ({ selectedDate }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>27.06.2025</h2>
      <div className={styles.calendar}>
      <div className={styles.daysOfWeek}>
        {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      <div className={styles.dates}>
        {Array.from({ length: 30 }, (_, i) => i + 1).map((date) => (
          <div
            key={date}
            className={date === 27 ? styles.highlightedDate : ""}
          >
            {date}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default DateSection;
