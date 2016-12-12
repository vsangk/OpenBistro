import {
  receiveAllRestaurants,
  RECEIVE_ALL_RESTAURANTS
} from '../actions/restaurant_actions';
import { RECEIVE_TIME_SLOT } from '../actions/reservation_actions';

import merge from 'lodash/merge';

const RestaurantReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return merge({}, action.restaurants);

    case RECEIVE_TIME_SLOT:
      let newState = merge({}, state);
      newState[action.timeDetails.restaurant_id]['available_today'][action.timeDetails.time_slot] = false;
      return newState;

    default:
      return state;
  }
};

export default RestaurantReducer;
