import { useState } from "react";
import { ToDoInput } from "../../components/ToDoInput/ToDoInput";
import s from "./style.module.scss";
import { ToDoList } from "../../components/ToDoList/ToDoList";

function List() {
  const [toDos, setToDos] = useState([]);
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoAbout, setToDoAbout] = useState("");
  const [error, setError] = useState(null);

  function handleAdd(event) {
    event.preventDefault();
    if (!toDoTitle) {
      setError("Please enter a title");
      return;
    }
    setTimeout(() => {
      setError("");
    }, 1000);

    setToDos([
      ...toDos,
      { id: Date.now(), title: toDoTitle, description: toDoAbout },
    ]);

    setToDoTitle("");
    setToDoAbout("");
  }

  function handleDelete(id) {
    setToDos(toDos.filter((todo) => todo.id !== id));
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
        {error && <h1>{error}</h1>}
        <ToDoList toDos={toDos} handleDelete={handleDelete} />
      </div>
    </div>
  );
}

export default List;
