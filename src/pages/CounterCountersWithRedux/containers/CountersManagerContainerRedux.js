import { FC, useCallback } from "react";
import { NavBar } from "../components/NavBar";

import style from "./index.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AppStateType } from "../../../store/rootReducer";
import { InitialStateType } from "../reducers/reducers";
import * as actions from "../actions/actions";
import { CounterView } from "../../Counter/CounterLayout/CounterView";
import { totalCountersCount } from "../selectors";

export const CountersManagerContainerRedux: FC = () => {
  const dispatch = useDispatch();

  const totalValue = useSelector(totalCountersCount);
  const { counters } = useSelector<AppStateType, InitialStateType>(
    (state) => state.countersManagerPage
  );

  const handleCreateNewCounter = useCallback(() => {
    dispatch(actions.CREATE_COUNTER());
  }, []);

  const handleRemoveLastCounter = useCallback(() => {
    dispatch(actions.REMOVE_LAST_COUNTER());
  }, []);

  const handleResetAllCounters = useCallback(() => {
    dispatch(actions.RESET_ALL_COUNTERS());
  }, []);

  const handleIncrementCounter = useCallback((currentID: string) => {
    dispatch(actions.INCREMENT_COUNTER(currentID));
  }, []);

  const handleDecrementCounter = useCallback((currentID: string) => {
    dispatch(actions.DECREMENT_COUNTER(currentID));
  }, []);

  const handleResetCounter = useCallback((currentID: string) => {
    dispatch(actions.RESET_CURRENT_COUNTER(currentID));
  }, []);

  const handleRemoveCounter = useCallback((id: string) => {
    dispatch(actions.REMOVE_CURRENT_COUNTER(id));
  }, []);

  const totalCounters = counters.length;

  return (
    <div className={style.counterCounters}>
      <NavBar
        handleCreateNewCounter={handleCreateNewCounter}
        handleRemoveLastCounter={handleRemoveLastCounter}
        handleResetAllCounters={handleResetAllCounters}
      />
      <div className={style.information}>
        <div>Counters: {totalCounters}</div>
        <div>Total value: {totalValue}</div>
      </div>
      <div className={style.counters}>
        {counters.length < 1 && <h1>With Redux</h1>}
        {counters.map(({ id, value }) => (
          <CounterView
            handleIncrement={handleIncrementCounter}
            handleDecrement={handleDecrementCounter}
            handleReset={handleResetCounter}
            handleRemoveCounter={handleRemoveCounter}
            currentID={id}
            currentValue={value}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};
