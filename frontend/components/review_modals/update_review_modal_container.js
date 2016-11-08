import { connect } from 'react-redux';
import UpdateReviewModal from './update_review_modal';
import { updateReview } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    restaurantId: ownProps.restaurantId,
    currentUserId: ownProps.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  updateReview: review => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateReviewModal);
