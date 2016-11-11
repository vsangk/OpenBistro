import { connect } from 'react-redux';
import CreateReviewModal from './create_review_modal';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    restaurantId: ownProps.restaurantId,
    currentUserId: ownProps.currentUserId
  });
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateReviewModal);
