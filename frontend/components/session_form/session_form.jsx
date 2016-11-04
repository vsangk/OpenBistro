import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSignIn = this.handleGuestSignIn.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.processForm({user});
  }

  handleGuestSignIn() {
    let user = {
      username: 'guest',
      password: 'password'
    };
    this.props.guestLogin({user});
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  renderErrors() {
    return(
      <ul className="auth-form-errors">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    let headerText, promptText, linkText, url;
    if (this.props.formType === 'login') {
      headerText = 'Log In';
      url = '/signUp';
      linkText = 'Sign Up';
      promptText = 'Don\'t have an account?';
    } else {
      headerText = 'Sign Up';
      url = '/login';
      linkText = 'Log In';
      promptText = 'Already have an account?';
    }

    return (
      <div className="auth-form">
        <h2>{headerText}</h2>
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.update('username')}/><br/>

          <input type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.update('password')}/><br/>

          <input type="submit" value={headerText} />&nbsp;
        </form><br/>

        <button onClick={this.handleGuestSignIn}>Sign In As Guest</button>
        <div className="auth-form-prompt">
          {promptText}&nbsp;
          <Link to={url}>{linkText}</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
