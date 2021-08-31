import {createStore, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension";
import reducers from "./services/reducers/index";

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        reducers(),
        preloadedState,
        composeWithDevTools(
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
            )
        )
    )
}
