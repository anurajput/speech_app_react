import {combineReducers} from 'redux';

import {authentication} from './authentication.reducer';
import {registration} from './registration.reducer';
import {users} from './users.reducer';
import {alert} from './alert.reducer';
import {studies} from './studies.reducer';


const rootReducer = combineReducers({
  authentication,
  registration,
  users,
  alert,
  studies,
});

export default rootReducer;
