import React from 'react';
import './Footer.css'

//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import PinterestIcon from '@material-ui/icons/Pinterest';

function Footer() {
    return (
        <div className="footer">
        <div className="footer__left">Copyright © {new Date().getFullYear()}, Ivory Foundation</div>
        <div className="footer__middle">
          <div className="footer__middleColumn">
            <h4>Get To Know Us</h4>
            <p>about us</p>
            <p>see our financials</p>
            <p>meet the team</p>
            <p>careers</p>
          </div>
          <div className="footer__middleColumn">
            <ul>
              <h4>Get Involved</h4>
              <li>fundraise</li>
              <li>brand partnerships</li>
              <li>request a speaker</li>
              <li>shop our store</li>
            </ul>
          </div>
          <div className="footer__middleColumn">
            <h4>Donate</h4>
            <p>join the spring</p>
            <p>give to a campaign</p>
            <p>give in someone's honor</p>
            <p>sponsor a community</p>
          </div>
        </div>
        <div className="footer__right">
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <PinterestIcon/>

        </div>
      </div>
    )
}

export default Footer
