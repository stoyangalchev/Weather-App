import { useState, useEffect, useContext } from 'react';
import { WeatherContext } from '../context/WeatherContextProvider';
import { DAY, MONTHS } from '../components/Const';

const useDate = () => {
  const { location } = useContext(WeatherContext);
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const { localtime } = location || '';
      if (localtime) {
        const currentTime = new Date(localtime);
        const hours = currentTime.getHours().toString().padStart(2, '0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const time = `${hours}:${minutes}`;

        const month = (currentTime.getMonth() + 1).toString().padStart(2, '0');
        const day = currentTime.getDate().toString().padStart(2, '0');
        const year = currentTime.getFullYear();
        const currentDate = `${day} ${MONTHS[month]} ${year}`;
        const weekday = currentTime.getDay();

        const date = `${DAY[weekday]}, ${currentDate}`;

        setTime(time);
        setDate(date);
      }
    };

    updateDateTime(); // Initial call to set the time and date
    const intervalId = setInterval(updateDateTime, 1000); // Update every minute

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, [location]);

  return { time, date };
};

export default useDate;