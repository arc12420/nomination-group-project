import React, { useState, useEffect } from "react";
import "./NominationStyle.css";
import axios from "axios";
import nomImage from "../../nomImage.jpg";

function Nomination(props) {
  const [name, setNomName] = useState([]);
  const [content, setContent] = useState([]);
  // useEffect(() => {}, []);

  // ---------------------------Handlers---------------------------------------------
  const handleNomName = (value) => {
    setNomName(value);
    // console.log(nomName);
  };

  const handleContent = (value) => {
    setContent(value);
    // console.log(content);
    // console.log(props.match.params.id);
  };
  // -------------------------Functions--------------------------------------------
  const submitNomination = () => {
    axios.post("/api/nominate", { name, content }).then((res) => {
      props.history.push("/");
    });
  };
  //------------------------Returned Data------------------------------------------
  return (
    <div className="nominationComponent">
      <p className="nominationAbout">
        {" "}
        <b>The Ivory Altruism Award</b> <br />
        This award goes to recognize amazing individuals within our communities.
        These are individuals who display great selflessness and giving even
        when it may be difficult.
      </p>
      <main className="nominationInputs">
        <div className="nomNameInputImageAndTitle">
          <div className="nomNameInputAndTitle">
        Nominee Name
        <input
          onChange={(event) => handleNomName(event.target.value)}
          className=""
          // placeholder="Nominee Name"
        />
          </div>
        <img 
        className="nomImage"
        src={nomImage}
        alt="nomImage"
        />
        </div>
        <div className="nomContInputAndTitle">
        Why do they deserve this award?
        {/* <textarea
          onChange={(event) => handleContent(event.target.value)}
          className="whyTheyDeserve"
          placeholder="Description about why your Nominee deserves this award"
        /> */}
        <div className="whyTheyDeserve" 
        contentEditable="true"
        placeholder="Description about why your Nominee deserves this award">
        </div>
        </div>
        <div className="buttonBox">
        <button onClick={submitNomination} className="submitButton">
          Submit
        </button>
        </div>
      </main>
    </div>
  );
}

export default Nomination;
