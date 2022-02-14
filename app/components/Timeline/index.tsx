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
              className={`order-1 bg-lightBlack shadow-xl w-5/12 px-6 py-4 gradient-box`}
            >
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Registrations Begin
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
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
            <div className="order-1 bg-lightBlack rounded-lg shadow-xl w-5/12 px-6 py-4 gradient-box">
              <h3 className="mb-3 font-bold text-white text-xl">
                Registrations Closed
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
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
            <div className="order-1 bg-lightBlack rounded-lg shadow-xl w-5/12 px-6 py-4 gradient-box">
              <h3 className="mb-3 font-bold text-gray-800 text-xl">
                Main Event
              </h3>
              <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
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
            <div className="order-1 bg-lightBlack rounded-lg shadow-xl w-5/12 px-6 py-4 gradient-box">
              <h3 className="mb-3 font-bold text-white text-xl">
                Result Declaration
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide text-white text-opacity-100">
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
