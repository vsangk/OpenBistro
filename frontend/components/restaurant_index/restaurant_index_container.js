import RestaurantIndex from './restaurant_index';
import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurant_actions';

const mapStateToProps = ({ restaurants, cities }, ownProps) => ({
  restaurants: Object.keys(restaurants).map(key => restaurants[key]),
  cityName: cities[ownProps.params.cityId].name
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurants: cityId => dispatch(requestAllRestaurants(cityId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
