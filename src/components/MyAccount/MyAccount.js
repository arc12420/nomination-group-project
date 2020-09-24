import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUser } from "../../redux/reducer";
import Admin from '../Administration/Administration';
import axios from "axios";

import "../MyAccount/MyAccountStyling.css";

//------------------------State------------------------------------------

class MyAccount extends Component {
  constructor() {
    super();
    this.state = {
      project: [],
      nominations: [],
    };
  }
  // -------------------------Functions--------------------------------------------
  componentDidMount() {
    this.getDonations();
    this.getNominations();
  }

  async getDonations() {
    const res = await axios.get(
      `/api/userDonations/${this.props.user.user_id}`
    );
    console.log(res.data);
    this.setState({
      project: res.data,
    });
  }

  async getNominations() {
    const res = await axios.get(
      `/api/userNominations/${this.props.user.user_id}`
    );
    this.setState({
      nominations: res.data,
    });
  }

  //------------------------Returned Data------------------------------------------

  render() {
    console.log(this.state.project);

    const mappedDonations = this.state.project.map((element, index) => {
      return (
        <div>
          <hr />
          <p>{element.project_name}</p>
          <p>{element.date}</p>
          <p>${element.total}</p>
        </div>
      );
    });

    const mappedNominations = this.state.nominations.map((element, index) => {
      return (
        <div>
          <p>{element.name}</p>
          <p>&nbsp;</p>
          <p>{element.content}</p>
          <hr />
        </div>
      );
    });

    return (
      <div className="myAccountComponent">
        <div className="myAccountContent">
          <main className="accountInfo">
            <div className="profileInfo">
              <img
                src={this.props.user.profile_pic}
                className="myAccountProfileImage"
                alt="Profile"
              />
              <div className="profileInfoContent">
                <p>{this.props.user.first_name}</p>
                <p>{this.props.user.last_name}</p>
                <p>{this.props.user.email}</p>
              </div>
            </div>
            {!this.props.user.isadmin ? <div className="statusAndHistory">
              Past Donations/ nominations and status of nominations
              <hr />
              <h6>Donations</h6>
              <p>{mappedDonations}</p>
              <hr />
              <h6>Nominations</h6>
              <hr />
              <p>{mappedNominations}</p>
            </div> : <div className='statusAndHistory'>
                <h1>Nomination Submissions</h1>
                <Admin /></div>}
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { getUser })(withRouter(MyAccount));
