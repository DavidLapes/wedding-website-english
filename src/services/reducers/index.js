import {combineReducers} from "redux";

import {fetchGuestsReducer} from "./guests/fetchGuests";

const reducers = () => combineReducers({
    fetchGuests: fetchGuestsReducer
})

export default reducers;
