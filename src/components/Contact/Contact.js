import React, { useState, useRef } from 'react';
import '../Contact/contact.css';

const Contact = () => {
  const [contactEmail, setContactEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitRequest = async (e) => {
    e.preventDefault();
    const response = await fetch("/access", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ contactEmail, message })
    });
    const resData = await response;
    console.log(resData)
    if (resData.status === 200) {
      alert("Message Sent.")
      setMessage('')
      setContactEmail('')
    } else if (resData.status === 500) {
      alert("Message failed to send.")
    }
  };
  return (
    <div className='contact'>
      <div>
        <form
          onSubmit={submitRequest}>
          <h2>Contact us</h2>
          <div id='address-box'>
            <label htmlFor='contactEmail'>Your Email:</label>
            <input
              type='text'
              name='contactEmail'
              placeholder='Email Address'
              className="contactEmailInput"
              onChange={e => setContactEmail(e.target.value)}
              value={contactEmail}
              required />
          </div>
          <div id='message-box'>
            <label htmlFor='message'>How can we help?</label>
            <textarea
              type='text'
              name='message'
              placeholder='Place your message here'
              onChange={e => setMessage(e.target.value)}
              value={message}
              required />
          </div>
          <div id='button-box'>
            <button className="contactSubmitButton" type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;