import { useContext, useRef, useState } from "react";
import CartContext from "../../../store/cart-context";
import { useHistory } from "react-router-dom";

import classes from "./Login.module.css";

const Login = () => {
  const history = useHistory();
  
  const [isLoading, setIsLoading] = useState(false);
  
  const emailRef = useRef();
  const passwordRef = useRef();
  const cartCtx = useContext(CartContext);
 

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    cartCtx.userIndentifier(enteredEmail)
    setIsLoading(true);


    fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyA7cKfrG98jqjqZMsnahJ0oeLNAd27-djg", {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => {
        setIsLoading(false);
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        cartCtx.login(data.idToken);
        history.replace("/store");
        
      })
      .catch((err) => {
        alert(err.message);
      });
  };

 

  return (
    <section className={classes.auth}>
      <h1>Login</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" ref={emailRef} id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input type="password" ref={passwordRef} id="password" required />
        </div>
        <div className={classes.actions}>
          <button>Login</button>
          {isLoading && <p>Sending Request...</p>}
        </div>
      </form>
    </section>
  );
};

export default Login;
