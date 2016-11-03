import { connect } from 'react-redux';
import City from './city';
import { requestAllCities } from '../../actions/city_actions';

const mapStateToProps = state => ({
  cities: Object.keys(state.cities).map(key => state.cities[key])
});

const mapDispatchToProps = dispatch => ({
  requestAllCities: () => dispatch(requestAllCities())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(City);
