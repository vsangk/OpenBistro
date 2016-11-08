import RestaurantDetail from './restaurant_detail';
import { connect } from 'react-redux';
import { requestRestaurantDetail } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  let keys = Object.keys(state.restaurantDetail.reviews);
  let reviews = keys.map(key => state.restaurantDetail.reviews[key]);

  return ({
    restaurantDetail: state.restaurantDetail,
    restaurantId: ownProps.params.restaurantId,
    reviews
  });
};


const mapDispatchToProps = dispatch => ({
  requestRestaurantDetail: restaurantId => (
    dispatch(requestRestaurantDetail(restaurantId))
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantDetail);
