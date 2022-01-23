import { InitialStateTaskManagerType } from "../reducers/reducer";
import { AppStateType } from "../../../store/rootReducer";
import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import * as actions from "../actions/actions";

import { TaskForm } from "../components/TaskForm/TaskForm";
import { TaskManager } from "../components/TaskManager/TaskManager";
import style from "./styles.module.scss";

export const TodoContainer = () => {
  const dispatch = useDispatch();
  const { tasksList } = useSelector<AppStateType, InitialStateTaskManagerType>(
    (state) => state.tasksManagerPage
  );

  const handleCreateNewTask = useCallback(
    (title: string) => {
      dispatch(actions.CREATE_TASK(title));
    },
    [dispatch]
  );

  const handleRemoveTask = useCallback(
    (currentID: string) => {
      dispatch(actions.REMOVE_TASK(currentID));
    },
    [dispatch]
  );

  const handleIsDone = useCallback(
    (currentID: string) => {
      dispatch(actions.EXECUTE_TASK(currentID));
    },
    [dispatch]
  );
  const handleEditMode = useCallback(
    (currentID: string) => {
      dispatch(actions.TURN_EDIT_MODE(currentID));
    },
    [dispatch]
  );
  const handleCancelChanges = useCallback(
    (currentID: string) => {
      dispatch(actions.CANCEL_CHANGES(currentID));
    },
    [dispatch]
  );

  const handleChangeTask = useCallback(
    (currentID: string, title: string) => {
      dispatch(actions.SAVE_CHANGES({ currentID, title }));
    },
    [dispatch]
  );

  return (
    <div className={style.container}>
      <TaskForm handleCreateNewTask={handleCreateNewTask} />
      <TaskManager
        tasksList={tasksList}
        handleRemoveTask={handleRemoveTask}
        handleIsDone={handleIsDone}
        handleEditMode={handleEditMode}
        handleCancelChanges={handleCancelChanges}
        handleChangeTask={handleChangeTask}
      />
    </div>
  );
};
