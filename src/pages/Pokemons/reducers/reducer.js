import * as actions from "../actions/actions";
import { handleActions } from "redux-actions";

type InitialStateType = {
  pokemonList: Array<any>;
  isLoading: boolean;
  errors: null | string;
};
const initialState = {
  pokemonList: [],
  isLoading: false,
  errors: null,
};

export const pokemonPageReducer = handleActions<InitialStateType, any>(
  {
    [actions.GET_POKEMON_REQUEST]: (state) => {
      return { ...state, isLoading: true };
    },
    [actions.GET_POKEMON_SUCCESS]: (state, { payload: pokemonList }) => {
      return { ...state, isLoading: false, pokemonList: pokemonList };
    },
    [actions.GET_POKEMON_FAIL]: (state, { payload: error }) => {
      return { ...state, isLoading: false, errors: error };
    },
  },
  initialState
);
