import {
  removeReview,
  CREATE_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW
} from '../actions/review_actions';

import {
  createReview,
  updateReview,
  deleteReview
} from '../util/review_api_util';

import { receiveRestaurantDetail } from '../actions/restaurant_actions';

export default ({ dispatch }) => next => action => {

  const fetchDetailSuccess = restaurantDetail => (
    dispatch(receiveRestaurantDetail(restaurantDetail))
  );

  const deleteReviewSuccess = restaurantDetail => {
    dispatch(removeReview(restaurantDetail.reviews));
    delete restaurantDetail.reviews;
    dispatch(receiveRestaurantDetail(restaurantDetail));
  };

  switch (action.type) {
    case CREATE_REVIEW:
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
