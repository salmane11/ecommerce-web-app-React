import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../store/userContext";
import Card from "../../ui/Card";
import styles from "./Sign.module.css";

function Sign() {

  const userctx=useContext(userContext);
  const navigate=useNavigate();

  const [isRegistred, setIsRegistred] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");

  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const confirmedPasswordHandler = (event) => {
    setConfirmedPassword(event.target.value);
  };
  //to switch between sign up page and sign in page
  const switchHandler = () => {
    setIsRegistred(!isRegistred);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (isRegistred === true) {
      if(email==="123@gmail.com" && password==="password"){
        userctx.logIn(email);
        navigate("/");
      }
      //to do with sign in (validation and test)
    } else {
      //to do with sign up
    }
    setEmail("");
    setPassword("");
    setConfirmedPassword("");
  };

  return (
    <Card className={styles.sign}>
      <img src={require("../../images/logo.png")} alt="logo" />
      <form onSubmit={submitHandler}>
        <label>Email</label>
        <input
          placeholder="your Email"
          type="text"
          value={email}
          onChange={emailHandler}
        />

        <label>Password</label>
        <input
          placeholder="your Password"
          type="password"
          value={password}
          onChange={passwordHandler}
        />

        {!isRegistred && (
          <React.Fragment>
            <label>Confirm password</label>
            <input
              placeholder="confirm your Password"
              type="password"
              value={confirmedPassword}
              onChange={confirmedPasswordHandler}
            />
          </React.Fragment>
        )}

        <button type="submit">{isRegistred ? "SignIn" : "SignUp"}</button>
        <button type="button" onClick={switchHandler}>
          {isRegistred
            ? "create new account"
            : "you already have an account. Go to sign In"}
        </button>
      </form>
    </Card>
  );
}
export default Sign;
