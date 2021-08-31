import axios from "axios";
import {GUEST_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";

export const FETCH_GUEST_BEGIN_REQUEST = "FETCH_GUEST_BEGIN_REQUEST";
export const FETCH_GUEST_SUCCESS = "FETCH_GUEST_SUCCESS";
export const FETCH_GUEST_ERROR = "FETCH_GUEST_ERROR";

export const fetchGuests = () => (dispatch, getState) => {
    if (canFetchGuests(getState())) {
        dispatch(fetchGuestsRequest());
        return axios.get(GUEST_URL)
            .then(json => dispatch(fetchGuestsSuccess(json.data.data)))
            .catch(err => dispatch(fetchGuestsError(getExceptionResponseMessage(err))))
    }
}

const canFetchGuests = (state) => {
    return state.fetchGuests.isReady;
}

const fetchGuestsRequest = () => ({
    type: FETCH_GUEST_BEGIN_REQUEST
})

const fetchGuestsSuccess = (data) => ({
    type: FETCH_GUEST_SUCCESS,
    data: data
})

const fetchGuestsError = message => ({
    type: FETCH_GUEST_ERROR,
    message: message
})
