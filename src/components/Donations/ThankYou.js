import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import EventsMapped from './EventsMapped';
import axios from 'axios';


const ThankYou = () => {
    const state = useSelector(r => r);
    const [volunteerProjects, setVolunteerProjects] = useState([]);

  useEffect(() => {
      axios.get('/api/volunteer/')
      .then(res => setVolunteerProjects(res.data))
      .catch(err => console.log(err))
  }, [])

    return(
        <div className='thanks' >
            {state.isLoggedIn ? <h2>Thank you, {state.user.first_name}!</h2> : <h2>Thank your for your generosity!</h2>}
            <p>Your donation of ${state.donation.total/100} to the {state.donation.project_name} project is greatly appreciated. You'll receive an emailed receipt shortly.</p>
            <p>Check out our upcoming events!</p>
            <hr/>
            <div className='proj-container'>
            {volunteerProjects.map(proj => {
                return <EventsMapped key={proj.project_id} proj={proj}/>
            })}
            </div>
        </div>
    )
}

export default ThankYou;
