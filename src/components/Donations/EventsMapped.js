import React from 'react';
import {useHistory} from 'react-router-dom';

const EventsMapped = (props) => {
    const {proj} = props;
    const history = useHistory();
    return (
        <div className='proj' style={{backgroundImage: `url(${proj.photo})`}} onClick={() => history.push('/volunteer')}>
            <div className='.proj-info'>
            <h4 className='proj-name'>{proj.name}</h4>
            <p>{proj.date}</p>
            <span>{proj.time}</span>
            </div>
            
            

        </div>
    )
}

export default EventsMapped;