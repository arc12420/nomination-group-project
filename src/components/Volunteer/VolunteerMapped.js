import React from 'react';
import './volunteer.css';

// import Button from '@material-ui/core/Button'


const VolunteerMapped = (props) => {

    const { proj } = props;
    return (
        <div className='volunteer__projectCard' style={{ backgroundImage: `url(${proj.photo})` }}>
            <div className="volunteer__projectCardInfo">
                <h4 className='proj-name'>{proj.name}</h4>
                <span>{proj.date}</span>
                <span>{proj.time}</span>
                <p>{proj.description}</p>
                {/* The button below will probably be hooked up to nodemailer or Twilio?*/}
                <button>Sign Up for Text Reminders</button>
            </div>

        </div>
    )
}

export default VolunteerMapped;