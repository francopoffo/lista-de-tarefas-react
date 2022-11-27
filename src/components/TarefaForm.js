import React, { useState } from "react";

function TarefaForm(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escreva uma tarefa"
        value={input}
        name="text"
        className="todo-input"
        onChange={handleChange}
      ></input>
      <button className="todo-button">Adicionar</button>
    </form>
  );
}

export default TarefaForm;
