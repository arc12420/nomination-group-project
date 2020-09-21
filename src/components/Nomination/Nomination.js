import React, { useState, useEffect } from "react";
import "./NominationStyle.css";
import axios from "axios";

function Nomination(props) {
  const [nomName, setNomName] = useState([]);
  const [content, setContent] = useState([]);
  // useEffect(() => {}, []); 



// ---------------------------Handlers---------------------------------------------
    const handleNomName = (value) => {
    setNomName(value);
    console.log(nomName);
  };
     
  const handleContent = (value) => {
    setContent(value);
  };
// -------------------------Functions--------------------------------------------  
  const submitNomination = () => {
    axios.post("/api/nominate", { nomName, content }).then((res) => {
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
        {/* <input
          onChange={(event) => handleFirstName(event.target.value)}
          className=""
          placeholder="First Name"
          value={}
        /> */}
        Name
        <input
          onChange={(event) => handleNomName(event.target.value)}
          className=""
          placeholder="NomName"
          // value={}
        />
        Why do they deserve this award?
        <textarea
          onChange={(event) => handleContent(event.target.value)}
          className="whyTheyDeserve"
          placeholder="Why do they deserve this award?"
          // value={}
        />
        <button 
          onClick={submitNomination}
          className="submitButton"
          >
            Submit
          </button>
      </main>
    </div>
  );
}

export default Nomination;
