import { createAction } from "redux-actions";

export const GET_POKEMON_REQUEST: any = createAction<any>(
  "GET_POKEMON_REQUEST"
);
export const GET_POKEMON_SUCCESS: any = createAction<any>(
  "GET_POKEMON_SUCCESS"
);
export const GET_POKEMON_FAIL: any = createAction<any>("GET_POKEMON_FAIL");
