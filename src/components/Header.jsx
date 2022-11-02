import React from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <section className='flex flex-row justify-between items-center p-6'>
      <div>
        <img src={logo} alt='logo' className='w-[170px] h-[65px]' />
      </div>
      <div>
        <button>Dark Mode</button>
      </div>
    </section>
  );
};

export { Header };
