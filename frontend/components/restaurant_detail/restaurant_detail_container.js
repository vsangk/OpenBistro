import RestaurantDetail from './restaurant_detail';
import { connect } from 'react-redux';
import { requestRestaurantDetail } from '../../actions/restaurant_actions';

const mapStateToProps = (state, ownProps) => {
  let keys, reviews;
  if (state.restaurantDetail.reviews) {
    keys = Object.keys(state.restaurantDetail.reviews);
    reviews = keys.map(key => state.restaurantDetail.reviews[key]);
  } else {
    reviews = [];
  }

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
