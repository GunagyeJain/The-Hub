import { useState } from "react";
import Container from "../../components/Container";

const TodoList03 = () => {
  let todo = [
    { id: crypto.randomUUID(), text: "task1", done: false },
    { id: crypto.randomUUID(), text: "task2", done: false },
    { id: crypto.randomUUID(), text: "task3", done: false },
  ];

  const [todolist, setTodolist] = useState(() => {
    const savedTodo = localStorage.getItem("todolist");
    return savedTodo !== null ? JSON.parse(savedTodo) : todo;
  });

  const toggleTodo = (id) => {
    setTodolist((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const addTodo = () => {
    const taskText = askText();
    const newTodo = { id: crypto.randomUUID(), text: taskText, done: false };
    setTodolist((prev) => [...prev, newTodo]);
  };

  const askText = () => {
    let TaskText = prompt("Enter your task", "Task");
    return TaskText;
  };

  return (
    <Container>
      <h1 className="text-3xl font-bold py-2">TO DO LIST</h1>
      <div className="w-[90%] h-[1px] bg-border justify-self-center"></div>
      <div className="flex flex-col w-[90%]  justify-self-center">
        {todolist.map((todo) => {
          return (
            <div
              key={todo.id}
              className="flex items-center gap-2 px-2 mt-2 border border-border w-full h-10 rounded-xl"
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="accent-accent cursor-pointer"
              />
              <span className={todo.done ? "line-through text-muted" : ""}>
                {todo.text}
              </span>
            </div>
          );
        })}
      </div>
      <button
        onClick={addTodo}
        className="w-[90%] h-20px justify-self-center border-dashed border border-border hover:bg-accent py-2 my-2 transition-colors rounded-xl"
      >
        + ADD TO DO
      </button>
    </Container>
  );
};

export default TodoList03;
