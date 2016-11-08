import { connect } from 'react-redux';
import ReviewForm from './review_form';
import {
  requestRestaurantDetail,
  createReview
} from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    restaurantId: ownProps.restaurantId,
    userId: state.session.currentUser.id
  });
};

const mapDispatchToProps = dispatch => ({
  requestRestaurantDetail: id => dispatch(requestRestaurantDetail(id)),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
