import { createAction } from "redux-actions";

export const CREATE_COUNTER: any = createAction("CREATE_COUNTER");
export const REMOVE_LAST_COUNTER: any = createAction("REMOVE_LAST_COUNTER");
export const RESET_ALL_COUNTERS: any = createAction("RESET_ALL_COUNTERS");
export const INCREMENT_COUNTER: any = createAction("INCREMENT_COUNTER");
export const DECREMENT_COUNTER: any = createAction("DECREMENT_COUNTER");
export const RESET_CURRENT_COUNTER: any = createAction("RESET_CURRENT_COUNTER");
export const REMOVE_CURRENT_COUNTER: any = createAction(
  "RESET_CURRENT_COUNTER"
);
