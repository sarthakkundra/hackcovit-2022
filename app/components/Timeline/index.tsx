import React from 'react';

const index = () => {
  return (
    <>
      <h1 className="text-xl md:text-4xl font-semibold text-secondary text-center mt-16">
        Schedule
      </h1>
      <div className="container bg-gray-200 mx-auto w-full h-full">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border"
            style={{ left: '50%' }}
          ></div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-lg text-white bg-lightBlack rounded-full">
                1
              </h1>
            </div>
            <div
              className={`order-1 bg-lightBlack shadow-xl w-5/12 sm:w-5/12 px-2 md:px-6 py-4 gradient-box`}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-sm md:text-xl">
                Registrations Begin 21 Feb 00:00 IST
              </h3>
              <p className="text-xs sm:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Participants can start registering for the hackathon.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg bg-lightBlack rounded-full">
                2
              </h1>
            </div>
            <div className="order-1 bg-lightBlack rounded-lg shadow-xl w-5/12 px-2 md:px-6 py-4 gradient-box">
              <h3 className="mb-3 font-bold text-white text-sm md:text-xl">
                Registrations Closed 01 Apr 11:59 IST
              </h3>
              <p className="text-xs md:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                Registrations for the hackathon are closed.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto font-semibold bg-lightBlack rounded-full text-lg text-white">
                3
              </h1>
            </div>
            <div className="order-1 bg-lightBlack rounded-lg shadow-xl w-5/12 px-2 md:px-6 py-4 gradient-box">
              <h3 className="mb-3 font-bold text-gray-800 text-sm md:text-xl">
                Main Event 09 Apr 00:00 - 10 Apr 12:00 IST
              </h3>
              <p className="text-xs md:text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                Participants can start building upon their ideas.
              </p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
              <h1 className="mx-auto text-white font-semibold text-lg bg-lightBlack rounded-full">
                4
              </h1>
            </div>
            <div className="order-1 bg-lightBlack rounded-lg shadow-xl w-5/12 px-2 md:px-6 py-4 gradient-box">
              <h3 className="mb-3 font-bold text-white text-sm md:text-xl">
                Result Declaration 11 Apt 16:00 IST
              </h3>
              <p className="text-xs md:text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
                The winners of the hackathon are announced.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
