import React, { useState, useEffect, useRef } from "react";

function TarefaForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

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
    <form onSubmit={handleSubmit} className="todo-form">
      {props.edit ? (
        <>
          <input
            placeholder="Escreva a atualização"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
            className="todo-input edit"
          />
          <button onClick={handleSubmit} className="todo-button edit">
            Atualizar
          </button>
        </>
      ) : (
        <>
          <input
            placeholder="Escreva a tarefa"
            value={input}
            onChange={handleChange}
            name="text"
            className="todo-input"
            ref={inputRef}
          />
          <button onClick={handleSubmit} className="todo-button">
            Adicionar
          </button>
        </>
      )}
    </form>
  );
}

export default TarefaForm;
