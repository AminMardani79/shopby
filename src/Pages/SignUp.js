import React, { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "../Utils/notify";
import { validate } from "./validation/signUpValidation";
import styles from "../Assets/SignUp.module.css";

const SignUp = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isAccepted: false,
  });
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState({});
  const [touch, setTouch] = useState({});
  const changeHandler = (event) => {
    if (event.target.name === "isAccepted") {
      setData({ ...data, [event.target.name]: event.target.checked });
    } else {
      setData({ ...data, [event.target.name]: event.target.value });
    }
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (Object.values(errors).length) {
      notify("error", "Enter valid data");
      setErrorMessage({
        name: true,
        email: true,
        password: true,
        confirmPassword: true,
        isAccepted: true,
      });
    } else {
      notify("success", "You are successfuly signed up");
    }
  };
  useEffect(() => {
    setErrors(validate(data));
  }, [data]);
  const focusHandler = (event) => {
    setTouch({ ...touch, [event.target.name]: true });
  };
  return (
    <div className={styles.formContainer}>
      <form onSubmit={submitHandler}>
        <h1 className={styles.formHeader}>SignUp</h1>
        <div className={styles.inputField}>
          <input
            className={`${
              errors.name && errorMessage.name && styles.invalidInput
            } ${touch.name && data.name && styles.touchedInput}`}
            type="text"
            name="name"
            value={data.name}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <label className={data.name && styles.activeLabel}>Name</label>
          {errors.name && errorMessage.name && <span>{errors.name}</span>}
        </div>
        <div className={styles.inputField}>
          <input
            className={
              errors.email && errorMessage.email && styles.invalidInput
            }
            type="text"
            name="email"
            value={data.email}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <label className={data.email && styles.activeLabel}>Email</label>
          {errors.email && errorMessage.email && <span>{errors.email}</span>}
        </div>
        <div className={styles.inputField}>
          <input
            className={
              errors.password && errorMessage.password && styles.invalidInput
            }
            type="password"
            name="password"
            value={data.password}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <label className={data.password && styles.activeLabel}>
            Password
          </label>
          {errors.password && errorMessage.password && (
            <span>{errors.password}</span>
          )}
        </div>
        <div className={styles.inputField}>
          <input
            className={
              errors.confirmPassword &&
              errorMessage.confirmPassword &&
              styles.invalidInput
            }
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={changeHandler}
            onFocus={focusHandler}
          />
          <label className={data.confirmPassword && styles.activeLabel}>
            ConfirmPassword
          </label>
          {errors.confirmPassword && errorMessage.confirmPassword && (
            <span>{errors.confirmPassword}</span>
          )}
        </div>
        <div>
          <label>I accept terms of privacy policy</label>
          <input
            type="checkbox"
            name="isAccepted"
            checked={data.isAccepted}
            onChange={changeHandler}
          />
          {errors.isAccepted && errorMessage.name && (
            <span>{errors.isAccepted}</span>
          )}
        </div>
        <div>
          <a href="#">Login</a>
          <button type="submit">SignUp</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;
