import { FC, useCallback, useState } from "react";
import { NavBar } from "../components/NavBar";

import { CounterView } from "../../Counter/CounterLayout/CounterView";
import { v1 as uuidV1 } from "uuid";

import style from "./style.module.css";

type CountersType = {
  value: number;
  id: string;
};

export const CountersManagerContainer: FC = () => {
  const [counters, setCounters] = useState<Array<CountersType>>([]);

  const handleCreateNewCounter = useCallback(() => {
    const newCounter = { value: 0, id: uuidV1() };

    setCounters((state) => {
      let newState = [...state, newCounter];

      return newState.map((counter) =>
        counter.value % 2 === 0
          ? { ...counter, value: counter.value + 1 }
          : counter
      );
    });
  }, []);

  const handleRemoveLastCounter = useCallback(() => {
    setCounters((state) => {
      const stateCopy = [...state];
      stateCopy.pop();

      return stateCopy.map((counter) =>
        counter.value % 2 !== 0
          ? { ...counter, value: counter.value - 1 }
          : counter
      );
    });
  }, []);

  const handleResetAllCounters = useCallback(() => {
    setCounters([]);
  }, []);

  const handleIncrementCounter = useCallback((currentID: string) => {
    setCounters((state) =>
      state.map((counter) =>
        counter.id === currentID
          ? { value: counter.value + 1, id: currentID }
          : counter
      )
    );
  }, []);

  const handleDecrementCounter = useCallback((currentID: string) => {
    setCounters((state) =>
      state.map((counter) =>
        counter.id === currentID && counter.value > 0
          ? { value: counter.value - 1, id: currentID }
          : counter
      )
    );
  }, []);

  const handleResetCounter = useCallback((currentID: string) => {
    setCounters((state) =>
      state.map((counter) =>
        counter.id === currentID
          ? { value: (counter.value = 0), id: currentID }
          : counter
      )
    );
  }, []);

  const findTotalValueAllCounters = useCallback(() => {
    return counters.reduce((result, { value }) => {
      return result + value;
    }, 0);
  }, [counters]);

  const handleRemoveCounter = useCallback((id: string) => {
    setCounters((state) => state.filter((item) => item.id !== id));
  }, []);

  const totalValue = findTotalValueAllCounters();
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
        {counters.length < 1 && <h1>Without Redux</h1>}
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
