import {
  receiveRestaurantDetail,
  RECEIVE_RESTAURANT_DETAIL
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const RestaurantDetailReducer = (state = { image_url: '', detail_image_url: [] }, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANT_DETAIL:
      return merge({}, action.restaurantDetail);

    default:
      return state;
  }
};

export default RestaurantDetailReducer;
