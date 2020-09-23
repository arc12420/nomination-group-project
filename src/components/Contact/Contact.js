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
          <div>
            <label htmlFor='contactEmail'>Your Email</label>
            <input
              type='text'
              name='contactEmail'
              placeholder='Email Address'
              onChange={e => setContactEmail(e.target.value)}
              value={contactEmail}
              required />
          </div>
          <div>
            <label htmlFor='message'>How can we help?</label>
            <textarea
              type='text'
              name='message'
              placeholder='Place your message here'
              onChange={e => setMessage(e.target.value)}
              value={message}
              required />
          </div>
          <div>
            <button type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;