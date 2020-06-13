import {
    NOTE_PENDING,
    NOTE_REJECTED,
    NOTE_FULFILLED,
    FETCHED_NOTE_PENDING,
    FETCHED_NOTE_FULFILLED,
    FETCHED_NOTE_REJECTED
} from '../actions/noteAction';

const initialState = {
    myNote: "",
    done: false,
    fetching: false
}

export default (state = initialState, action) => {

    switch (action.type) {
        case NOTE_PENDING:
            return {

                ...state,
                fetching: true

            }
        case NOTE_FULFILLED:
            return {
                ...state,
                myNote: action.payload,
                fetching: false,
                done: true

            }
        case NOTE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }
        case FETCHED_NOTE_PENDING:
            return {

                ...state,
                fetching: true

            }
        case FETCHED_NOTE_FULFILLED:
            return {
                ...state,
                myNote: action.payload,
                fetching: false,
                done: true

            }
        case FETCHED_NOTE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }
        default: return state
    }
}