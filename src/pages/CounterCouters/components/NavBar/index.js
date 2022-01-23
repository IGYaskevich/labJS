import {memo} from "react";

import {Button} from "../../../../components/ButtonForCounter";

import style from "./index.module.css";


export const NavBar = memo(
  ({
    handleCreateNewCounter,
    handleRemoveLastCounter,
    handleResetAllCounters,
  }) => {
    return (
      <div className={style.container}>
        <div className={style.buttons}>
          <Button title={"Add Counter"} method={handleCreateNewCounter} />
          <Button title={"Remove Counter"} method={handleRemoveLastCounter} />
          <Button title={"Reset"} method={handleResetAllCounters} />
        </div>
      </div>
    );
  }
);
