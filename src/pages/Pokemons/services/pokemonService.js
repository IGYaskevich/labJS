import { pokemonAPI } from "../api/config";

export class PokemonService {
  static getPokemon() {
    return pokemonAPI.getPokemons("pokemon");
  }
}
