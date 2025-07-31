import React from "react";
import s from "./style.module.scss";
import { Link } from "react-router-dom";
export const Hero = () => {
  return (
    <div className="container">
      <div className={s.wrapper}>
        <h1 className={s.title}>WELCOME TO TODOAPP</h1>
        <Link to={"/list"} className={s.btn}>
          Get started
        </Link>
      </div>
    </div>
  );
};
