import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.css';

const Result = () => {
  return(
    <>
    <p>Thank you for your message!</p>
    </>
  )
}

function Form() {

  const form = useRef();

  const [result, showResult] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_z5epl77', 'template_sisfmyo', form.current, 'user_PA95OTCFbmb8UCahA1z4k')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);

  };

  return (
  <>
  <form action="" className="contact-form text-left" ref={form} 
  onSubmit={sendEmail}
  >
    <div>
        <input type="text" className="name" placeholder='Name' name="fullName"
        required />
    </div>
    <div>
        <input type="tel" className="tel" placeholder='Phone number' name="phone"
        required />
    </div>
    <div>
        <input type="email" name="email" id="" className='email' 
        placeholder='Email'
        required />
    </div>
    <div>
        <input type="text" name="company" id="" className='company' 
        placeholder='Company Name'
        />
    </div>
    <div>
        <textarea name="message" id="" cols="30" rows="3" className='message'
        placeholder='Your message...'
        ></textarea>
    </div>
    <input type="hidden" value={window.location.href} name="form_url" />
    <button type="submit" className="bg-accent submit text-white bold">Submit</button>

    <div className="row">
      { result ? <Result /> : null }
    </div>
</form>
  </>
    );
}

export default Form;
