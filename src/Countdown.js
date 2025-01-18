import React, { useState, useEffect } from 'react';
import './Countdown.css'; // Import the CSS file

const Countdown = ({ language }) => {
  const [timeLeft, setTimeLeft] = useState({});

  const translations = {
    en: {
      days: 'Days',
      hours: 'Hours',
      minutes: 'Minutes',
      seconds: 'Seconds',
    },
    bn: {
      days: 'দিন',
      hours: 'ঘণ্টা',
      minutes: 'মিনিট',
      seconds: 'সেকেন্ড',
    },
  };

  useEffect(() => {
    const eventDate = new Date('2025-03-03T21:00:00');
    const interval = setInterval(() => {
      const now = new Date();
      const diff = eventDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({});
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft.days && !timeLeft.hours && !timeLeft.minutes && !timeLeft.seconds) {
    return <p>🎉 The event is happening now! 🎉</p>;
  }

  return (
    <div className="countdown-container">
      <div className="time-unit">
        <p className="time-number">{timeLeft.days}</p>
        <p className="time-label">{translations[language].days}</p>
      </div>
      <div className="time-unit">
        <p className="time-number">{timeLeft.hours}</p>
        <p className="time-label">{translations[language].hours}</p>
      </div>
      <div className="time-unit">
        <p className="time-number">{timeLeft.minutes}</p>
        <p className="time-label">{translations[language].minutes}</p>
      </div>
      <div className="time-unit">
        <p className="time-number">{timeLeft.seconds}</p>
        <p className="time-label">{translations[language].seconds}</p>
      </div>
    </div>
  );
};

export default Countdown;
