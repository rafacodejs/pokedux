import React, { useEffect, useState } from 'react';
import { getPokemon } from '../API';
import { Header, Search, List } from '../components';

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Search />
      <List pokemons={pokemons} />
    </div>
  );
};

export { App };
