import {
  receiveAllCities,
  requestAllCities,
  REQUEST_ALL_CITIES } from '../actions/city_actions';
import { fetchAllCities } from '../util/city_api_util';

export default ({ dispatch }) => next => action => {
  const fetchSuccess = cities => dispatch(receiveAllCities(cities));

  switch (action.type) {
    case REQUEST_ALL_CITIES:
      fetchAllCities(fetchSuccess);
      return next(action);

    default:
      return next(action);
  }
};
