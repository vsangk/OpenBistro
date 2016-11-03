import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
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
      return merge({}, _nullUser, newState);

    case RECEIVE_ERRORS:
      return merge({}, _nullUser, {errors: action.errors});

    case CLEAR_ERRORS:
      let clearErrorState = merge({}, state);
      clearErrorState.errors = [];
      return clearErrorState;

    case LOGOUT:
      return merge({}, _nullUser);

    default:
      return state;
  }
};

export default SessionReducer;
