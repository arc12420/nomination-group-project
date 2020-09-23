import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './administration.css'

const Administration = () => {
  const [nominations, setNominations] = useState([]);
  const [status, setStatus] = useState('');

  const submitted = [];
  const underReview = [];
  const finalists = [];
  const accepted = [];
  const declined = [];
  
  const changeStatus = (nomination_id) => {
    axios.put('/api/status', {nomination_id, status})
    .then(res => console.log(res.data))
    .catch(err => console.log(err))
  }
  useEffect(() => {
    axios.get('/api/nominations')
      .then(res => {
        setNominations(res.data)
        
        })
      .catch(err => console.log(err))
      
  }, [status])

  nominations.map(nom => {
    if (nom.status === 'Submitted') {
      submitted.push(nom);
    } else if (nom.status === 'Under Review') {
      underReview.push(nom)
      console.log('hitting under review')
    } else if (nom.status === 'Finalist') {
      finalists.push(nom)
    } else if (nom.status === 'Accepted!') {
      accepted.push(nom)
    } else if (nom.status === 'Declined') {
      declined.push(nom)
    }
  })

  

  
  


  const handleChange = (event) => {
    setStatus(event.target.value)
    console.log(status);
  }

  return (
    <div className='admin'>
      <div className='submitted'>
        <h3>Submitted</h3>
        {submitted.map(nom => {
          return (<div key={nom.nomination_id}>
            <h2>Nominee: {nom.name}</h2>
            <p>Submission: {nom.content}</p>
            <select onChange={handleChange}>
              <option>{nom.status}</option>
              <option value='Under Review'>Under Review</option>
              <option value='Finalist'>Finalist</option> 
              <option value='Accepted!'>Accepted!</option>
              <option value='Declined'>Declined</option>
            </select>
            <button onClick={() => changeStatus(nom.nomination_id)}>Save</button>
          </div>)
        })}

      </div>
      <div className='under-review'>
        <h3>Under Review</h3>
        {underReview.map(nom => {
          return (<div key={nom.nomination_id}>
            <h2>Nominee: {nom.name}</h2>
            <p>Submission: {nom.content}</p>
            <select onChange={handleChange}>
              <option>{nom.status}</option>
              <option value='Under Review'>Under Review</option>
              <option value='Finalist'>Finalist</option> 
              <option value='Accepted!'>Accepted!</option>
              <option value='Declined'>Declined</option>
            </select>
            <button onClick={() => changeStatus(nom.nomination_id)}>Save</button>
          </div>)
        })}
      </div>
      <div className='finalists'>
        <h3>Finalists</h3>
        {finalists.map(nom => {
          return (<div key={nom.nomination_id}>
            <h2>Nominee: {nom.name}</h2>
            <p>Submission: {nom.content}</p>
            <select onChange={handleChange}>
              <option>{nom.status}</option>
              <option value='Under Review'>Under Review</option>
              <option value='Finalist'>Finalist</option> 
              <option value='Accepted!'>Accepted!</option>
              <option value='Declined'>Declined</option>
            </select>
            <button onClick={() => changeStatus(nom.nomination_id)}>Save</button>
          </div>)
        })}
      </div>

      <div className='accepted'>
        <h3>Accepted</h3>
        {accepted.map(nom => {
          return (<div key={nom.nomination_id}>
            <h2>Nominee: {nom.name}</h2>
            <p>Submission: {nom.content}</p>
            <select onChange={handleChange}>
              <option>{nom.status}</option>
              <option value='Under Review'>Under Review</option>
              <option value='Finalist'>Finalist</option> 
              <option value='Accepted!'>Accepted!</option>
              <option value='Declined'>Declined</option>
            </select>
            <button onClick={() => changeStatus(nom.nomination_id)}>Save</button>
          </div>)
        })}
      </div>

      <div className='declined'>
        <h3>Declined</h3>
        {declined.map(nom => {
          return (<div key={nom.nomination_id}>
            <h2>Nominee: {nom.name}</h2>
            <p>Submission: {nom.content}</p>
            <select onChange={handleChange}>
              <option>{nom.status}</option>
              <option value='Under Review'>Under Review</option>
              <option value='Finalist'>Finalist</option> 
              <option value='Accepted!'>Accepted!</option>
              <option value='Declined'>Declined</option>
            </select>
            <button onClick={() => changeStatus(nom.nomination_id)}>Save</button>
          </div>)
        })}

      </div>

    </div>
  )
}

export default Administration;