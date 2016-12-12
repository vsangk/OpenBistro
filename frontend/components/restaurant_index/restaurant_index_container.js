import RestaurantIndex from './restaurant_index';
import { connect } from 'react-redux';
import { requestAllRestaurants } from '../../actions/restaurant_actions';
import { createReservation } from '../../actions/reservation_actions';

const mapStateToProps = ({ restaurants }) => ({
  restaurants: Object.keys(restaurants).map(key => restaurants[key]),
});

const mapDispatchToProps = dispatch => ({
  requestAllRestaurants: cityId => dispatch(requestAllRestaurants(cityId)),
  createReservation: reservation => dispatch(createReservation(reservation))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RestaurantIndex);
