import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../../redux/reducer';
import axios from 'axios';

import './navigation.css';

const Navigation = (props) => {
  const [toggle, setToggle] = useState(true);
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');

  const handleEmailInput = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const login = () => {
    axios
      .post("/auth/login", {
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        props.getUser();
        setToggle();
      })
      .catch((err) => {
        alert("Email or password incorrect");
      });
  };

  const logoutUser = () => {
    axios
      .post('/auth/login,authCtrl.logout')
      .then(res => {
        this.props.logoutUser();
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="navigation">
      <h1>Logo</h1>
      <section>
        {toggle ? (
          <button
            onClick={() => { setToggle(!toggle) }}
          >Sign In</button>
        ) : (
            <div>
              <div>
                <input
                  name='email'
                  type='text'
                  value={emailInput}
                  placeholder='Email'
                  onChange={handleEmailInput} />
              </div>
              <div>
                <input
                  name='password'
                  type='password'
                  value={passwordInput}
                  placeholder='Password'
                  onChange={handlePasswordInput} />
              </div>
              <div>
                <button onClick={login}>Login</button>
              </div>
              <div>
                <button onClick={() => { setToggle(!toggle) }}>Cancel</button>
              </div>
            </div>
          )}
        {props.getUser !== true ?
          <p onClick={() => this.props.history.push('/myaccount')}>My Account</p>
          : null}
      </section>
      <nav>
        <ul>
          {props.location.pathname !== '/' ?
            <li><Link to='/'>Welcome Page</Link></li>
            : null}
          {props.location.pathname !== '/nominations' ?
            <li><Link to='/nominations'>Nominate Someone</Link></li>
            : null}
          {props.location.pathname !== '/donations' ?
            <li><Link to='/donations'>Donate</Link></li>
            : null}
          {props.location.pathname !== '/contact' ?
            <li><Link to='/contact'>Contact Us</Link></li>
            : null}
          {props.location.pathname !== '/volunteer' ?
            <li><Link to='/volunteer'>Events</Link></li>
            : null}
          {props.getUser !== true ?
            <li onClick={logoutUser}><Link to='/'>Logout</Link></li>
            : null}
        </ul>
      </nav>
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser, getUser })(withRouter(Navigation));