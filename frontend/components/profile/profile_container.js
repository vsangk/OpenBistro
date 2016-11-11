import { connect } from 'react-redux';
import Profile from './profile';
import {
  requestAllReviews,
  deleteReview
} from '../../actions/review_actions';
import { requestAllReservations } from '../../actions/reservation_actions';

const mapStateToProps = state => {
  let keys;
  keys = Object.keys(state.profile.reviews);
  let reviews = keys.map(key => state.profile.reviews[key]);

  keys = Object.keys(state.profile.reservations);
  let reservations = keys.map(key => state.profile.reservations[key]);

  return ({
    currentUser: state.session.currentUser,
    reviews,
    reservations
  });
};


const mapDispatchToProps = dispatch => ({
  requestAllReviews: () => dispatch(requestAllReviews()),
  requestAllReservations: () => dispatch(requestAllReservations()),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
