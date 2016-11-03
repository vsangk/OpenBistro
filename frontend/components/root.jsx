import React from 'react';
import App from './app';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import SessionFormContainer from './session_form/session_form_container';
import clearErrors from  '../actions/session_actions';
import HeaderContainer from './header/header_container';
import HomeContainer from './home/home_container';
import RestaurantIndexContainer from './restaurant_index/restaurant_index_container';

const Root = ({ store }) => {
  const _redirectIfLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (currentUser) {
      replace('/');
    }
  };

  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={HomeContainer}/>
          <Route path="/login" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/signup" component={SessionFormContainer} onEnter={_redirectIfLoggedIn}/>
          <Route path="/city/:cityId" component={RestaurantIndexContainer}/>
        </Route>
      </Router>
    </Provider>
  );
};

export default Root;
