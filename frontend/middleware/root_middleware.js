import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CityMiddleware from './city_middleware';
import RestaurantMiddleware from './restaurant_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CityMiddleware,
  RestaurantMiddleware
);

export default RootMiddleware;
