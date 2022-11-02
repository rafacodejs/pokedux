import React from 'react';
import { Card } from './Card';

const List = ({ pokemons }) => {
  return (
    <section className='text-white flex flex-wrap justify-center items-center p-2'>
      {pokemons.map((poke) => (
        <Card  />
      ))}
    </section>
  );
};

List.defaultProps = {
  pokemons: Array(10).fill(''),
};

export { List };
