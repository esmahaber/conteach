import { combineReducers } from 'redux';
import LoginUser from './loginReducer';
import RegisterUser from './registerReducer';
import Appointment from './appointmentsReducer';
import Note from './noteReducer';




export default combineReducers({
    LoginUser,
    RegisterUser,
    Appointment,
    Note

})