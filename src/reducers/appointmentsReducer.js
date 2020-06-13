import {
    APPOINTMENT_PENDING,
    APPOINTMENT_FULFILLED,
    APPOINTMENT_REJECTED,
    FETCHED_APPOINTMENT,
    APPOINTMENTDELETE_PENDING,
    APPOINTMENTDELETE_FULFILLED,
    APPOINTMENTDELETE_REJECTED,
    FETCHED_APPOINTMENT_ERROR
} from '../actions/appointmentActions';

const initialState = {
    k_id: "",
    randevu_sahibi: "",
    kullanici_notu: "",
    randevu_bitis: "",
    randevu_baslangic: "",
    fetching: false,
    done: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case APPOINTMENT_PENDING:
            return {
                ...state,
                fetching: true

            }
        case APPOINTMENT_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false,
                done: true

            }
        case APPOINTMENT_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }

        case FETCHED_APPOINTMENT:
            return {
                ...state,
                appointment: action.payload,
                fetching: false

            }

            case FETCHED_APPOINTMENT_ERROR:
                return {
                    ...state,
                    appointment: action.payload,
                    fetching: false
    
                }
    

        case APPOINTMENTDELETE_PENDING:
            return {
                ...state,
                fetching: true

            }
        case APPOINTMENTDELETE_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false,

            }
        case APPOINTMENTDELETE_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }
        default: return state
    }
}