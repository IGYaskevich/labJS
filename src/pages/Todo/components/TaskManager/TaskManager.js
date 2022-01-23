import { FC, memo } from "react";
import { TaskType } from "../../reducers/reducer";

import { Task } from "../Task/Task";
import { TaskEditMode } from "../TaskEditMode/TaskEditMode";
import style from "./styles.module.scss";

type TaskManagerType = {
  tasksList: Array<TaskType>;
  handleRemoveTask: (currentID: string) => void;
  handleIsDone: (currentID: string) => void;
  handleEditMode: (currentID: string) => void;
  handleCancelChanges: (currentID: string) => void;
  handleChangeTask: (currentID: string, title: string) => void;
};
export const TaskManager: FC<TaskManagerType> = memo(
  ({
    tasksList,
    handleRemoveTask,
    handleIsDone,
    handleEditMode,
    handleCancelChanges,
    handleChangeTask,
  }) => {
    return (
      <div className={style.taskManager}>
        {tasksList.map(({ title, id, isDone, editMode }) =>
          editMode ? (
            <TaskEditMode
              title={title}
              id={id}
              handleCancelChanges={handleCancelChanges}
              handleChangeTask={handleChangeTask}
              key={id}
            />
          ) : (
            <Task
              title={title}
              id={id}
              isDone={isDone}
              handleRemoveTask={handleRemoveTask}
              handleIsDone={handleIsDone}
              handleEditMode={handleEditMode}
              key={id}
            />
          )
        )}
      </div>
    );
  }
);
