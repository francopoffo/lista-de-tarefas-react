import React, { useState } from "react";
import TarefaForm from "./TarefaForm";
import Tarefa from "./Tarefa";

function TarefaLista() {
  const [tarefas, setTarefas] = useState([]);

  const addTarefa = (tarefa) => {
    if (!tarefa.text || /^\s*$/.test(tarefa.text)) {
      return;
    }
    const novasTarefas = [tarefa, ...tarefas];

    setTarefas(novasTarefas);
  };

  const atualizarTarefa = (tarefaId, novoValor) => {
    if (!novoValor.text || /^\s*$/.test(novoValor.text)) {
      return;
    }

    setTarefas((anterior) =>
      anterior.map((item) => (item.id === tarefaId ? novoValor : item))
    );
  };

  const removerTarefa = (id) => {
    const ArrayASerRemovido = [...tarefas].filter((tarefa) => tarefa.id !== id);

    setTarefas(ArrayASerRemovido);
  };

  const tarefasCompletas = (id) => {
    let tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        tarefa.isComplete = !tarefa.isComplete;
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  };

  return (
    <div>
      <h1>Quais são as suas tarefas para hoje?</h1>
      <TarefaForm onSubmit={addTarefa}></TarefaForm>
      <Tarefa
        tarefas={tarefas}
        tarefasCompletas={tarefasCompletas}
        removerTarefa={removerTarefa}
        atualizarTarefa={atualizarTarefa}
      ></Tarefa>
    </div>
  );
}

export default TarefaLista;
