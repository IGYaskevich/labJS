import {createSelector} from "reselect";

const countersSelector = (state) => {
  return state.countersManagerPage.counters;
};

export const totalCountersCount = createSelector(
  countersSelector,
  (counters) => {
    return counters.reduce(
      (result, counter) => counter.value + result,
      0
    );
  }
);
