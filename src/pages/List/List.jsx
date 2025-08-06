import { useState } from "react";
import { ToDoInput } from "../../components/ToDoInput/ToDoInput";
import s from "./style.module.scss";
import { ToDoList } from "../../components/ToDoList/ToDoList";
import { notifySuccess, notifyWarning } from "../../utils/notifications.js";
import { Container } from "../../components/Container/Container.jsx";
import { useEffect } from "react";

function List() {
  const [toDos, setToDos] = useState([]);
  const [toDoTitle, setToDoTitle] = useState("");
  const [toDoAbout, setToDoAbout] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) {
      try {
        setToDos(JSON.parse(saved));
      } catch (e) {
        console.error("Ошибка при парсинге localStorage:", e);
      }
    }
  }, []);

  useEffect(() => {
    console.log("toDos changed:", toDos);
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
  return (
    <Container>
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
    </Container>
  );
}

export default List;
