import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing
import { receiveAllCities } from './actions/city_actions';
import { requestAllCities } from './actions/city_actions';
import { fetchAllCities } from './util/city_api_util';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // testing
  window.store = store;
  window.receiveAllCities = receiveAllCities;
  window.fetchAllCities = fetchAllCities;
  window.requestAllCities = requestAllCities;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
