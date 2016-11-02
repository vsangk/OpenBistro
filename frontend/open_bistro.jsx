import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

// testing
import { login, logout, signUp } from './actions/session_actions';

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
  window.login = login;
  window.logout = logout;
  window.signUp = signUp;
  window.user = {user: {username: 'vince', password: 'password'}};

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
