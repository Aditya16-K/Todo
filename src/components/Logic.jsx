import React, { useState, useEffect } from "react";
import TodoPage from "./TodoPage";

const Logic = () => {
  const defaultValues = {
    id: -1,
    title: "",
    description: "",
    status: "Todo",
  };

  const [data, setData] = useState(defaultValues);

  const [todoItems, setTodoItems] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoItems));
  }, [todoItems]);

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (data.title.trim() === "") {
      alert("Title is required");
      return;
    }

    if (data.id === -1) {
      const newTodo = { ...data, id: Date.now() };
      setTodoItems((prev) => [...prev, newTodo]);
    } else {
      const updatedList = todoItems.map((item) =>
        item.id === data.id ? data : item
      );
      setTodoItems(updatedList);
    }

    setData(defaultValues);
  };

  const handleEdit = (item) => {
    setData(item);
  };

  const handleDelete = (id) => {
    setTodoItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <TodoPage
      data={data}
      todoItems={todoItems}
      onInputChange={inputHandler}
      onSubmit={submitHandler}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default Logic;
