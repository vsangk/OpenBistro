import {
  receiveAllRestaurants,
  requestAllRestaurants,
  REQUEST_ALL_RESTAURANTS } from '../actions/restaurant_actions';
import { fetchAllRestaurants } from '../util/restaurant_api_util';

export default ({ dispatch }) => next => action => {
  const fetchSuccess = restaurants => (
    dispatch(receiveAllRestaurants(restaurants))
  );

  switch (action.type) {
    case REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(action.cityId, fetchSuccess);
      return next(action);

    default:
      return next(action);
  }
};
