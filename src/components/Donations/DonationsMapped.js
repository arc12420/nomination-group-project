import React from 'react';

const DonationsMapped = (props) => {
    const {project} = props;
    return(
        <div className='project'>
            <p>{project.name}</p>
            <p>${project.donation_goal}</p>
            <p>{project.donation_pitch}</p>

        </div>
    )
}

export default DonationsMapped;