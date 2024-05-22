// Countdown.jsx
import React from 'react';
import Countdown from 'react-countdown';

const Completionist = () => <span>It's time!</span>;

const CountdownTimer = () => {
  const countdownDate = new Date('2024-12-01T00:00:00').getTime();

  return (
    <Countdown
      date={countdownDate}
      renderer={({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
          return <Completionist />;
        } else {
          return (
            <div className="countdown">
              <div className="countdown-item">
                <span>{days}</span> days
              </div>
              <div className="countdown-item">
                <span>{hours}</span> hours
              </div>
              <div className="countdown-item">
                <span>{minutes}</span> minutes
              </div>
              <div className="countdown-item">
                <span>{seconds}</span> seconds
              </div>
            </div>
          );
        }
      }}
    />
  );
};

export default CountdownTimer;
