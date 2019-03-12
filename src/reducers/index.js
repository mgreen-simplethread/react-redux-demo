import { combineReducers } from 'redux';
import { TASK_ADD, TASK_REMOVE, COUNTER_INC, COUNTER_DEC, IP_RECEIVE, IP_RESET, IP_REQUEST } from '../actions';

function filter(obj, cb) {
  const output = {};
  Object.keys(obj)
    .filter((key) => cb(key, obj[key]))
    .forEach((key) => {
      output[key] = obj[key];
    });
  return output;
}

const initialState = {
  tasks: {},
  counter: 0,
  ipAddress: {
    value: '',
    loading: false,
  },
};

function tasks(state = initialState.tasks, action) {
  switch (action.type) {
    case TASK_ADD:
      const ids = Object.keys(state);
      const newId = parseInt(ids[ids.length - 1] || '0', 10) + 1;
      return {
        ...state,
        [newId]: action.task,
      };

    case TASK_REMOVE:
      return filter(state, (id) => parseInt(id, 10) !== action.index + 1);

    default:
      return state;
  }
}

function counter(state = initialState.counter, action) {
  switch (action.type) {
    case COUNTER_INC:
      return state + 1;

    case COUNTER_DEC:
      return state - 1;

    default:
      return state;
  }
}

function ipAddress(state = initialState.ipAddress, action) {
  switch (action.type) {
    case IP_REQUEST:
      return {
        value: '',
        loading: true,
      };

    case IP_RECEIVE:
      return {
        value: action.ip,
        loading: false,
      };

    case IP_RESET:
      return {
        value: '',
        loading: false,
      };

    default:
      return state;
  }
}

export default combineReducers({
  tasks,
  counter,
  ipAddress,
});
