import React from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import "./LoginPage.scss";
import logo from "../../assets/logo.png";

const LoginPage = (props) => {
  return (
    <div className="auth-page">
      <div id="login-container">
        <div className="branding">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="login-form">
          <InputField
            placeholder="Username or Email"
            type="text"
            className="login-username"
          />
          <InputField
            placeholder="Password"
            type="password"
            className="login-password"
          />
          <Button text="login" />
        </div>
        <div className="reset-password">Forgot Password?</div>
      </div>
      <div className="help">
        Didn't have a account ?
        <div onClick={() => props.history.push("/signup")}> Sign up</div>
      </div>
    </div>
  );
};

export default LoginPage;
