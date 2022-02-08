import { useState } from 'react';

const Countdown = () => {
  const [days, setDays] = useState('0');
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [seconds, setSeconds] = useState('0');

  const countDownDate = new Date('March 22, 2022 15:37:25').getTime();

  const x = setInterval(function () {
    const now = new Date().getTime();

    const distance = countDownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const daysString = days < 10 ? `0${days}` : `${days}`;
    const hoursString = hours < 10 ? `0${hours}` : `${hours}`;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsString = seconds < 10 ? `0${seconds}` : `${seconds}`;

    setDays(daysString);
    setHours(hoursString);
    setMinutes(minutesString);
    setSeconds(secondsString);

    if (distance < 0) {
      clearInterval(x);
      setDays('0');
      setHours('0');
      setMinutes('0');
      setSeconds('0');
    }
  }, 1000);

  return (
    <div className="flex my-7">
      <div
        style={{
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
        }}
        className="w-16 h-16 flex justify-center items-center mr-3 font-semibold text-3xl"
      >
        {days}
      </div>
      <div
        style={{
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
        }}
        className="w-16 h-16 flex justify-center items-center mr-3 font-semibold text-3xl"
      >
        {hours}
      </div>
      <div
        style={{
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
        }}
        className="w-16 h-16 flex justify-center items-center mr-3 font-semibold text-3xl"
      >
        {minutes}
      </div>
      <div
        style={{
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
        }}
        className="w-16 h-16 flex justify-center items-center mr-3 font-semibold text-3xl"
      >
        {seconds}
      </div>
    </div>
  );
};

export default Countdown;
