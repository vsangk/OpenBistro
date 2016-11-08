import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {
  requestRestaurantDetail,
  createReview,
  updateReview
} from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    restaurantId: ownProps.restaurantId,
    currentUserId: ownProps.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  requestRestaurantDetail: id => dispatch(requestRestaurantDetail(id)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
