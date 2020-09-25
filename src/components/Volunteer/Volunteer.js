import React, {useState, useEffect} from 'react';
import axios from 'axios';
import VolunteerMapped from './VolunteerMapped';
import './volunteer.css';


const Volunteer = () => {

  const [volunteerProjects, setVolunteerProjects] = useState([]);

  useEffect(() => {
      axios.get('/api/volunteer/')
      .then(res => setVolunteerProjects(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='volunteers'>
      <h2>Upcoming Events</h2>
      {volunteerProjects.map(proj => {
        return <VolunteerMapped className='chowderchowder' key={proj.project_id} proj={proj} />
      })}
      
      
    </div>
  )
}

export default Volunteer;