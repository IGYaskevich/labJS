import { createAction } from "redux-actions";
import { TaskType } from "../reducers/reducer";

export const CREATE_TASK: any = createAction<TaskType>("CREATE_TASK");
export const REMOVE_TASK: any = createAction<TaskType>("REMOVE_TASK");
export const EXECUTE_TASK: any = createAction<TaskType>("EXECUTE_TASK");
export const TURN_EDIT_MODE: any = createAction<TaskType>("TURN_EDIT_MODE");
export const CANCEL_CHANGES: any = createAction<TaskType>("CANCEL_CHANGES");
export const SAVE_CHANGES: any = createAction<TaskType>("SAVE_CHANGES");
