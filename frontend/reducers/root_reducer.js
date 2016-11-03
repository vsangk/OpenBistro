import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import CityReducer from './city_reducer';
import RestaurantReducer from './restaurant_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  cities: CityReducer,
  restaurants: RestaurantReducer
});

export default RootReducer;
