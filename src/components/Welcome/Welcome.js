import React from 'react';
import './welcome.css';
// import Tile from './Tile'

//icons

import Footer from '../Footer/Footer';

// const rhinoSVG = require('../../images/6wDbV8l-rhino-outline-clipart.png')
const helpingHands = require('../../images/elaine-casap-qgHGDbbSNm8-unsplash.jpg')

const Welcome = () => {

  return (
    <div className="welcome">

      <div className="welcome__row welcome__jumbotron">
        <div className="welcome__jumbotronTitle">
          <h1>KINDNESS IS RISING</h1>
          <h5>Living Through Giving</h5>
          <button>LEARN MORE</button>
          <div className="welcome__jumbotronTitleCards">
            <div className="titleCard">Take The Pledge</div>
            <div className="titleCard">Start Your Project</div>
            <div className="titleCard">Show Your Impact</div>
          </div>
        </div>
      </div>

      <div className="welcome__row" style={{ height: '75vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <div className="welcome__tiles">

          <div className="tile__card leftTile">nominated community members</div>

          <div className="rightTile">
            <div className="rightTop">
              <div className="topLeft tile__card"> Volunteer</div>
              <div className="topRight tile__card"> Partner resources</div>
            </div>
            <div className="tile__card rightTileBottom">
              virtual fundraiser
            </div>
          </div>

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
        <div className="welcome__donate">Join Our Newsletter</div>
      </div>

    </div>
  )
}

export default Welcome;