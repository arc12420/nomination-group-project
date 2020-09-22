import React from "react";

import Footer from "../Footer/Footer";

const MyAccount = () => {
  return (
    <div className="myAccountComponent">
      <div className="myAccountContent">
        <main className="accountInfo">
          <p className="profileInfo">Profile Info</p>
          <p className="statusAndHistory" >Past Donations/ nominations and status of nominations</p>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default MyAccount;
