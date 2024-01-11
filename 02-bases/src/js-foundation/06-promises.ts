const { http } = require("../plugins"); //(3)

export const getPokemonById = async (id: string|number):Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  //PROMESAS (3) PATRON ADAPTADOR FETCH API
  const pokemon = await http.get(url);
  return pokemon.name;

  //PROMESAS (2) APLICANDO ASYN - AWAIT
  /*const resp = await fetch(url);
    const pokemon = await resp.json();

    //throw new Error('Pokemon no existe');
    return pokemon.name; */

  //PROMESAS (1)
  /* return fetch(url)
    .then( (resp) => resp.json())
    //.then( () => {throw new Error('Pokemon no existe') })
    .then( (pokemon) => pokemon.name); */
};

// module.exports = getPokemonById;
