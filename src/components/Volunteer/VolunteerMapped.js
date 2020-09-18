import React from 'react';

const VolunteerMapped = (props) => {

    const {proj} = props;
    return (
        <div>
            <h6>{proj.name}</h6>
            <p>{proj.date}</p>
            <span>{proj.time}</span>
            <p>{proj.description}</p>
            {/* The button below will probably be hooked up to nodemailer or Twilio?*/}
            <button>Sign Up for Text Reminders</button>

        </div>
    )
}

export default VolunteerMapped;