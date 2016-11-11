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
      <div>
        <h2>Welcome {this.props.currentUser.username}</h2>

        <div className="reservation-container">
          <h3>Your Reservations</h3>
          {this.props.reservations.map( reservation => (
            <ReservationItem key={reservation.id}
              reservation={reservation} />
          ))}
        </div>

        <div className="review-container">
          <h3>Your Reviews</h3>
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
