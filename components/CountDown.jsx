import React from 'react';
import Countdown from 'react-countdown';

// Countdown renderer function
const CountDown = ({ dealEndTime }) => {
  const renderer = ({ days, hours, minutes, seconds, completed}) => {
    if (completed) {
      return <span>Deal has ended!</span>;
    } else {
      return (
        <div className='my-4 flex justify-center items-center'>
          <div className='bg-white rounded-full text-xl text-black min-w-[5rem] h-[5rem] flex flex-col justify-center items-center mx-3'>
            <span className='font-bold'>{hours.toString().padStart(2, '0')}</span>
            <span className='text-sm'>Hours</span>
          </div>
          <div className='bg-white rounded-full text-xl text-black min-w-[5rem] h-[5rem] flex flex-col justify-center items-center mx-3'>
            <span className='font-bold'>{days.toString().padStart(2, '0')}</span>
            <span className='text-sm'>Days</span>
          </div>
          <div className='bg-white rounded-full text-xl text-black min-w-[5rem] h-[5rem] flex flex-col justify-center items-center mx-3'>
            <span className='font-bold'>{minutes.toString().padStart(2, '0')}</span>
            <span className='text-sm'>Minutes</span>
          </div>
          <div className='bg-white rounded-full text-xl text-black min-w-[5rem] h-[5rem] flex flex-col justify-center items-center mx-3'>
            <span className='font-bold'>{seconds.toString().padStart(2, '0')}</span>
            <span className='text-sm'>Second</span>
          </div>
        </div>
      );
    }
  };

  return (
    <div className='mx-3'>
      {/* <h2>Hurry up! Limited Time Deal</h2> */}
      <Countdown date={dealEndTime} renderer={renderer} />
    </div>
  );
};

export default CountDown;
