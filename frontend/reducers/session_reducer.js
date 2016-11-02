import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions';

import merge from 'lodash/merge';

const _nullUser = {
  currentUser: null,
  errors: []
};

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      let newState = { currentUser: action.currentUser };
      return merge({}, state, newState);

    case RECEIVE_ERRORS:
      debugger
      return merge({}, state, action.errors);

    case LOGOUT:
      return merge({}, _nullUser);

    default:
      return state;
  }
};

export default SessionReducer;
