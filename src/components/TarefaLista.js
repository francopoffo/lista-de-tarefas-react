import React, { useState } from "react";
import TarefaForm from "./TarefaForm";

function TarefaLista() {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (tarefa) => {
    if (!tarefa.text || /^\s*$/.test(tarefa.text)) {
      return;
    }
    const novasTarefas = [tarefa, ...tarefas];

    setTarefas(novasTarefas);
  };

  return (
    <div>
      <h1>Quais são as suas tarefas para hoje?</h1>
      <TarefaForm onSubmit={addTarefa}></TarefaForm>
    </div>
  );
}

export default TarefaLista;
