import React from "react";
import { Link } from "react-router-dom";

import "../../App.css";
import BackgroundImage from "../../assets/images/loginPage-bg.jpg";

export default function SignInPage() {
  return (
    <div className="text-center  " style={login__header_style}>
        <div className="mp-5-auto">
      <h2 className="sign__up-font">Sign in to us</h2>
      <form action="/dashboard" method="get">
        <p>
          <label>Username or email address</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" required />
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Login
          </button>
        </p>
      </form>
      <footer>
        <p>
          First time? <Link to="/register">Create an account</Link>.
        </p>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer>
      </div>
    </div>
  );
}

const login__header_style = {
  width: "100%",
  height: "90vh",
  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};
