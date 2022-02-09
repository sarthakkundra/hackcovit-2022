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
    <div className="flex my-7 justify-between md:justify-start">
      <TimeUnit unit="Days" value={days} />
      <TimeUnit unit="Hours" value={hours} />
      <TimeUnit unit="Minutes" value={minutes} />
      <TimeUnit unit="Seconds" value={seconds} />
    </div>
  );
};

const TimeUnit = ({ unit, value }: ITimeUnitProps) => {
  return (
    <div className="mr-3 text-center text-xs md:text-sm">
      <div
        style={{
          border: '2px solid',
          borderImage: 'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
        }}
        className="w-16 h-16 flex justify-center items-center font-semibold text-xl md:text-3xl mb-1"
      >
        {value}
      </div>
      {unit}
    </div>
  );
};

export default Countdown;

interface ITimeUnitProps {
  unit: string;
  value: string;
}
