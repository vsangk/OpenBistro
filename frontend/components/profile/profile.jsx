import React from 'react';
import { Link, hashHistory } from 'react-router';

class Profile extends React.Component {
  componentDidMount() {
    this.props.requestAllReviews();
    this.props.requestAllReservations();
  }

  render() {
    return (
      <div>
        <h2>Profile Page</h2>
      </div>
    );
  }
}

export default Profile;
