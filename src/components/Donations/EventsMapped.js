import React from 'react';

const EventsMapped = (props) => {
    const {proj} = props;
    return (
        <div className='proj'>
            <h4 className='proj-name'>{proj.name}</h4>
            <p>{proj.date}</p>
            <span>{proj.time}</span>
            
            

        </div>
    )
}

export default EventsMapped;