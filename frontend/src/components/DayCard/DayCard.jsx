import React from 'react';
import styles from './DayCard.module.css';

const DayCard = ({ dayName, date, appointments, isClosed = false }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <span className={styles.dayName}>{dayName}</span>
        <span className={styles.date}>{date}</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.scheduleTitle}>Horário</h3>
        {isClosed ? (
          <div className={styles.closed}>
            <p><span>X</span> Fechado</p>
            <p><span>X</span> Fechado</p>
          </div>
        ) : (
          <ul className={styles.appointmentList}>
            {appointments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DayCard;