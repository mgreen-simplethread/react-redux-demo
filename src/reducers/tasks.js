import { TASK_ADD, TASK_REMOVE } from '../actions';
import { filter } from '../util';

function tasks(state = {}, action) {
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

export default tasks;
