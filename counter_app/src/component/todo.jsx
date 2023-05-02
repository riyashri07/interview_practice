import React, { useEffect, useState } from "react";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/todos", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  async function handleClick(e) {
    e.preventDefault();
    let obj = {
      name: title,
      status: "Pending",
    };
    try {
      await fetch(`http://localhost:8080/todos`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      }).then((res) => {
        if (res.ok) {
          alert("data added successfully");
          setTitle("");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  const handleDelete = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
    }).then((res) => console.log(res));
  };

  return (
    <div>
      <input
        type="text"
        placeholder="enter your todo work"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleClick}>Submit</button>

      <table>
        <thead>
          <tr>
            <th>Id </th>
            <th>Title</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.status}</td>
                <td>
                  <button>Edit</button>
                </td>
                <td>
                  <button onClick={handleDelete(ele.id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Todo;
