import React from "react";
import s from "./style.module.scss";
import { GrClose } from "react-icons/gr";
export const ToDoItem = ({ todo }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
      </div>
      <button>
        <GrClose size={13} color="#FF8303" />
      </button>
    </div>
  );
};
