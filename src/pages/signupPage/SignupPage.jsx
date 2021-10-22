import React from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import "./SignupPage.scss";
import logo from "../../assets/logo.png";

const SignupPage = (props) => {
  return (
    <div className="auth-page">
      <div id="signup-container">
        <div className="branding">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="signup-form">
          <InputField
            placeholder="Username"
            type="text"
            className="signup-username"
          />
          <InputField
            placeholder="Email"
            type="email"
            className="sigup-email"
            sendOTP={true}
          />
          <InputField placeholder="OTP" type="number" className="OTP" />
          <InputField
            placeholder="Password"
            type="password"
            className="signup-password"
          />
          <Button text="Sign up" />
        </div>
      </div>
      <div className="help">
        Already have a account ?
        <div onClick={() => props.history.push("/login")}>Login</div>
      </div>
    </div>
  );
};

export default SignupPage;
