import React, { useState, useEffect } from 'react';
import './styles.css';
import { buttons } from './data';
import { getPokemon, filterPokemon } from '../services/services';

export function getPokemon() {
  const pokemonList = pokemons;
  return pokemonList;
}

export function filterPokemon(pokeType) {
  let filtredPokemon = getPokemon().filter(type => type.tipo === pokeType);
  return filtredPokemon;
}

//Dog, Cat, Supplies
export default function App() {
  const [filtredPokemon, setFiltredProducts] = useState(null);
  useEffect(() => {
    setFiltredProducts(getPokemon());
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== 'all'
      ? setFiltredPokemon(filterPokemon(typePokemon))
      : setFiltredPokemon(getPokemon());
  }

  return (
    <>
      {buttons &&
        buttons.map((type, index) => (
          <>
            <button key={index} value={type.value} onClick={handlePokemon}>
              {type.name}
            </button>
          </>
        ))}

      {filtredPokemon &&
        filtredPokemon.map(type => (
          <ul key={type.id}>
            <li>{type.nome}</li>
          </ul>
        ))}
    </>
  );
}
