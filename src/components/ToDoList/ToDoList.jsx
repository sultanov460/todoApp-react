import React from "react";
import s from "./style.module.scss";
import { ToDoItem } from "../ToDoItem/ToDoItem";

export const ToDoList = ({ toDos, handleDelete, handleUpdate }) => {
  return (
    <div className={s.wrapper}>
      {toDos.length > 0 ? (
        toDos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        ))
      ) : (
        <div className={s.noTasks}>
          <div className="line"></div>
          <h1>No Tasks...</h1>
          <div className="line"></div>
        </div>
      )}
    </div>
  );
};
