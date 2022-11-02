import React, { Profiler } from 'react';
import { Card } from './Card';

const List = ({ pokemons }) => {
  console.log(pokemons);
  return (
    <section className='text-white flex flex-wrap justify-center items-center p-2'>
      {pokemons.map((poke) => {
        return <Card key={poke.name} name={poke.name} />;
      })}
    </section>
  );
};

export { List };
