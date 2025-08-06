import React from "react";
import s from "./style.module.scss";
import { notifyWarning } from "../../utils/notifications";
import { useState } from "react";
import { Container } from "../../components/Container/Container.jsx";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!formData.name && !formData.email && !formData.message) {
      notifyWarning("All fields are required");
      return;
    }
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  }

  return (
    <Container>
      <form className={s.group} onSubmit={handleSubmit}>
        <h1>Contact</h1>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          name="email"
        />
        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          value={formData.message}
        ></textarea>
        <button>Submit</button>
      </form>
    </Container>
  );
};

export default Contact;
