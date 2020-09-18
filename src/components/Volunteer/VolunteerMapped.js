import React from 'react';
import './volunteer.css';

const VolunteerMapped = (props) => {

    const {proj} = props;
    return (
        <div className='volunteer-project'>
            <h4 className='proj-name'>{proj.name}</h4>
            <p>{proj.date}</p>
            <span>{proj.time}</span>
            <p>{proj.description}</p>
            {/* The button below will probably be hooked up to nodemailer or Twilio?*/}
            <button>Sign Up for Text Reminders</button>

        </div>
    )
}

export default VolunteerMapped;