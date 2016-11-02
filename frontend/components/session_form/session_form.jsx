import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestSignIn = this.handleGuestSignIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let user = this.state;
    this.props.processForm({user});
  }

  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.router.push("/");
    }
  }

  handleGuestSignIn() {
    let user = {
      username: 'guest',
      password: 'password'
    };
    this.props.login({user});
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
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            placeholder="Username"
            onChange={this.update('username')}/><br/>

          <input type="password"
            placeholder="Password"
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
