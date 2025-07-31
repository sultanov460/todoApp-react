import React from "react";
import s from "./style.module.scss";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = ({ toDos }) => {
  return (
    <div className={s.wrapper}>
      {toDos.length > 0 ? (
        toDos.map((todo) => <ToDoItem key={todo.id} todo={todo} />)
      ) : (
        <h1>No Tasks...</h1>
      )}
    </div>
  );
};
