import React, { useState } from "react";
import TarefaForm from "./TarefaForm";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

function Tarefa({ tarefas, tarefasCompletas, removerTarefa, atualizarTarefa }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const enviaAtualizacao = (valor) => {
    atualizarTarefa(edit.id, valor);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <TarefaForm edit={edit} onSubmit={enviaAtualizacao}></TarefaForm>;
  }

  return tarefas.map((tarefa, index) => (
    <div
      className={tarefa.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={tarefa.id} onClick={() => tarefasCompletas(tarefa.id)}>
        {tarefa.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine
          onClick={() => removerTarefa(tarefa.id)}
          className="delete-icon"
        />
        <TiEdit
          onClick={() => setEdit({ id: tarefa.id, value: tarefa.text })}
          className="edit-icon"
        />
      </div>
    </div>
  ));
}

export default Tarefa;
