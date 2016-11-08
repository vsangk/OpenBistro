import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing
import {
  createReview,
  updateReview,
  deleteReview
} from './actions/restaurant_actions';

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
  window.createReview = createReview;
  window.updateReview = updateReview;
  window.deleteReview = deleteReview;
  window.review = {rating: 5, body: 'Excellent!', user_id: 2, restaurant_id: 1};

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
