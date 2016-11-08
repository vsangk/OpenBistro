import {
  receiveRestaurantDetail,
  RECEIVE_RESTAURANT_DETAIL,
  removeReview,
  REMOVE_REVIEW
} from '../actions/restaurant_actions';
import merge from 'lodash/merge';

const _defaultState = {
  address: '',
  category: '',
  city_name: '',
  description: '',
  detail_image_url: [],
  image_url: '',
  name: '',
  neighborhood: '',
  reviews: {},
  state: '',
  zip_code: ''
};

const RestaurantDetailReducer = (state = _defaultState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_RESTAURANT_DETAIL:
      return merge({}, state, action.restaurantDetail);

    case REMOVE_REVIEW:
      let newState = merge({}, state);
      delete newState[action.review.id];
      return newState;

    default:
      return state;
  }
};

export default RestaurantDetailReducer;
