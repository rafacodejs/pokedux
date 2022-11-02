import React from 'react';
import { BiSearch } from 'react-icons/bi';

const Search = () => {
  return (
    <section className='flex justify-center items-center'>
      <form
        className={`
          mb-5 px-4 relative bottom-6 xs:bottom-0 
         
       `}
      >
        <div className='relative top-7 xs:top-0'>
          <BiSearch className='absolute top-0 bottom-0 w-8 h-8 my-auto text-black left-2' />
          <input
            type='text'
            placeholder='Search'
            className='w-full h-[65px] py-3 pl-12 pr-4 text-black text-[16px] font-primary font-medium rounded-xl outline-none border-none bg-secondary placeholder:text-gray-700 xs:w-[470px] xs:text-[22px] shadow-2xl '
          />
        </div>
      </form>
    </section>
  );
};

export { Search };
