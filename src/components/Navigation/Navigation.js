import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser, getUser } from '../../redux/reducer';
import axios from 'axios';
import './navigation.css';
import MenuIcon from './MenuIcon';

const Navigation = (props) => {
  const [signInToggle, setSignInToggle] = useState(true);
  const [loginToggle, setLoginToggle] = useState(false);
  const [hamToggle, setHamToggle] = useState(true);
  const [regToggle, setRegToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [profile_pic, setImage] = useState('');

  const handleEmailInput = (event) => {
    const { value } = event.target;
    setEmail(value);
  };

  const handlePasswordInput = (event) => {
    setPassword(event.target.value);
  };

  const handleFirstNameInput = (event) => {
    const { value } = event.target;
    setFirstName(value);
  };

  const handleLastNameInput = (event) => {
    const { value } = event.target;
    setLastName(value);
  };

  const handleImageInput = (event) => {
    const { value } = event.target;
    setImage(value);
  };

  const login = () => {
    axios
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        props.getUser();
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
  };

  const register = () => {
    axios
      .post("/auth/login,authCtrl.register", {
        first_name,
        last_name,
        profile_pic,
        email,
        password
      })
      .then((res) => {
        props.getUser();
      })
      .catch((err) => {
        alert("Email is already registered");
      });
  };

  const logo = require('./a1e3ea8a-6463-4c3a-b255-31d5de75a7e2_200x200.png')

  return (
    <div className="navigation">
      <section className='navigation-logo'>
        <img src={logo} style={{ height: '100px', width: '125px' }} alt='logo' />
      </section>
      <section className='navigation-directory'>
        {signInToggle ? (
          <button className='navigation-signIn'
            onClick={() => {
              setSignInToggle(!signInToggle)
              setLoginToggle(true)
            }}
          >Sign In</button>
        ) : null}
        {loginToggle ?
          <div className="login-box">
            <div className='login-box-inputs'>
              <input
                name='email'
                type='text'
                value={email}
                placeholder='Email'
                onChange={handleEmailInput} />
            </div>
            <div className='login-box-inputs'>
              <input
                name='password'
                type='password'
                value={password}
                placeholder='Password'
                onChange={handlePasswordInput} />
            </div>
            <div className='login-box-buttons'>
              <button onClick={() => {
                login()
                setLoginToggle(false)
              }}>Login</button>
              <button onClick={() => {
                setSignInToggle(true)
                setLoginToggle(!loginToggle)
                setEmail('')
                setPassword('')
              }}>Cancel</button>
            </div>
            <div id='login-box-create'>
              <button onClick={() => {
                setLoginToggle(false)
                setRegToggle(!regToggle)
              }}>
                Create Account</button>
            </div>
          </div> : null}
        {regToggle ?
          <div>
            <div>
              <input
                name='firstName'
                type='text'
                value={first_name}
                placeholder='First Name'
                onChange={handleFirstNameInput} />
            </div>
            <div>
              <input
                name='lastName'
                type='text'
                value={last_name}
                placeholder='Last Name'
                onChange={handleLastNameInput} />
            </div>
            <div>
              <input
                name='image'
                type='text'
                value={profile_pic}
                placeholder='Upload Profile Pic'
                onChange={handleImageInput} />
            </div>
            <div>
              <input
                name='email'
                type='text'
                value={email}
                placeholder='Email'
                onChange={handleEmailInput} />
            </div>
            <div>
              <input
                name='password'
                type='password'
                value={password}
                placeholder='Password'
                onChange={handlePasswordInput} />
            </div>
            <div>
              <button onClick={register}>Register</button>
            </div>
            <div>
              <button onClick={() => {
                setSignInToggle(true)
                setLoginToggle(false)
                setRegToggle(!regToggle)
                setFirstName('')
                setLastName('')
                setImage('')
                setEmail('')
                setPassword('')
              }}>Cancel</button>
            </div>
          </div>
          : null}

        {props.getUser === true ?
          <p onClick={() => this.props.history.push('/myaccount')}>My Account</p>
          : null}

      </section>
      <section>
        {hamToggle ? (
          <button id='menuIcon'
            onClick={() => {
              setHamToggle(!hamToggle)
            }}>
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
              <p onClick={() => { setHamToggle(!hamToggle) }}>X</p>
            </nav>
          )}
      </section>
    </div>
  )
}

const mapStateToProps = state => state;

export default connect(mapStateToProps, { logoutUser, getUser })(withRouter(Navigation));