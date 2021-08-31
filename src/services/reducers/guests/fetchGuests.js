import {fetchGuests} from "../../actions"
import {showErrorPopup} from "../../popups/popup";

const initialGuestState = {
    data: [],
    isReady: true
}

export function fetchGuestsReducer(state = initialGuestState, action) {
    switch (action.type) {
        case fetchGuests.FETCH_GUEST_BEGIN_REQUEST:
            return {
                ...state,
                isReady: false
            }
        case fetchGuests.FETCH_GUEST_SUCCESS:
            return {
                ...state,
                data: action.data,
                isReady: true
            }
        case fetchGuests.FETCH_GUEST_ERROR:
            showErrorPopup(action.message)
            return {
                ...state,
                isReady: true
            }
        default:
            return state;
    }
}
