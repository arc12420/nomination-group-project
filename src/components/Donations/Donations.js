import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import {getFundraisers} from '../../redux/reducer';
import DonationsMapped from './DonationsMapped';

const Donations = () => {
  const state = useSelector(r => r.fundraisers);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/api/donations')
    .then(res => dispatch(getFundraisers(res.data)))
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='donations'>
      <p>Donations</p>
      {state.map(project => {
        return <DonationsMapped key={project.project_id} project={project}/>
      })}
    </div>
  )
}

export default Donations;