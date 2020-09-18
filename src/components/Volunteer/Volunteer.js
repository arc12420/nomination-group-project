import React, {useState, useEffect} from 'react';
import axios from 'axios';
import VolunteerMapped from './VolunteerMapped';

const Volunteer = () => {

  const [volunteerProjects, setVolunteerProjects] = useState([]);

  useEffect(() => {
      axios.get('/api/volunteer/projects')
      .then(res => setVolunteerProjects(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      <h2>We love Volunteers!</h2>
      {volunteerProjects.map(proj => {
        return <VolunteerMapped key={proj.project_id} proj={proj}/>
      })}
      
      
    </div>
  )
}

export default Volunteer;