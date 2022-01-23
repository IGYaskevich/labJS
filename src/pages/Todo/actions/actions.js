import {createAction} from "redux-actions";

export const CREATE_TASK = createAction("CREATE_TASK");
export const REMOVE_TASK = createAction("REMOVE_TASK");
export const EXECUTE_TASK = createAction("EXECUTE_TASK");
export const TURN_EDIT_MODE = createAction("TURN_EDIT_MODE");
export const CANCEL_CHANGES = createAction("CANCEL_CHANGES");
export const SAVE_CHANGES = createAction("SAVE_CHANGES");
