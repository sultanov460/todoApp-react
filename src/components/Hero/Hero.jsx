import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
import { Container } from "../Container/Container";
export const Hero = () => {
  return (
    <Container>
      <div className={s.wrapper}>
        <h1 className={s.title}>WELCOME TO TODOAPP</h1>
        <Link to={"/list"} className={s.btn}>
          Get started
        </Link>
        <Link to={"/contact"} className={s.btn}>
          Contact
        </Link>
      </div>
    </Container>
  );
};
