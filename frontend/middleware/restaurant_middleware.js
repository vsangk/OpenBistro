import {
  receiveAllRestaurants,
  requestAllRestaurants,
  receiveRestaurantDetail,
  requestRestaurantDetail,
  removeReview,
  receiveTimeSlot,
  REQUEST_ALL_RESTAURANTS,
  REQUEST_RESTAURANT_DETAIL,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  CREATE_RESERVATION,
  UPDATE_RESERVATION,
  DELETE_RESERVATION,
  FETCH_TIMES,
  } from '../actions/restaurant_actions';

import {
  fetchAllRestaurants,
  fetchRestaurantDetail,
} from '../util/restaurant_api_util';

import {
  createReview,
  updateReview,
  deleteReview
} from '../util/review_api_util';

import {
  createReservation,
  updateReservation,
  deleteReservation,
  fetchTimes
} from '../util/reservation_api_util';

export default ({ dispatch }) => next => action => {
  const fetchSuccess = restaurants => (
    dispatch(receiveAllRestaurants(restaurants))
  );
  const fetchDetailSuccess = restaurantDetail => (
    dispatch(receiveRestaurantDetail(restaurantDetail))
  );
  const deleteReviewSuccess = restaurantDetail => {
    dispatch(removeReview(restaurantDetail.reviews));
    delete restaurantDetail.reviews;
    dispatch(receiveRestaurantDetail(restaurantDetail));
  };
  const reservationSuccess = timeSlot => {
    dispatch(receiveTimeSlot(timeSlot));
  };

  switch (action.type) {
    case REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(action.cityId, fetchSuccess);
      return next(action);

    case REQUEST_RESTAURANT_DETAIL:
      fetchRestaurantDetail(action.restaurantId, fetchDetailSuccess);
      return next(action);

    case CREATE_REVIEW:
      createReview(action.review, fetchDetailSuccess);
      return next(action);

    case UPDATE_REVIEW:
      updateReview(action.review, fetchDetailSuccess);
      return next(action);

    case DELETE_REVIEW:
      deleteReview(action.id, deleteReviewSuccess);
      return next(action);

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
