import {
  receiveAllRestaurants,
  requestAllRestaurants,
  receiveRestaurantDetail,
  requestRestaurantDetail,
  REQUEST_ALL_RESTAURANTS,
  REQUEST_RESTAURANT_DETAIL,
  } from '../actions/restaurant_actions';

import {
  fetchAllRestaurants,
  fetchRestaurantDetail,
} from '../util/restaurant_api_util';

export default ({ dispatch }) => next => action => {
  const fetchSuccess = restaurants => (
    dispatch(receiveAllRestaurants(restaurants))
  );
  const fetchDetailSuccess = restaurantDetail => (
    dispatch(receiveRestaurantDetail(restaurantDetail))
  );

  switch (action.type) {
    case REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(action.cityId, fetchSuccess);
      return next(action);

    case REQUEST_RESTAURANT_DETAIL:
      fetchRestaurantDetail(action.restaurantId, fetchDetailSuccess);
      return next(action);

    default:
      return next(action);
  }
};
