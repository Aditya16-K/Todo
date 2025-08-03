import React from "react";

const TodoPage = ({
  data,
  todoItems,
  onInputChange,
  onSubmit,
  onEdit,
  onDelete,
}) => {
  return (
    <>
      <h1 className="logo">Todo Page</h1>

      <div className="container">
        <form onSubmit={onSubmit} className="form">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={onInputChange}
            placeholder="Enter title"
            required
          />

          <label>Status:</label>
          <select name="status" value={data.status} onChange={onInputChange}>
            <option>Todo</option>
            <option>In-Progress</option>
            <option>Pending</option>
          </select>

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={data.description}
            onChange={onInputChange}
            placeholder="Enter description"
          />

          <button type="submit">Submit</button>
        </form>

        <div className="items-scroll">
          <div className="items">
            {todoItems.length === 0 ? (
              <p>No todos found. Please add some!</p>
            ) : (
              todoItems.map((item) => (
                <div className="item" key={item.id}>
                  <h2 className="title">Title: {item.title}</h2>
                  <h3 className="status">Status: {item.status}</h3>
                  <p className="des">Description: {item.description}</p>
                  <div className="button-group">
                    <button className="edit" onClick={() => onEdit(item)}>
                      Edit
                    </button>
                    <button className="del" onClick={() => onDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
