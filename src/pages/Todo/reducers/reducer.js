import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";
import { v1 as uuid } from "uuid";

export type TaskType = {
  title: string;
  id: string;
  isDone: boolean;
  editMode: boolean;
};
export type InitialStateTaskManagerType = {
  tasksList: Array<TaskType>;
};
const initialState: InitialStateTaskManagerType = {
  tasksList: [],
};

export const taskManagerReducer = handleActions<
  InitialStateTaskManagerType,
  any
>(
  {
    [actions.CREATE_TASK]: (state, { payload: title }) => {
      const createdNewTask = {
        title: title,
        id: uuid(),
        isDone: false,
        editMode: false,
      };
      return { ...state, tasksList: [createdNewTask, ...state.tasksList] };
    },

    [actions.REMOVE_TASK]: (state, { payload: id }) => {
      const tasksList = [...state.tasksList];
      const taskIndex = tasksList.findIndex((task) => task.id === id);
      tasksList.splice(taskIndex, 1);

      return { ...state, tasksList };
    },
    [actions.EXECUTE_TASK]: (state, { payload: id }) => {
      const tasksList = [...state.tasksList];
      const updateTaskList = tasksList.map((task) =>
        task.id === id ? { ...task, isDone: !task.isDone } : task
      );
      return { ...state, tasksList: updateTaskList };
    },
    [actions.TURN_EDIT_MODE]: (state, { payload: id }) => {
      const tasksList = [...state.tasksList];

      const foundTask = tasksList.find((task) => task.id === id);
      if (foundTask) foundTask.editMode = !foundTask.editMode;

      return { ...state, tasksList };
    },
    [actions.CANCEL_CHANGES]: (state, { payload: id }) => {
      const tasksList = [...state.tasksList];

      const foundTask = tasksList.find((task) => task.id === id);
      if (foundTask) foundTask.editMode = !foundTask.editMode;

      return { ...state, tasksList };
    },
    [actions.SAVE_CHANGES]: (state, { payload }) => {
      const tasksList = [...state.tasksList];

      const foundTask = tasksList.find((task) => task.id === payload.currentID);
      if (foundTask) {
        foundTask.editMode = !foundTask.editMode;
        foundTask.title = payload.title;
      }
      return { ...state, tasksList: tasksList };
    },
  },
  initialState
);
