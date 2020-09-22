import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {getUser} from "../../redux/reducer"

import "../MyAccount/MyAccountStyling.css";


import Footer from "../Footer/Footer";

const MyAccount = (props) => {
  console.log(props);
  return (
    <div className="myAccountComponent">
      <div className="myAccountContent">
        <main className="accountInfo">
          <div className="profileInfo">
            <img 
            src='https://i.insider.com/5f04a202988ee362df3f5316?width=1100&format=jpeg&auto=webp'
            className="myAccountProfileImage"
            alt="Profile Picture" />
            <div className="profileInfoContent">
              <p>{props.user.first_name}</p>
              <p>{props.user.last_name}</p>
              <p>{props.user.email}</p>
            </div>
          
          </div>
          <p className="statusAndHistory" >Past Donations/ nominations and status of nominations</p>
          <p></p>
        </main>
      </div>
      <Footer />
    </div>

  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, {getUser} )(withRouter(MyAccount));
