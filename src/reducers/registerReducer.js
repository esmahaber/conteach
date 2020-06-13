import {
    REGISTER_USER_PENDING,
    REGISTER_USER_FULFILLED,
    REGISTER_USER_REJECTED,
    UPDATE_USER_PENDING,
    UPDATE_USER_FULFILLED,
    UPDATE_USER_REJECTED,
} from '../actions/registerActions';

const initialState = {
    isim: "",
    soyisim: "",
    eposta: "",
    dogum_tarihi: "",
    ogr_no:"",
    sifre: "",

    fetching: false,
    done: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER_PENDING:
            return {
                ...state,
                fetching: true

            }
        case REGISTER_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false,
                done: true
                

            }
        case REGISTER_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }
            case UPDATE_USER_PENDING:
            return {
                ...state,
                fetching: true

            }
        case UPDATE_USER_FULFILLED:
            return {
                ...state,
                user: action.payload,
                fetching: false

            }
        case UPDATE_USER_REJECTED:
            return {
                ...state,
                error: action.payload,
                fetching: false

            }
        default: return state
    }
}