import React from 'react';

const Pokemon = (props) => {

  const pokemonNames = props.pokeData.map(e => <li className={e.id}>{e.name}</li>);

  return (
    <ul>
      {pokemonNames}
    </ul>
  )
};

export default Pokemon;