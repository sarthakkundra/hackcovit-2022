import React from 'react';
import { prizeValues } from './index.constants';

interface IPrize {
  position: string;
  award: string;
  icon: any;
}
const prizeCard = (prize: IPrize) => {
  return (
    <div className="flex flex-col my-4 justify-start items-center py-12 px-14 bg-lightBlack gradient-box">
      <img src={prize.icon} className="w-24" />
      <p className="text-white font-bold my-2">{prize.position}</p>
      <p className="text-white">{prize.award}</p>
    </div>
  );
};
const index = () => {
  return (
    <>
      <h1 className="text-xl md:text-4xl font-semibold text-secondary text-center mb-8 mt-16">
        Prizes
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center">
        {prizeValues.map((prize: IPrize) => (
          <>{prizeCard(prize)}</>
        ))}
      </div>
    </>
  );
};

export default index;
