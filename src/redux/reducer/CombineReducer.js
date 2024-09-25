import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import DoctorReducer from './DoctorReducer';

const rootReducer = combineReducers({
    auth: AuthReducer,
    doctor: DoctorReducer
});

export default rootReducer;
