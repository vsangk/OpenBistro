export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const REQUEST_ALL_RESTAURANTS = 'REQUEST_ALL_RESTAURANTS';

export const requestAllRestaurants = cityId => ({
  type: REQUEST_ALL_RESTAURANTS,
  cityId
});

export const receiveAllRestaurants = restaurants => ({
  type: RECEIVE_ALL_RESTAURANTS,
  restaurants
});
