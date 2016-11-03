import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import CityMiddleware from './city_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  CityMiddleware
);

export default RootMiddleware;
