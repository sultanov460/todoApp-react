import React, { useState } from "react";
import s from "./style.module.scss";
import { GrClose, GrCheckmark } from "react-icons/gr";

export const EditInput = ({ currentTodo, onSave, onCancel }) => {
  const [title, setTitle] = useState(currentTodo.title);
  const [about, setAbout] = useState(currentTodo.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(currentTodo.id, title, about);
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <div className={s.inputs}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          value={about}
          onChange={(e) => setAbout(e.target.value)}
        />
      </div>
      <div className={s.buttons}>
        <button type="submit" className={s.btn}>
          <GrCheckmark size={15} color="#22C55E" />
        </button>
        <button type="button" className={s.btn} onClick={onCancel}>
          <GrClose size={15} color="#FF8303" />
        </button>
      </div>
    </form>
  );
};
