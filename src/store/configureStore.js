import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

import {rootReducer} from "./rootReducer";
import rootSaga from "./rootSaga";


// const configureStore = () => {
//   return createStore(rootReducer, composeWithDevTools());
// };
// export const store = configureStore();
//
const sageMiddleware = createSagaMiddleware();

const configureStore = () => {
    return createStore(
        rootReducer,
        {},
        composeWithDevTools(applyMiddleware(sageMiddleware))
    );
    sageMiddleware.run(rootSaga);
};
export const store = configureStore();
