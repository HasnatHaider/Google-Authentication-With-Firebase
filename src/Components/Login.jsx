import React from "react";
import google_icon from "../assets/google_icon.png";
import { GoogleAuthProvider, signInWithPopup } from '@firebase/auth'
import { auth } from '../../../Firebase/firebaseConfig';

const Login = () => {
    const handleGoogle = async () => {
        const provider = await new GoogleAuthProvider();
        return signInWithPopup(auth, provider)
    }
  return (
    <>
      <div className="login-container">
        <div className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button className="login-button">Login</button>
          <div className="divider">
            <span style={{margin: 'auto'}}>or</span>
          </div>
          <button onClick={handleGoogle} className="Google-login-button"> <img className="google-img" src={google_icon} /> Sign in with Google
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
