import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './welcome.css';

const helpingHands = require('../../images/elaine-casap-qgHGDbbSNm8-unsplash.jpg')

const Welcome = () => {

  const history = useHistory();

  const [newsletterInput, setNewsletterInput] = useState({
    name: '',
    email: ''
  });

  const handleInput = ( event ) => {
    setNewsletterInput({...newsletterInput, [event.target.name]: event.target.value})
  }

  const signUp = () => {
    setNewsletterInput({
      name: '', 
      email:''
    })
    if(newsletterInput.name && newsletterInput.email !== ''){
      alert('Thank you for joining our newsletter!')
    } else {
      alert('Please enter a valid email address')
    }
  }

  return (
    <div className="welcome">

      <div className="welcome__row welcome__jumbotron">
        <div className="welcome__jumbotronTitle">
          <h1>KINDNESS IS RISING</h1>
          <h5>Living Through Giving</h5>
          <button>LEARN MORE</button>
          <div className="welcome__jumbotronTitleCards">
            <div className="titleCard">
              <p>Take The Pledge</p>
              <img src={require('../../images/Handshake.png')} alt="" style={{ width: '110px' , marginTop: '20px'}}/>
            </div>
            <div className="titleCard">
              <p>Start Your Project</p>
              <img src={require('../../images/74-512.png')} alt="" style={{ width: '85px' }}/>
            </div>
            <div className="titleCard">
              <p>Show Your Impact</p>
              <img src={require('../../images/award.png')} alt="" style={{ width: '80px' }}/>
            </div>
          </div>
        </div>
      </div>

      <div className="welcome__row" style={{ height: '75vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
        <div className="welcome__tiles">

          <div className="tile__card tileOne" onClick={()=> history.push('/nomination')}>nominated community members</div>

          <div className="tile__card tileTwo" onClick={()=> history.push('/volunteer')}> Volunteer</div>
          
          <div className="tile__card tileThree" onClick={()=> history.push('/contact')}> Partner resources</div>
            
        <div className="tile__card tileFour" onClick={()=> history.push('/donations')}>virtual fundraiser</div>

        </div>
      </div>

      <div className="welcome__row" style={{ display: 'flex', backgroundColor: '#f8d463', color: '#003049' }}>
        <div className="welcome__impact">
          <img src={helpingHands} alt="" className="welcome__impactImage" />
          <div className="welcome__impactContent">
            <h5>WITH YOUR HELP</h5>
            <h1>
              We've funded 56,759 tomato projects for over 11 million people around the world.
            </h1>
            <button>SEE MORE OF OUR IMPACT</button>
          </div>
        </div>
      </div>

      <div className="welcome__row" style={{ display: 'flex', backgroundColor: 'ivory', color: '#003049' }}>
        <div className="welcome__newsletter">
          <h2>Join our Newsletter</h2>

          <div className="welcome__newsletterInputs">
            <input name="name" value={newsletterInput.name} type="text" onChange={handleInput} placeholder="Name" required/>
            <input name="email" value={newsletterInput.email} type="email" onChange={handleInput} placeholder="Email" required/>
          </div>

          <button onClick={ signUp }>Sign Up Today</button>


        </div>
      </div>

    </div>
  )
}

export default Welcome;