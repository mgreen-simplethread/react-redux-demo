import { IP_RECEIVE, IP_RESET, IP_REQUEST } from '../actions';

const initialState = {
  loading: false,
  value: '',
};

function ipAddress(state = initialState, action) {
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

export default ipAddress;
