import {submitRSVP} from "../../actions"
import {showErrorPopup, showSuccessPopup} from "../../popups/popup";

const initialRSVPState = {
    isReady: true
}

export function submitRSVPReducer(state = initialRSVPState, action) {
    switch(action.type) {
        case submitRSVP.SUBMIT_RSVP_BEGIN_REQUEST:
            return {
                isReady: false
            }
        case submitRSVP.SUBMIT_RSVP_SUCCESS:
            showSuccessPopup()
            return {
                isReady: true
            }
        case submitRSVP.SUBMIT_RSVP_ERROR:
            showErrorPopup(action.message)
            return {
                isReady: true
            }
        default:
            return state;
    }
}
