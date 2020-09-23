import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Administration = () => {
  useEffect(() => {
    axios.get('/api/nominations')
      .then(res => setNominations(res.data))
      .catch(err => console.log(err))
  }, [])

  const [nominations, setNominations] = useState([]);

  return (
    <div>
      <h1>Incoming Nominations</h1>
      {nominations.map(nom => {
        return (<div key={nom.nomination_id}> 
          <h2>Nominee: {nom.name}</h2>
          <p>{nom.content}</p>
          <p>{nom.status}</p>
          <select id="cars" name="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
          </select>

        </div>)
      })}

    </div>
  )
}

export default Administration;