let tarefas = [];

while (true) {
  let acao = prompt(
    "O que deseja fazer? (adicionar, listar, remover, concluir, sair)"
  ).toLowerCase();

  if (acao === "sair") {
    break;
  }

  if (acao === "adicionar") {
    let tarefa = prompt("Digite o nome da tarefa:");
    tarefas.push(tarefa);
    console.log(`Tarefa "${tarefa}" adicionada.`);
  } else if (acao === "listar") {
    if (tarefas.length === 0) {
      console.log("Nenhuma tarefa na lista.");
    } else {
      for (let i = 0; i < tarefas.length; i++) {
        console.log(`${i}: ${tarefas[i]}`);
      }
    }
  } else if (acao === "remover") {
    if (tarefas.length === 0) {
      console.log("Nenhuma tarefa para remover.");
      continue;
    }
    let indiceRemover = Number(prompt("Digite o índice da tarefa a remover:"));
    if (
      Number.isInteger(indiceRemover) &&
      indiceRemover >= 0 &&
      indiceRemover < tarefas.length
    ) {
      let tarefaRemovida = tarefas.splice(indiceRemover, 1);
      console.log(`Tarefa "${tarefaRemovida}" removida.`);
    } else {
      console.log("Índice inválido.");
    }
  } else if (acao === "concluir") {
    if (tarefas.length === 0) {
      console.log("Nenhuma tarefa para concluir.");
      continue;
    }
    let indiceConcluir = Number(prompt("Digite o índice da tarefa a concluir:"));
    if (
      Number.isInteger(indiceConcluir) &&
      indiceConcluir >= 0 &&
      indiceConcluir < tarefas.length
    ) {
      if (!tarefas[indiceConcluir].startsWith("✅ ")) {
        tarefas[indiceConcluir] = "✅ " + tarefas[indiceConcluir];
        console.log(`Tarefa "${tarefas[indiceConcluir]}" marcada como concluída.`);
      } else {
        console.log("Essa tarefa já está concluída.");
      }
    } else {
      console.log("Índice inválido.");
    }
  } else {
    console.log("Ação inválida. Tente novamente.");
  }
}
