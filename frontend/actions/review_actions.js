export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';
export const REQUEST_ALL_REVIEWS = "REQUEST_ALL_REVIEWS";
export const RECEIVE_ALL_REVIEWS = "RECEIVE_ALL_REVIEWS";


export const requestAllReviews = () => ({
  type: REQUEST_ALL_REVIEWS
});

export const receiveAllReviews = reviews => ({
  type: RECEIVE_ALL_REVIEWS,
  reviews
});

export const removeReview = review => ({
  type: REMOVE_REVIEW,
  review
});

export const createReview = review => ({
  type: CREATE_REVIEW,
  review
});

export const updateReview = review => ({
  type: UPDATE_REVIEW,
  review
});

export const deleteReview = id => ({
  type: DELETE_REVIEW,
  id
});

export const clearReviews = () => ({
  type: CLEAR_REVIEWS
});
