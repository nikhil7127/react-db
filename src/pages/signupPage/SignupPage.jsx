import React from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import "./SignupPage.scss";
import logo from "../../assets/logo.png";
import HelpDialog from "../../components/helpDialog/HelpDialog";
import { signupFieldValues } from "../../constants/Auth/AuthConstants";

const SignupPage = (props) => {
  return (
    <div className="auth-page">
      <div id="signup-container">
        <div className="branding">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="signup-form">
          {signupFieldValues.map((feildValue) => (
            <InputField {...feildValue} />
          ))}
          <Button text="Sign up" />
        </div>
      </div>
      <HelpDialog
        text="Already have an account! "
        route={() => props.history.push("/login")}
        routeText="Login"
      />
    </div>
  );
};

export default SignupPage;
