import { connect } from 'react-redux';
import { login, signUp, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }) => ({
  loggedIn: session.currentUser ? true : false,
  errors: session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let formType = ownProps.location.pathname.slice(1);
  let processForm = formType === 'login' ? login : signUp;

  return {
    processForm: user => dispatch(processForm(user)),
    login: user => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors()),
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
