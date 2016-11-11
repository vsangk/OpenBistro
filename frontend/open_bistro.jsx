import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

// testing
import { requestAllReviews } from './actions/review_actions';
import { requestAllReservations } from './actions/reservation_actions';

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
  window.requestAllReviews = requestAllReviews;
  window.requestAllReservations = requestAllReservations;

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
});
