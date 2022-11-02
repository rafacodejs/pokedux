import React from 'react';

const Card = ({ name }) => {
  return (
    <div className='w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] m-2 sm:m-4 rounded-md shadow-xl bg-primary'>
      <div className='flex justify-center items-center flex-col'>
        <img src='' alt='foto' />
        <h1 className='text-[20px] sm:text-[24px] font-primary font-medium p-2'>
          {name}
        </h1>
        <div className='flex flex-row'>
          <h3>Normal</h3>
          <h3>Fire</h3>
        </div>
      </div>
    </div>
  );
};

export { Card };
