export const RECEIVE_ALL_CITIES = 'RECEIVE_ALL_CITIES';
export const REQUEST_ALL_CITIES = 'REQUEST_ALL_CITIES';

export const receiveAllCities = cities => ({
  type: RECEIVE_ALL_CITIES,
  cities
});

export const requestAllCities = () => ({
  type: REQUEST_ALL_CITIES
});
