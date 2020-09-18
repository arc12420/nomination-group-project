import React, { useState, useEffect} from "react";
import "../Nomination/Nomination.css";

function Nomination(props) {
  const [firstName, setFirstName] = useState([]);
  const [lastName, setLastName] = useState([]);
  const [image, setImage] = useState([]);
  const [content, setContent] = useState([]);
  useEffect(() => {}, []);

  const handleTitle = (value) => {
    setTitle(value);
  };

      return (
      <div className="nominationComponent">
        <p>
          {" "}
          <b>The Ivory Altruism Award</b> <br />
          This award goes to recognize amazing individuals within our
          communities. These are individuals who display great selflessness and
          giving even when it may be difficult.
        </p>
        <main className="nominationInputs">
          First Name
          <input
            className=""
            placeholder="First Name"
            // value={}
          />
          Last Name
          <input
            className=""
            placeholder="Last Name"
            // value={}
          />
          Image Of Nominee
          <input
            className=""
            placeholder="Image Of Nominee"
            // value={}
          />
          Why do they deserve this award?
          <textarea
            className="whyTheyDeserve"
            placeholder="Why do they deserve this award?"
            // value={}
          />
          <button className="submitButton">Submit</button>
        </main>
      </div>
    );
  
}

export default Nomination;
