import { createAction } from "redux-actions";

export const CREATE_COUNTER= createAction("CREATE_COUNTER");
export const REMOVE_LAST_COUNTER= createAction("REMOVE_LAST_COUNTER");
export const RESET_ALL_COUNTERS= createAction("RESET_ALL_COUNTERS");
export const INCREMENT_COUNTER= createAction("INCREMENT_COUNTER");
export const DECREMENT_COUNTER= createAction("DECREMENT_COUNTER");
export const RESET_CURRENT_COUNTER= createAction("RESET_CURRENT_COUNTER");
export const REMOVE_CURRENT_COUNTER= createAction(
  "REMOVE_CURRENT_COUNTER"
);
