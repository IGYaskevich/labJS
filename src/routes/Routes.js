import {ROUTE_NAMES} from "./routeNames";

import {
    CountersManagerContainerRedux
} from "../pages/CounterCountersWithRedux/containers/CountersManagerContainerRedux";
import {CountersManagerContainer} from "../pages/CounterCouters/containers/CountersManagerCountainer";
import {Counter} from "../pages/Counter/containers/Counter";
import {LayoutPage} from "../pages/SiteLayout/LayoutPage";
import {PokemonPageContainer} from "../pages/Pokemons/containers/PokemonPageContainer";
import {Routes, Route} from "react-router-dom";
import {TodoContainer} from "../pages/Todo/container";

export const Router = () => {
    const {
        COUNTER_MANAGER_REDUX,
        COUNTER_MANAGER,
        COUNTER,
        LAYOUT,
        TODO,
        POKEMON,
    } = ROUTE_NAMES;
    return (
        <Routes>
            <Route
                path={COUNTER_MANAGER_REDUX}
                element={<CountersManagerContainerRedux/>}
            />
            <Route path={COUNTER_MANAGER} element={<CountersManagerContainer/>}/>
            <Route path={COUNTER} element={<Counter isShow={false}/>}/>
            <Route path={LAYOUT} element={<LayoutPage/>}/>
            <Route path={LAYOUT} element={<LayoutPage/>}/>
            <Route path={TODO} element={<TodoContainer/>}/>
            <Route path={POKEMON} element={<PokemonPageContainer/>}/>
        </Routes>
    );
};
