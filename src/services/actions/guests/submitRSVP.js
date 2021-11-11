import axios from "axios";
import {GUEST_URL, DYNAMIC_RSVP_URL} from "../../../commons/apiCommons";
import {getExceptionResponseMessage} from "../../exception/translation";
import {fetchGuests} from "./fetchGuests";
import {removeEmpty} from "../../../lib/object";

export const SUBMIT_RSVP_BEGIN_REQUEST = "SUBMIT_RSVP_BEGIN_REQUEST";
export const SUBMIT_RSVP_SUCCESS = "SUBMIT_RSVP_SUCCESS";
export const SUBMIT_RSVP_ERROR = "SUBMIT_RSVP_ERROR";

export const submitRSVP = (id, rsvp) => (dispatch, getState) => {
    if(canCreateRSVP(getState())) {
        dispatch(submitRSVPRequest());
        return axios.post(GUEST_URL + "/" + id + DYNAMIC_RSVP_URL, removeEmpty({...rsvp, language: "english"}))
            .then(json => {
                dispatch(submitRSVPSuccess(json.data));
                dispatch(fetchGuests());
            })
            .catch(err => {
                let response = getExceptionResponseMessage(err);
                let message = "";
                if(response === undefined || response === '') {
                    message = "Have you really filled all required fields?"
                } else {
                    message = response;
                }
                dispatch(submitRSVPError(message));
            })
    }
}

const canCreateRSVP = (state) => {
    return state.submitRSVP.isReady;
}

const submitRSVPRequest = () => ({
    type: SUBMIT_RSVP_BEGIN_REQUEST
})

const submitRSVPSuccess = (data) => ({
    type: SUBMIT_RSVP_SUCCESS,
    data: data
})

const submitRSVPError = message => ({
    type: SUBMIT_RSVP_ERROR,
    message: message
})
