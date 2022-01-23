import {
  ChangeEvent,
  FC,
  memo,
  MouseEvent,
  useCallback,
  useState,
} from "react";

import { Button, Alert, TextField } from "@mui/material";
import { icons } from "../../../../static/iconsForTodo/icons";
import style from "./styles.module.scss";

type TaskFormType = {
  handleCreateNewTask: (title: string) => void;
};
export const TaskForm: FC<TaskFormType> = memo(({ handleCreateNewTask }) => {
  const [taskName, setTaskName] = useState("");
  const [error, setError] = useState(false);
  const onChangeTitle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTaskName(event.target.value);
    },
    [setTaskName]
  );

  const handleCreateTask = useCallback(
    (event: MouseEvent) => {
      event.preventDefault();
      if (taskName.length >= 4) {
        setError(false);
        handleCreateNewTask(taskName);
        setTaskName("");
      } else {
        setError(true);
      }
    },
    [handleCreateNewTask, taskName]
  );
  return (
    <div className={style.container}>
      <div className={style.navBar}>
        <div className={style.inputBlock}>
          <TextField
            className={style.input}
            id="outlined-basic"
            label="Enter task name"
            variant="outlined"
            color={"secondary"}
            value={taskName}
            onChange={onChangeTitle}
          />
        </div>
        <div className={style.buttonBlock}>
          <Button
            className={style.button}
            size={"medium"}
            variant="contained"
            endIcon={<icons.AddIcon />}
            color={"secondary"}
            onClick={handleCreateTask}
          >
            Create task
          </Button>
          {error && (
            <Alert className={style.error} severity="error">
              Need enter 4 symbol
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
});
