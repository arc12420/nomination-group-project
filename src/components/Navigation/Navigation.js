import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    props.getUser()
  })

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
      .post('/auth/login', {
        email: email,
        password: password,
      })
      .then((res) => {
        props.getUser()
        props.history.push('/myaccount')
      })
      .catch((err) => {
        alert("Email or password incorrect");
        setSignInToggle(!signInToggle)
      });
  };

  const logoutUser = () => {
    axios
      .post('/auth/logout')
      .then(res => {
        props.logoutUser()
        props.history.push('/')
      })
      .catch(err => console.log(err))
  };

  const register = () => {
    axios
      .post('/auth/register', {
        first_name,
        last_name,
        profile_pic,
        email,
        password
      })
      .then(async (res) => {
        await props.getUser();
        setRegToggle(!regToggle)
        props.history.push('/myaccount')
      })
      .catch((err) => {
        alert("Registration Error");
      });
  };

  const logo = require('./a1e3ea8a-6463-4c3a-b255-31d5de75a7e2_200x200.png')

  return (
    <div className="navigation">
      <section className='navigation-logo'>
        <img src={logo} style={{ height: '125px', width: '150px' }} alt='logo'
          onClick={() => props.history.push('/')} />
      </section>
      <section className='navigation-directory'>
        {(signInToggle) && (props.user.user_id === 0) ? (
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
          <div className='login-box'>
            <div className="login-box-inputs">
              <input
                name='firstName'
                type='text'
                value={first_name}
                placeholder='First Name'
                onChange={handleFirstNameInput} />
            </div>
            <div className="login-box-inputs">
              <input
                name='lastName'
                type='text'
                value={last_name}
                placeholder='Last Name'
                onChange={handleLastNameInput} />
            </div>
            <div className="login-box-inputs">
              <input
                name='image'
                type='text'
                value={profile_pic}
                placeholder='Upload Profile Pic'
                onChange={handleImageInput} />
            </div>
            <div className="login-box-inputs">
              <input
                name='email'
                type='text'
                value={email}
                placeholder='Email'
                onChange={handleEmailInput} />
            </div>
            <div className="login-box-inputs">
              <input
                name='password'
                type='password'
                value={password}
                placeholder='Password'
                onChange={handlePasswordInput} />
            </div>
            <div className='login-box-buttons'>
              <button onClick={register}>Register</button>
            </div>
            <div className='login-box-buttons'>
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

        {props.isLoggedIn === true ?
          <div className='user-nav-box'>
            <img id='profile-pic' src={props.user.profile_pic} alt='No Profile Pic' />
            <Link id='myaccount-link' to='./myaccount'>My Account</Link>
          </div>
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
                  <li onClick={() => { setHamToggle(!hamToggle) }}><Link to='/'>Welcome Page</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/nomination' ?
                  <li onClick={() => { setHamToggle(!hamToggle) }}><Link to='/nomination'>Nominations</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/donations' ?
                  <li onClick={() => { setHamToggle(!hamToggle) }}><Link to='/donations'>Donate</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/contact' ?
                  <li onClick={() => { setHamToggle(!hamToggle) }}><Link to='/contact'>Contact Us</Link></li>
                  : null}
                <br />
                {props.location.pathname !== '/volunteer' ?
                  <li onClick={() => { setHamToggle(!hamToggle) }}><Link to='/volunteer'>Events</Link></li>
                  : null}
                <br />
                {props.isLoggedIn === true ?
                  <li onClick={logoutUser}><Link onClick={() => setHamToggle(!hamToggle)} to='/'>Logout</Link></li>
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