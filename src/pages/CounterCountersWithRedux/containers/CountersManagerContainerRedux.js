import {useCallback} from "react";
import {NavBar} from "../components/NavBar";

import {useDispatch, useSelector} from "react-redux";
import * as actions from "../actions/actions";
import {totalCountersCount} from "../selectors";
import {CounterView} from "../../Counter/CounterLayout/CounterCiew";
import style from "./index.module.css";

export const CountersManagerContainerRedux= () => {
  const dispatch = useDispatch();

  const totalValue = useSelector(totalCountersCount);
  const { counters } = useSelector(
    (state) => state.countersManagerPage
  );

  const handleCreateNewCounter = useCallback(() => {
    dispatch(actions.CREATE_COUNTER());
  }, [dispatch]);

  const handleRemoveLastCounter = useCallback(() => {
    dispatch(actions.REMOVE_LAST_COUNTER());
  }, [dispatch]);

  const handleResetAllCounters = useCallback(() => {
    dispatch(actions.RESET_ALL_COUNTERS());
  }, [dispatch]);

  const handleIncrementCounter = useCallback((currentID) => {
    dispatch(actions.INCREMENT_COUNTER(currentID));
  }, [dispatch]);

  const handleDecrementCounter = useCallback((currentID) => {
    dispatch(actions.DECREMENT_COUNTER(currentID));
  }, [dispatch]);

  const handleResetCounter = useCallback((currentID) => {
    dispatch(actions.RESET_CURRENT_COUNTER(currentID));
  }, []);

  const handleRemoveCounter = useCallback((currentID) => {
    dispatch(actions.REMOVE_CURRENT_COUNTER(currentID));
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
