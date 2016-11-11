import React from 'react';
import { Link, hashHistory } from 'react-router';
import Review from '../restaurant_detail/review';

class Profile extends React.Component {
  componentDidMount() {
    this.props.requestAllReviews();
    this.props.requestAllReservations();
  }

  render() {
    return (
      <div>
        <h2>Welcome {this.props.currentUser.username}</h2>

        <div className="review-container">
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
