import React from 'react';
import './welcome.css';
// import Tile from './Tile'

//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';

const Welcome = () => {

  return (
    <div className="welcome">

      <div className="welcome__jumbotron">
        <div className="welcome__jumbotronTitle">
          <h1>The Ivory Foundation</h1>
          <h5>Living Through Giving</h5>
        </div>
      </div>

      <div className="welcome__content">
        <div className="welcome__row">
            <img src="" alt="" className="tile"/>
            <img src="" alt="" className="tile"/>
            <img src="" alt="" className="tile"/>
            <img src="" alt="" className="tile"/>
            <img src="" alt="" className="tile"/>
        </div>
        <div className="welcome__row welcome__rowOne">
          upcoming projects/this months nominated community members
        </div>
        <div className="welcome__row welcome__rowTwo">
          donate
        </div>
        <div className="welcome__row welcome__rowThree">
          <p>
            "The Ivory Foundation changed my life for the better"
            -Adam
          </p>
          <p>
            "donate today to help someone in need"
            -Keaton
          </p>
          <p>
            "I love this organization"
            -Cole
          </p>
        </div>
      </div>

      <div className="footer">
        <div className="footer__left">Copyright © {new Date().getFullYear()}, Ivory Foundation</div>
        <div className="footer__middle">quick links</div>
        <div className="footer__right">
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <PinterestIcon/>

        </div>
      </div>

    </div>
  )
}

export default Welcome;