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
        
        {/* <div className="footer__media">
          <FacebookIcon/>
          <TwitterIcon/>
          <InstagramIcon/>
          <YouTubeIcon/>
          <PinterestIcon/>
        </div> */}

        {/* <div className="footer__copyright">Copyright © {new Date().getFullYear()}, Ivory Foundation, no rights reserved, this is a demo</div> */}
        <div className="footerCardOne"></div>
        <div className="footerCardTwo"></div>
        <div className="footerCardThree"></div>
        <div className="footerCardFour"></div>

      </div>
    )
}

export default Footer
