// Task list actions
export const TASK_ADD = 'TASK_ADD';
export const TASK_REMOVE = 'TASK_REMOVE';

// Counter actions
export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';

// IP address actions
export const IP_REQUEST = 'IP_REQUEST';
export const IP_RECEIVE = 'IP_RECEIVE';
export const IP_RESET = 'IP_RESET';

const API_URL = 'https://api.ipify.org/?format=json';

export const addTask = (task) => ({
  type: TASK_ADD,
  task,
});
export const removeTask = (index) => ({
  type: TASK_REMOVE,
  index,
});

export const incrementCounter = () => ({ type: COUNTER_INC });
export const decrementCounter = () => ({ type: COUNTER_DEC });

export const resetIP = () => ({ type: IP_RESET });
export const receiveIP = (ip) => ({ type: IP_RECEIVE, ip });
export const requestIP = () => ({ type: IP_REQUEST });
export const fetchIP = () => async (dispatch) => {
  dispatch(requestIP());
  const res = await fetch(API_URL);
  const { ip } = await res.json();
  dispatch(receiveIP(ip));
};
