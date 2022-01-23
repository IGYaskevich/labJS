import axios from "axios";

const instance = axios.create({
  baseURL: `https://pokeapi.co/api/v2`,
});

export const pokemonAPI = {
  getPokemons(pokemon: "pokemon") {
    return instance.get<any>(`/${pokemon}`);
  },
};

// const config = {
//   baseURL: `https://pokeapi.co/api/v2`,
// };
// export default axios.create(config);
