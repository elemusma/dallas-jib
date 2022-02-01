import React, { useState } from 'react';
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: "AIzaSyBCErqMGGdKgw5qBw5s3AqXssEMxpeseR8",
//     authDomain: "dallas-jib-form.firebaseapp.com",
//     projectId: "dallas-jib-form",
//     storageBucket: "dallas-jib-form.appspot.com",
//     messagingSenderId: "757581317639",
//     appId: "1:757581317639:web:28bc032980bcc636730ca2"
//   };

//   const app = initializeApp(firebaseConfig);
//   const db = app.database.ref();


function Form() {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(name, email, message);
    //     console.log(app);

    //     db.collection('contacts').add({
    //         name: name,
    //         email: email,
    //         message: message
    //     })
    //     .then(() =>{
    //         alert('Message has been submitted.');
    //     })
    //     .catch((error) =>{
    //         alert(error.message);
    //     });

    // };



  return (
  <>
  <form action="" className="contact-form" 
//   onSubmit={handleSubmit}
  >
    <div>
        <label htmlFor="">Name</label><br></br>
        <input 
        type="text" 
        className="name" 
        placeholder='Name'
        // value={name} 
        // onChange={(e) => setName(e.target.value)} 
        />
    </div>
    <div>
        <label htmlFor="">Email</label><br></br>
        <input type="email" name="" id="" className='email' 
        placeholder='Email'
        // value={email}
        // onChange={(e) => setEmail(e.target.value)}
        />
    </div>
    <div>
        <label htmlFor="">Message</label><br></br>
        <textarea name="" id="" cols="30" rows="3" className='message'
        placeholder='Your message...'
        // value={message}
        // onChange={(e) => setMessage(e.target.value)}
        ></textarea>
    </div>
    <button type="submit" className="bg-accent">Submit</button>

</form>
  </>
    );
}

export default Form;
