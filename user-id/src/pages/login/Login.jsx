import React, { useContext } from "react";
import "./Login.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth, provider } from "../FireBase";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };
  console.log(inputs);

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      signInWithEmailAndPassword(auth, inputs.email, inputs.password).then(
        (userCredential) => {
          // Signed in
          const user = userCredential.user;
          dispatch({ type: "LOGIN_SUCCESS", payLoad: user });
          // ...
          navigate("/thankyou");
        }
      );
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });

    }
  };

  const signInWithGoogle = (e) => {
    dispatch({ type: "LOGIN_START" });
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch({ type: "LOGIN_SUCCESS", payLoad: user });
        navigate("/thankyou");
      })
      .catch((error) => {
        dispatch({ type: "LOGIN_FAILURE" });
        {window.alert("Please turn on your internet!")}
      });
  };

  return (
    <div className="login">
      <form >
        <h2>Login</h2>
        <div className="formInput">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="formInput">
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" onClick={handleLogin}>
          Login
        </button>
        <div className="formLink">
          <span>Don't have an account? </span>
          <NavLink
            to="/signup"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            <strong className="strong">Sign Up</strong>
          </NavLink>
        </div>
        <div className="line"></div>
        <div className="media-options">
          <NavLink
            to="#"
            className="google"
            style={{ textDecoration: "none" }}
            onClick={signInWithGoogle}
          >
            <img src="/assets/google.png" alt="" className="googleImg" />
            <span>Login with Google</span>
          </NavLink>
        </div>
      </form>
      <div class="wrapper">
        <div class="item item0"></div>
        <div class="item item1"></div>
        <div class="item item2"></div>
        <div class="item item3"></div>
        <div class="item item4"></div>
        <div class="item item5"></div>
        <div class="item item6"></div>
        <div class="item item7"></div>
        <div class="item item8"></div>
        <div class="item item9"></div>
        <div class="item item10"></div>
      </div>
    </div>
  );
};

export default Login;
