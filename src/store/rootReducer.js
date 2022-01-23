import {combineReducers} from "redux";
import {countersManagerReducer} from "../pages/CounterCountersWithRedux/reducers/reducers";
import {taskManagerReducer} from "../pages/Todo/reducers/reducer";
import {pokemonPageReducer} from "../pages/Pokemons/reducers/reducer";

export const rootReducer = combineReducers({
    countersManagerPage: countersManagerReducer,
    tasksManagerPage: taskManagerReducer,
    pokemonPage: pokemonPageReducer,
});

