import React from "react";
import Button from "../../components/button/Button";
import InputField from "../../components/inputField/InputField";
import "./LoginPage.scss";
import logo from "../../assets/logo.png";
import HelpDialog from "../../components/helpDialog/HelpDialog";
import { loginFieldValues } from "../../constants/Auth/AuthConstants";

const LoginPage = (props) => {
  return (
    <div className="auth-page">
      <div id="login-container">
        <div className="branding">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="login-form">
          {loginFieldValues.map((feildValue) => (
            <InputField {...feildValue} />
          ))}
          <Button text="login" />
        </div>
        <div className="reset-password">Forgot Password?</div>
      </div>
      <HelpDialog
        text="Didn't have an account?"
        route={() => props.history.push("/signup")}
        routeText="Sign up"
      />
    </div>
  );
};

export default LoginPage;
