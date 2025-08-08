import { useState, useEffect } from "react";
import { ToDoInput } from "../../components/ToDoInput/ToDoInput";
import s from "./style.module.scss";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import { notifySuccess, notifyWarning } from "../../utils/notifications.js";
import { EditInput } from "../../components/EditInput/EditInput.jsx";

function List() {
  const [toDos, setToDos] = useState(() => {
    try {
      const saved = localStorage.getItem("todos");
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error("Error parsing localStorage todos:", e);
      return [];
    }
  });

  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoAbout, setToDoAbout] = useState("");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(toDos));
  }, [toDos]);

  function handleAdd(event) {
    event.preventDefault();
    if (!toDoTitle) {
      notifyWarning("Please enter a title!");
      return;
    }

    setToDos([
      ...toDos,
      { id: Date.now(), title: toDoTitle, description: toDoAbout },
    ]);

    notifySuccess("Successfully added!");
    setToDoTitle("");
    setToDoAbout("");
  }

  function handleDelete(id) {
    setToDos(toDos.filter((todo) => todo.id !== id));
    notifySuccess("Successfully deleted!");
  }

  function handleUpdate(id, newTitle, newDesc) {
    const updated = toDos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle, description: newDesc } : todo
    );
    setToDos(updated);
    notifySuccess("Successfully updated!");
  }

  return (
    <div className="container">
      <div className={s.wrapper}>
        <ToDoInput
          title={toDoTitle}
          setTitle={setToDoTitle}
          about={toDoAbout}
          setAbout={setToDoAbout}
          handleAdd={handleAdd}
        />
        <ToDoList
          toDos={toDos}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      </div>
    </div>
  );
}

export default List;
