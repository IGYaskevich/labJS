import { handleActions } from "redux-actions";
import * as actions from "../actions/actions";
import { v1 as uuid } from "uuid";

export type CountersType = {
  value: number;
  id: string;
};
export type InitialStateType = {
  counters: Array<CountersType>;
};

const initialState: InitialStateType = {
  counters: [],
};

export const countersManagerReducer = handleActions<any>(
  {
    [actions.CREATE_COUNTER]: (state) => {
      const newCounter = { value: 0, id: uuid() };
      const counters = [...state.counters, newCounter];
      return { ...state, counters };
    },
    [actions.REMOVE_LAST_COUNTER]: (state) => {
      const counters = [...state.counters];
      counters.pop();
      return { ...state, counters };
    },
    [actions.RESET_ALL_COUNTERS]: (state) => {
      return { ...state, counters: [] };
    },
    [actions.REMOVE_CURRENT_COUNTER]: (state, { payload }) => {
      const countersCopy = [...state.counters];
      const counterIndex = countersCopy.findIndex(
        (counter) => counter.id === payload
      );
      countersCopy.splice(counterIndex, 1);

      return { ...state, counters: countersCopy };
    },
    [actions.INCREMENT_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      const updatedCounter = counterCopy.find(
        (counter) => counter.id === payload
      );
      updatedCounter.value += 1;

      return { ...state, counters: counterCopy };
    },
    [actions.DECREMENT_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      const updatedCounter = counterCopy.find(
        (counter) => counter.id === payload
      );
      updatedCounter.value > 0
        ? (updatedCounter.value -= 1)
        : (updatedCounter.value = 0);

      return { ...state, counters: counterCopy };
    },
    [actions.RESET_CURRENT_COUNTER]: (state, { payload }) => {
      const counterCopy = [...state.counters];
      const updatedCounter = counterCopy.find(
        (counter) => counter.id === payload
      );
      updatedCounter.value = 0;
      return { ...state, counters: counterCopy };
    },
  },
  initialState
);
