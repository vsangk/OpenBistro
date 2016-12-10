import React from 'react';
import { Link, hashHistory } from 'react-router';
import Review from '../restaurant_detail/review';
import ReservationItem from '../reservation/reservation_item';

class Profile extends React.Component {
  componentDidMount() {
    this.props.requestAllReviews();
    this.props.requestAllReservations();
  }

  render() {
    return (
      <div className="profile-container">
        <h1>{`${this.props.currentUser.username}'s Profile`}</h1>

        <div className="reservation-container content-block">
          <h2>Your Reservations</h2>
          {this.props.reservations.map( reservation => (
            <ReservationItem key={reservation.id}
              deleteReservation={this.props.deleteReservation}
              reservation={reservation} />
          ))}
        </div>

        <div className="review-container content-block" style={{padding: 0}}>
          <h2>Your Reviews</h2>
          {this.props.reviews.map(review => (
            <Review key={review.id}
              review={review}
              currentUser={this.props.currentUser}
              deleteReview={this.props.deleteReview} />
          ))}
        </div>
      </div>
    );
  }
}

export default Profile;
