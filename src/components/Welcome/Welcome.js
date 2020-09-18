import React from 'react';
import './welcome.css';

const Welcome = () => {

  return (
    <div className="welcome">
      <p>Welcome header</p>

      <div className="welcome__jumbotron">
        <div className="welcome__jumbotronInfo">
          
        </div>
        <img className="welcome__image" src={require('../../images/lucas-alexander-LOlMe8HfofI-unsplash.jpg')} alt=""/>
      </div>

      {/*  */}
    </div>
  )
}

export default Welcome;