export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const REQUEST_ALL_RESTAURANTS = 'REQUEST_ALL_RESTAURANTS';
export const REQUEST_RESTAURANT_DETAIL = 'REQUEST_RESTAURANT_DETAIL';
export const RECEIVE_RESTAURANT_DETAIL = 'RECEIVE_RESTAURANT_DETAIL';

export const REMOVE_REVIEW = 'REMOVE_REVIEW';
export const CREATE_REVIEW = 'CREATE_REVIEW';
export const UPDATE_REVIEW = 'UPDATE_REVIEW';
export const DELETE_REVIEW = 'DELETE_REVIEW';
export const CLEAR_REVIEWS = 'CLEAR_REVIEWS';

export const REMOVE_RESERVATION = 'REMOVE_RESERVATION';
export const CREATE_RESERVATION = 'CREATE_RESERVATION';
export const UPDATE_RESERVATION = 'UPDATE_RESERVATION';
export const DELETE_RESERVATION = 'DELETE_RESERVATION';

export const FETCH_TIMES = 'FETCH_TIMES';
export const RECEIVE_TIME_SLOT = 'RECEIVE_TIME_SLOT';

export const requestAllRestaurants = cityId => ({
  type: REQUEST_ALL_RESTAURANTS,
  cityId
});

export const receiveAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});

export const requestRestaurantDetail = restaurantId => ({
  type: REQUEST_RESTAURANT_DETAIL,
  restaurantId
});

export const receiveRestaurantDetail = restaurantDetail => ({
  type: RECEIVE_RESTAURANT_DETAIL,
  restaurantDetail
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

export const removeReservation = reservation => ({
  type: REMOVE_RESERVATION,
  reservation
});

export const createReservation = reservation => ({
  type: CREATE_RESERVATION,
  reservation
});

export const updateReservation = reservation => ({
  type: UPDATE_RESERVATION,
  reservation
});

export const deleteReservation = id => ({
  type: DELETE_RESERVATION,
  id
});

export const fetchTimes = reservation => ({
  type: FETCH_TIMES,
  reservation
});

export const receiveTimeSlot = timeSlot => ({
  type: RECEIVE_TIME_SLOT,
  timeSlot
});
