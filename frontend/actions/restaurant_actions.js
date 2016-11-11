export const RECEIVE_ALL_RESTAURANTS = 'RECEIVE_ALL_RESTAURANTS';
export const REQUEST_ALL_RESTAURANTS = 'REQUEST_ALL_RESTAURANTS';
export const REQUEST_RESTAURANT_DETAIL = 'REQUEST_RESTAURANT_DETAIL';
export const RECEIVE_RESTAURANT_DETAIL = 'RECEIVE_RESTAURANT_DETAIL';

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
