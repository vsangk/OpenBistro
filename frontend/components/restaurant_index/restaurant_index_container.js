import RestaurantIndex from './restaurant_index';
import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = ({ restaurants }) => ({
  restaurants: Object.keys(restaurants).map(key => restaurants[key])
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurants: cityId => dispatch(requestAllRestaurants(cityId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
