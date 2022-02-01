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
        {/* <label htmlFor="">Name</label><br></br> */}
        <input 
        type="text" 
        className="name" 
        placeholder='Name'
        name="fullName"
        // value={name} 
        // onChange={(e) => setName(e.target.value)} 
        />
    </div>
    <div>
        {/* <label htmlFor="">Email</label><br></br> */}
        <input type="email" name="email" id="" className='email' 
        placeholder='Email'
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div>
        {/* <label htmlFor="">Message</label><br></br> */}
        <textarea name="message" id="" cols="30" rows="3" className='message'
        placeholder='Your message...'
        // value={message}
        // onChange={(e) => setMessage(e.target.value)}
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
