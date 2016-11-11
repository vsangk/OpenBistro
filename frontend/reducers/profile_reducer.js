import {
  RECEIVE_ALL_REVIEWS,
  REMOVE_REVIEW,
  UPDATE_REVIEW } from '../actions/review_actions';
import {
  RECEIVE_ALL_RESERVATIONS,
  REMOVE_RESERVATION
} from '../actions/reservation_actions';

import merge from 'lodash/merge';

const _defaultState = {
  reviews: {},
  reservations: {}
};

const ProfileReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return merge({}, state, action.reviews);

    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState.reviews[action.review.id];
      return newState;

    case RECEIVE_ALL_RESERVATIONS:
      return merge({}, state, action.reservations);

    case REMOVE_RESERVATION:
      newState = merge({}, state);
      delete newState.reservations[action.reservation.id];
      return newState;

    default:
      return state;
  }
};

export default ProfileReducer;
