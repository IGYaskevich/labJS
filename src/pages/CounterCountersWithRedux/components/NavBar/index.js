import { FC, memo } from "react";

import { Button } from "../../../../components/ButtonForCounter";

import style from "./index.module.css";

type NavBarType = {
  handleCreateNewCounter: () => void;
  handleRemoveLastCounter: () => void;
  handleResetAllCounters: () => void;
};

export const NavBar: FC<NavBarType> = memo(
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
