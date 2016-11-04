import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing
import { requestRestaurantDetail } from './actions/restaurant_actions';


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
  window.requestRestaurantDetail = requestRestaurantDetail;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
