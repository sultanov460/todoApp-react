import { useState } from "react";
import s from "./style.module.scss";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

import React from "react";

const Sign = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      email: "",
      password: "",
    });
  };
  const handlePassword = (e) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="container">
      <div className={s.wrapper}>
        <form className={s.signGroup} onSubmit={handleSubmit}>
          <input
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />
          <label className={s.emailLabel}>Email</label>
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <label className={s.passwordLabel}>Password</label>
          <button className={s.passwordVisible} onClick={handlePassword}>
            {passwordVisible ? (
              <MdVisibilityOff size={20} />
            ) : (
              <MdVisibility size={20} />
            )}
          </button>
        </form>
        <button className={s.btn} type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Sign;
