import {
  receiveRestaurantDetail,
  RECEIVE_RESTAURANT_DETAIL
} from '../actions/restaurant_actions';

import {
  removeReview,
  REMOVE_REVIEW,
  clearReviews,
  CLEAR_REVIEWS
} from '../actions/review_actions';

import { RECEIVE_TIME_SLOT } from '../actions/reservation_actions';

import merge from 'lodash/merge';

const _defaultState = {
  address: '',
  available_times: {},
  category: '',
  city_name: '',
  description: '',
  detail_image_url: [],
  id: 0,
  image_url: '',
  name: '',
  neighborhood: '',
  rating: 0,
  reservations: {},
  reviews: {},
  state: '',
  zip_code: ''
};

const RestaurantDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_RESTAURANT_DETAIL:
      return merge({}, state, action.restaurantDetail);

    case REMOVE_REVIEW:
      newState = merge({}, state);
      delete newState.reviews[action.review.id];
      return newState;

    case CLEAR_REVIEWS:
      newState = merge({}, state);
      newState.reviews = {};
      return newState;

    case RECEIVE_TIME_SLOT:
      newState = merge({}, state);
      newState.available_times[action.timeDetails.time_slot] = false;
      return newState;

    default:
      return state;
  }
};

export default RestaurantDetailReducer;
