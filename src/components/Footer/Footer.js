import React from 'react';
import './Footer.css'

//icons
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


function Footer() {
    return (
        <div className="footer">
        
        <div className="footer__media">
          <FacebookIcon style={{fontSize: '32px'}}/>
          <InstagramIcon style={{fontSize: '32px'}}/>
          <TwitterIcon style={{fontSize: '32px'}}/>
        </div>

        <div className="siteBy">
          Site by (insert names here)
        </div>

        <div className="footer__links">
          <p>Info</p>
          <p>Support</p>
          <p>Request a Speaker</p>
          <p>Covid 19 Response</p>
        </div>

        <div className="footer__copyright">Copyright © {new Date().getFullYear()}, Ivory Foundation, no rights reserved, this is a demo</div>

      </div>
    )
}

export default Footer
