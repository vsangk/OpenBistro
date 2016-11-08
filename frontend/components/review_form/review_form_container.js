import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { requestRestaurantDetail } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
  restaurantId: state.restaurantDetail[ownProps.params.restaurantId]
});

const mapDispatchToProps = dispatch => ({
  requestRestaurantDetail: id => dispatch(requestRestaurantDetail(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
