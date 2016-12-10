import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import { receiveErrors } from  '../actions/session_actions';

import SessionFormContainer from './session_form/session_form_container';
import HeaderContainer from './header/header_container';
import Home from './home/home';
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';
import RestaurantDetailContainer from './restaurant_detail/restaurant_detail_container';
import ProfileContainer from './profile/profile_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    store.dispatch(receiveErrors([]));
    let currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  const _redirectIfLoggedOut = (nextState, replace) => {
    let currentUser = store.getState().session.currentUser;
    if (currentUser === null) {
      replace('/login');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn} />
        <Route path="/" component={App} onEnter={_redirectIfLoggedOut}>
          <IndexRoute component={Home} />
          <Route path="/profile" component={ProfileContainer} />
          <Route path="/city/:cityId" component={RestaurantIndexContainer} />
          <Route path="/restaurant/:restaurantId" component={RestaurantDetailContainer} />
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
