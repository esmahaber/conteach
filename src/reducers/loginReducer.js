import {LOGIN_USER_PENDING,
    LOGIN_USER_REJECTED,
    LOGIN_USER_FULFILLED,
    PROFILE_BUTTON,
    SETTINGS_BUTTON
} from '../actions/loginActions';

const initialState = {
	eposta: "",
    sifre:"",
    fetching: false,
    done: false,
  
    token: ""
},
button = {
    profileButton: false,
    settingsButton: false
}

export default (state = initialState, action, buttons = button)=> {

    switch (action.type){
        case LOGIN_USER_PENDING:
            return{
                
                ...state,
                fetching: true

            }
        case LOGIN_USER_FULFILLED:
            return{
                ...state,
                user: action.payload,
                fetching: false,
                done: true

            }
            case LOGIN_USER_REJECTED:
            return{
                ...state,
                error: action.payload,
                fetching: false

            }

            // buttons case
            case PROFILE_BUTTON:
            return{
                profileButton: true        
            }

            case SETTINGS_BUTTON:
                return{
                    settingsButton: true
                }
        default: return state
    }
}