import {
  receiveAllRestaurants,
  requestAllRestaurants,
  receiveRestaurantDetail,
  requestRestaurantDetail,
  removeReview,
  REQUEST_ALL_RESTAURANTS,
  REQUEST_RESTAURANT_DETAIL,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW
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

export default ({ dispatch }) => next => action => {
  const fetchSuccess = restaurants => (
    dispatch(receiveAllRestaurants(restaurants))
  );
  const fetchDetailSuccess = restaurantDetail => {
    return (
      dispatch(receiveRestaurantDetail(restaurantDetail))
    );
  };
  const deleteReviewSuccess = review => dispatch(removeReview(review));


  switch (action.type) {
    case REQUEST_ALL_RESTAURANTS:
      fetchAllRestaurants(action.cityId, fetchSuccess);
      return next(action);

    case REQUEST_RESTAURANT_DETAIL:
      fetchRestaurantDetail(action.restaurantId, fetchDetailSuccess);
      return next(action);

    case CREATE_REVIEW:
      // debugger
      createReview(action.review, fetchDetailSuccess);
      return next(action);

    case UPDATE_REVIEW:
      updateReview(action.review, fetchDetailSuccess);
      return next(action);

    case DELETE_REVIEW:
      deleteReview(action.id, deleteReviewSuccess);
      return next(action);

    default:
      return next(action);
  }
};
