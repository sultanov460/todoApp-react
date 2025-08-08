import React, { useState } from "react";
import s from "./style.module.scss";
import { GrClose } from "react-icons/gr";
import { MdCheckCircle, MdEdit, MdRadioButtonChecked } from "react-icons/md";
import { EditInput } from "../EditInput/EditInput";

export const ToDoItem = ({ todo, handleDelete, handleUpdate }) => {
  const [edit, setEdit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = () => setIsChecked(!isChecked);

  const handleCancelEdit = () => {
    setEdit(false);
  };

  return (
    <div
      className={s.wrapper}
      style={{
        border: isChecked ? "2px solid #22C55E" : "2px solid #a35709",
      }}
    >
      {edit ? (
        <EditInput
          currentTodo={todo}
          onSave={(id, newTitle, newDesc) => {
            handleUpdate(id, newTitle, newDesc); // обновление
            setEdit(false); // выход из режима редактирования
          }}
          onCancel={handleCancelEdit} // отмена
        />
      ) : (
        <div className={`${s.content} ${isChecked && s.complete}`}>
          <h1>{todo.title}</h1>
          <p>{todo.description}</p>
        </div>
      )}

      <div className={s.buttons}>
        <button
          onClick={() => !isChecked && setEdit(!edit)}
          className={`${isChecked ? s.complete : s.btn}`}
        >
          <MdEdit color="#3B82F6" size={17} />
        </button>
        <button onClick={handleCheck} className={s.btn}>
          {isChecked ? (
            <MdRadioButtonChecked size={17} color="#FF8303" />
          ) : (
            <MdCheckCircle color="#22C55E" size={17} />
          )}
        </button>
        <button onClick={() => handleDelete(todo.id)} className={s.btn}>
          <GrClose size={13} color="#FF8303" />
        </button>
      </div>
    </div>
  );
};
