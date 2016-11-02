import { receiveCurrentUser,
         receiveErrors,
         LOGIN,
         LOGOUT,
         SIGN_UP
       } from '../actions/session_actions';

import { login, signUp, logout } from '../util/session_api_util';

export default ({ getState, dispatch }) => next => action => {
  const successCallback = user => dispatch(receiveCurrentUser(user));
  const errorCallback = errors => dispatch(receiveErrors(errors.responseJSON));

  switch(action.type) {
    case LOGIN:
      login(action.user, successCallback, errorCallback);
      return next(action);
    case SIGN_UP:
      signUp(action.user, successCallback, errorCallback);
      return next(action);
    case LOGOUT:
      logout(() => next(action));
      break;
    default:
      return next(action);
  }
};
