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

    setToDos([
      ...toDos,
      { id: Date.now(), title: toDoTitle, description: toDoAbout },
    ]);

    setToDoTitle("");
    setToDoAbout("");
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
        <ToDoList toDos={toDos} />
      </div>
    </div>
  );
}

export default List;
