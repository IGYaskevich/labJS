import { AppStateType } from "../../../store/rootReducer";
import { createSelector } from "reselect";
import { CountersType } from "../reducers/reducers";

const countersSelector = (state: AppStateType) => {
  return state.countersManagerPage.counters;
};

export const totalCountersCount = createSelector(
  countersSelector,
  (counters) => {
    return counters.reduce(
      (result: number, counter: CountersType) => counter.value + result,
      0
    );
  }
);
