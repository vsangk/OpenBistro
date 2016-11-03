import {
  receiveAllRestaurants,
  RECEIVE_ALL_RESTAURANTS
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_RESTAURANTS:
      return merge({}, action.restaurants);

    default:
      return state;
  }
};

export default RestaurantReducer;
