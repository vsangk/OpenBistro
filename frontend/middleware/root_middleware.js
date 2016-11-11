import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CityMiddleware from './city_middleware';
import RestaurantMiddleware from './restaurant_middleware';
import ReviewMiddleware from './review_middleware';
import ReservationMiddleware from './reservation_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CityMiddleware,
  RestaurantMiddleware,
  ReviewMiddleware,
  ReservationMiddleware
);

export default RootMiddleware;
