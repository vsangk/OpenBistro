import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import Root from './components/root';
import configureStore from './store/store';

// testing
import {
  createReservation,
  updateReservation,
  deleteReservation
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
  window.createReservation = createReservation;
  window.updateReservation = updateReservation;
  window.deleteReservation = deleteReservation;
  window.reservation = {party_size: 3, time_slot: 8, date_slot: "2016-12-28", user_id: 1, restaurant_id: 1};

  const root = document.getElementById('root');
  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={store}/>, root);
});
