import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../../redux/reducer';
import axios from 'axios';
import './navigation.css';
import MenuIcon from './MenuIcon';

const Navigation = (props) => {
  const [toggle, setToggle] = useState(true);
  const [hamtoggle, hamburgerToggle] = useState(true);
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
      <section className='navigation-logo'>
        <h1>Logo</h1>
      </section>
      <section className='navigation-directory'>
        {toggle ? (
          <button className='navigation-signIn'
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
        {props.getUser === true ?
          <p onClick={() => this.props.history.push('/myaccount')}>My Account</p>
          : null}
      </section>
      <section>
        {hamtoggle ? (
          <button id='menuIcon'
            onClick={() => { hamburgerToggle(!hamtoggle) }}>
            <MenuIcon width='30px' height='30px' />
          </button>
        ) : (
            <nav className='navigation-navMenu'>
              <ul>
                {props.location.pathname !== '/' ?
                  <li><Link to='/'>Welcome Page</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/nomination' ?
                  <li><Link to='/nomination'>Nominations</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/donations' ?
                  <li><Link to='/donations'>Donate</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/contact' ?
                  <li><Link to='/contact'>Contact Us</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/volunteer' ?
                  <li><Link to='/volunteer'>Events</Link></li>
                  : null}
                <br />
                {props.getUser === true ?
                  <li onClick={logoutUser}><Link to='/'>Logout</Link></li>
                  : null}
              </ul>
              <p onClick={() => { hamburgerToggle(!hamtoggle) }}>X</p>
            </nav>
          )}
      </section>
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser, getUser })(withRouter(Navigation));