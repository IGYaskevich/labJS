import {memo, useCallback, useState,} from "react";

import {icons} from "../../../../static/iconsForTodo/icons";
import {Paper, TextField} from "@mui/material";
import style from "./styles.module.scss";

export const TaskEditMode= memo(
  ({ title, id, handleCancelChanges, handleChangeTask }) => {
    const [taskName, setTaskName] = useState(title);

    const onChangeTitle = useCallback(
      (event) => {
        setTaskName(event.target.value);
      },
      [setTaskName]
    );
    const handleSaveChanges = useCallback(
      (event) => {
        event.preventDefault();
        handleChangeTask(id, taskName);
        setTaskName("");
      },
      [handleChangeTask, id, taskName]
    );
    const handleCancel = useCallback(() => {
      handleCancelChanges(id);
      setTaskName(title);
    }, [handleCancelChanges, id, title]);

    return (
      <div className={style.container}>
        <Paper className={style.paper} elevation={3}>
          <div className={style.inputBlock}>
            <TextField
              className={style.input}
              id="outlined-basic"
              label="Enter your changes"
              variant="outlined"
              color={"secondary"}
              value={taskName}
              onChange={onChangeTitle}
            />
          </div>
          <div className={style.navBar}>
            <icons.SaveIcon onClick={handleSaveChanges} />
            <icons.CancelIcon onClick={handleCancel} />
          </div>
        </Paper>
      </div>
    );
  }
);
