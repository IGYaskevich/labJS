import * as actions from "../actions/actions";
import { put, call, takeEvery } from "redux-saga/effects";
import { PokemonService } from "../services/pokemonService";

//@ts-ignore
function* pokemonPageWorker({ payload }) {
  try {
    const response = call(PokemonService.getPokemon);

    yield put(actions.GET_POKEMON_SUCCESS(response));
  } catch (error) {
    yield put(actions.GET_POKEMON_FAIL(error));
  }
}

function* pokemonPageWatcher() {
  yield takeEvery(actions.GET_POKEMON_REQUEST, pokemonPageWorker);
}
