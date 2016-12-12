import { connect } from 'react-redux';
import UpdateReviewModal from './update_review_modal';
import { updateReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => {
  return ({
    restaurantId: ownProps.restaurantId
  });
};

const mapDispatchToProps = dispatch => ({
  updateReview: review => dispatch(updateReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateReviewModal);
