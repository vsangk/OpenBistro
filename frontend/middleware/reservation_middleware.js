import {
  receiveTimeSlot,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
  FETCH_TIMES
} from '../actions/reservation_actions';

import {
  createReservation,
  updateReservation,
  deleteReservation,
  fetchTimes
} from '../util/reservation_api_util';

import { receiveRestaurantDetail } from '../actions/restaurant_actions';

export default ({ dispatch }) => next => action => {

  const fetchDetailSuccess = restaurantDetail => (
    dispatch(receiveRestaurantDetail(restaurantDetail))
  );

  const reservationSuccess = timeSlot => {
    dispatch(receiveTimeSlot(timeSlot));
  };

  switch (action.type) {
    case CREATE_RESERVATION:
    createReservation(action.reservation, reservationSuccess);
    return next(action);

    case UPDATE_RESERVATION:
    updateReservation(action.reservation, fetchDetailSuccess);
    return next(action);

    case DELETE_RESERVATION:
    deleteReservation(action.id, fetchDetailSuccess);
    return next(action);

    case FETCH_TIMES:
    fetchTimes(action.reservation, fetchDetailSuccess);
    return next(action);

    default:
      return next(action);
  }
};
