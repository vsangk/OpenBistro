import { receiveAllReviews, RECEIVE_ALL_REVIEWS } from '../actions/review_actions';
import { receiveAllReservations, RECEIVE_ALL_RESERVATIONS } from '../actions/reservation_actions';
import merge from 'lodash/merge';

const _defaultState = {
  reviews: {},
  reservations: {}
};

const ProfileReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_REVIEWS:
      return merge({}, state, action.reviews);

    case RECEIVE_ALL_RESERVATIONS:
      return merge({}, state, action.reservations);

    default:
      return state;
  }
};

export default ProfileReducer;
