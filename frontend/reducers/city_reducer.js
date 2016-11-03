import { receiveAllCities, RECEIVE_ALL_CITIES } from '../actions/city_actions';
import merge from 'lodash/merge';

const CityReducer = (state = {}, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_ALL_CITIES:
      return merge({}, action.cities);

    default:
      return state;
  }
};

export default CityReducer;
