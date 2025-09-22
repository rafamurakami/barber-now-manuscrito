import React from 'react';
import DayCard from '../DayCard/DayCard';
import styles from './Agenda.module.css';

const scheduleData = [
  { dayName: 'Dom', date: '01/07', isClosed: true },
  { dayName: 'Seg', date: '02/07', appointments: ['7:30 -- Barba (Barba)', '18:10 -- Gustavo (Barba)'] },
  { dayName: 'Ter', date: '03/07', appointments: ['11:20 -- Vitor (Barba)', '17:45 -- Tony (Cabelo+Barba)'] },
  { dayName: 'Qua', date: '04/07', appointments: ['7:30 -- Leo (Barba)', '9:40 -- James (Cabelo+Barba)'] },
  { dayName: 'Qui', date: '05/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sex', date: '06/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sáb', date: '07/07', appointments: ['7:30 -- Lucas (Barba)', '9:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Dom', date: '08/07', isClosed: true },
  { dayName: 'Seg', date: '09/07', appointments: ['7:30 -- Barba (Barba)', '18:10 -- Gustavo (Barba)'] },
  { dayName: 'Ter', date: '10/07', appointments: ['11:20 -- Vitor (Barba)', '17:45 -- Tony (Cabelo+Barba)'] },
  { dayName: 'Qua', date: '11/07', appointments: ['7:30 -- Leo (Barba)', '9:40 -- James (Cabelo+Barba)'] },
  { dayName: 'Qui', date: '12/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sex', date: '13/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sáb', date: '14/07', appointments: ['7:30 -- Lucas (Barba)', '9:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Dom', date: '15/07', isClosed: true },
  { dayName: 'Seg', date: '16/07', appointments: ['7:30 -- Barba (Barba)', '18:10 -- Gustavo (Barba)'] },
  { dayName: 'Ter', date: '17/07', appointments: ['11:20 -- Vitor (Barba)', '17:45 -- Tony (Cabelo+Barba)'] },
  { dayName: 'Qua', date: '18/07', appointments: ['7:30 -- Leo (Barba)', '9:40 -- James (Cabelo+Barba)'] },
  { dayName: 'Qui', date: '19/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sex', date: '20/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sáb', date: '21/07', appointments: ['7:30 -- Lucas (Barba)', '9:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Dom', date: '22/07', isClosed: true },
  { dayName: 'Seg', date: '23/07', appointments: ['7:30 -- Barba (Barba)', '18:10 -- Gustavo (Barba)'] },
  { dayName: 'Ter', date: '24/07', appointments: ['11:20 -- Vitor (Barba)', '17:45 -- Tony (Cabelo+Barba)'] },
  { dayName: 'Qua', date: '25/07', appointments: ['7:30 -- Leo (Barba)', '9:40 -- James (Cabelo+Barba)'] },
  { dayName: 'Qui', date: '26/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sex', date: '27/07', appointments: ['7:30 -- Lucas (Barba)', '9:50 -- Pablo (Barba)', '10:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Sáb', date: '28/07', appointments: ['7:30 -- Lucas (Barba)', '9:40 -- Julio (Cabelo+Barba)'] },
  { dayName: 'Dom', date: '29/07', isClosed: true },
  { dayName: 'Seg', date: '30/07', appointments: ['7:30 -- Barba (Barba)', '18:10 -- Gustavo (Barba)'] },
  { dayName: 'Ter', date: '31/07', appointments: ['11:20 -- Vitor (Barba)', '17:45 -- Tony (Cabelo+Barba)'] },
];

const Agenda = () => {
  return (
    <div className={styles.agendaContainer}>
      <h1 className={styles.title}>AGENDA BARBER NOW</h1>
      <h2 className={styles.subtitle}>Visualização mensal</h2>
      <div className={styles.weekGrid}>
        {scheduleData.map((day, index) => (
          <DayCard
            key={index}
            dayName={day.dayName}
            date={day.date}
            appointments={day.appointments}
            isClosed={day.isClosed}
          />
        ))}
      </div>
    </div>
  );
};

export default Agenda;