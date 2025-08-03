import { useState } from "react";
import { ToDoInput } from "../../components/ToDoInput/ToDoInput";
import s from "./style.module.scss";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import { notifySuccess, notifyWarning } from "../../utils/notifications.js";

function List() {
  const [toDos, setToDos] = useState([]);
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoAbout, setToDoAbout] = useState("");

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
    notifySuccess("Succesfully deleted");
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
        <ToDoList toDos={toDos} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default List;
