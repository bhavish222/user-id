import "./Signup.scss";
import { auth, provider } from "../FireBase";
import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import FormInput from "../../components/formInput/FormInput";
import {
  updateProfile,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
    conirmPassword: "",
  });

  const { dispatch } = useContext(AuthContext);

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email-address",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number, 1 special character",
      pattern: `(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[A-Za-z0-9!@#$%^&*()_+]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match",
      pattern: inputValues.password,
      required: true,
    },
  ];

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    let flag = true;
    if (flag) document.getElementById("nameForm").submit();

    try {
      await createUserWithEmailAndPassword(
        auth,
        inputValues.email,
        inputValues.password
      ).then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: inputValues.username,
        });
      });
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
      });
  };

  return (
    <div className="signup">
      <form onSubmit={handleSignup} id="nameForm" action="/" method="GET">
        <h2>Sign Up</h2>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={inputValues[input.name]}
            onChange={handleChange}
          />
        ))}
        <button type="submit">Sign Up</button>
        <div className="formLink">
          <span>Already have an account? </span>
          <NavLink
            to="/login"
            className="formSignup"
            style={{ textDecoration: "none" }}
          >
            <strong>Sign In</strong>
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

// export {name}
export default Signup;
