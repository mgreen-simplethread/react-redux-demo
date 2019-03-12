import { combineReducers } from 'redux';
import tasks from './tasks';
import ipAddress from './ip-address';
import counter from './counter';

export default combineReducers({
  tasks,
  counter,
  ipAddress,
});
