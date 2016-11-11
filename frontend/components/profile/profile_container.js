import { connect } from 'react-redux';
import Profile from './profile';
import { requestAllReviews } from '../../actions/review_actions';
import { requestAllReservations } from '../../actions/reservation_actions';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  requestAllReviews: () => dispatch(requestAllReviews()),
  requestAllReservations: () => dispatch(requestAllReservations())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
