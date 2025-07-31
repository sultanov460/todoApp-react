import React from "react";
import s from "./style.module.scss";
import { AiOutlinePlus } from "react-icons/ai";

export const ToDoInput = ({ title, setTitle, about, setAbout, handleAdd }) => {
  return (
    <div>
      <form className={s.wrapper} onSubmit={handleAdd}>
        <div className={s.inputs}>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="About..."
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>
        <button>
          <AiOutlinePlus size={30} color="#ff8303" />
        </button>
      </form>
    </div>
  );
};
