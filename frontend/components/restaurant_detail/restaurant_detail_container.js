import RestaurantDetail from './restaurant_detail';
import { connect } from 'react-redux';
import {
  requestRestaurantDetail,
  clearReviews,
  deleteReview,
  createReservation,
  fetchTimes
} from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  let keys = Object.keys(state.restaurantDetail.reviews);
  let reviews = keys.map(key => state.restaurantDetail.reviews[key]);
  let currentUser = state.session.currentUser ?
    state.session.currentUser : { username: '', id: -1 };

  return ({
    restaurantDetail: state.restaurantDetail,
    restaurantId: ownProps.params.restaurantId,
    currentUser,
    reviews
  });
};


const mapDispatchToProps = dispatch => ({
  requestRestaurantDetail: restaurantId => (
    dispatch(requestRestaurantDetail(restaurantId))
  ),
  clearReviews: () => dispatch(clearReviews()),
  deleteReview: reviewId => dispatch(deleteReview(reviewId)),
  createReservation: reservation => dispatch(createReservation(reservation)),
  fetchTimes: reservation => dispatch(fetchTimes(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
