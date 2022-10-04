import "./App.css";
import Header from "./MyComponents/Header";
import { Footer } from "./MyComponents/Footer";
import { Todos } from "./MyComponents/Todos";
import { AddTodo } from "./MyComponents/AddTodo";
import { About } from "./MyComponents/About";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  console.log("inside main");
  let initTodo;
  console.log(localStorage.getItem("todos"));

  if (localStorage.getItem("todos") === null) {
    console.log("inside first if");
    initTodo = [];
  } else {
    console.log("inside else");
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (title, desc) => {
    console.log(
      "The title and Description for the following todo",
      title,
      desc
    );

    let sno = todos.length + 1;

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const onDelete = (todo) => {
    //console.log("I am on delete of "+todo.sno);

    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <>
      <Router>
        <Header title="Todos-List" />
        <Routes>
          <Route
           exact path="/"
            element={ <><AddTodo addTodo={addTodo} /> <Todos todos={todos} onDelete={onDelete} /> </>}
          />
          <Route exact path="/about"
           element={ <About/>}
          />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
