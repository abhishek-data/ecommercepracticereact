import React, { useRef, useState } from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  const [contact, setContact]  = useState([])
  const nameRef = useRef("");
  const emailRef = useRef("");
  const phoneRef = useRef("");
  const contactsSubmitHandler = (event) => {
    event.preventDefault();
    const data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
    };
    setContact([...contact, data])
    fetch("https://react-http-1a78e-default-rtdb.firebaseio.com/contact.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-Type": "application/json",
      },
    }).then(alert("Thank you for contacting us, we will reach you shortly."))
    nameRef.current.value = ''
    emailRef.current.value = ''
    phoneRef.current.value = ''
  };

  return (
    <div className={classes.control}>
      <h1>Contact us</h1>
      <form onSubmit={contactsSubmitHandler}>
        <div>
          <label>Name</label>
          <input type="text" ref={nameRef}></input>
        </div>
        <div>
          <label>Email</label>
          <input type="email" ref={emailRef}></input>
        </div>
        <div>
          <label>Phone Number</label>
          <input type="number" ref={phoneRef}></input>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
