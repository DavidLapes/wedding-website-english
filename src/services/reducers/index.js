import {combineReducers} from "redux";

import {fetchGuestsReducer} from "./guests/fetchGuests";
import {submitRSVPReducer} from "./guests/submitRSVP";

const reducers = () => combineReducers({
    fetchGuests: fetchGuestsReducer,
    submitRSVP: submitRSVPReducer
})

export default reducers;
