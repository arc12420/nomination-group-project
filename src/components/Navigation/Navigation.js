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
  const [emailInput, setEmail] = useState('');
  const [passwordInput, setPassword] = useState('');
  const [firstNameInput, setFirstName] = useState('');
  const [lastNameInput, setLastName] = useState('');
  const [imageInput, setImage] = useState('');

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
        email: emailInput,
        password: passwordInput,
      })
      .then((res) => {
        props.getUser();
        // setToggle();
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
        firstNameInput,
        lastNameInput,
        imageInput,
        emailInput,
        passwordInput
      })
      .then((res) => {
        props.getUser();
        // setToggle();
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
              setLoginToggle(true)}}
          >Sign In</button>
        ) : null}
        {loginToggle ? 
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
                <button onClick={() => {
                  login()
                  setLoginToggle(false)}}>Login</button>
              </div>
              <div>
                <button onClick={() => { 
                  setSignInToggle(true)
                  setLoginToggle(!loginToggle) }}>Cancel</button>
              </div>
              <button onClick={() => { 
                setLoginToggle(false)
                setRegToggle(!regToggle) }}>
                    Create Account</button>
        </div> : null}

        {regToggle ? 
        <div>
           <div>
                        <input
                          name='firstName'
                          type='text'
                          value={firstNameInput}
                          placeholder='First Name'
                          onChange={handleFirstNameInput} />
                      </div>
                      <div>
                        <input
                          name='lastName'
                          type='text'
                          value={lastNameInput}
                          placeholder='Last Name'
                          onChange={handleLastNameInput} />
                      </div>
                      <div>
                        <input
                          name='image'
                          type='text'
                          value={imageInput}
                          placeholder='Upload Profile Pic'
                          onChange={handleImageInput} />
                      </div>
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
                        <button onClick={register}>Register</button>
                      </div>
                      <div>
                        <button onClick={() => { 
                          setSignInToggle(true)
                          setLoginToggle(false)
                          setRegToggle(!regToggle) }}>Cancel</button>
                      </div>
        </div> : null}

        {props.getUser === true ?
          <p onClick={() => this.props.history.push('/myaccount')}>My Account</p>
          : null}
        
      </section>
      <section>
        {hamToggle ? (
          <button id='menuIcon'
            onClick={() => { setHamToggle(!hamToggle) }}>
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