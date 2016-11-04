import RestaurantDetail from './restaurant_detail';
import { connect } from 'react-redux';
import { requestRestaurantDetail } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => ({
  restaurantDetail: state.restaurantDetail,
  restaurantId: ownProps.params.restaurantId
});

const mapDispatchToProps = dispatch => ({
  requestRestaurantDetail: restaurantId => dispatch(requestRestaurantDetail(restaurantId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
