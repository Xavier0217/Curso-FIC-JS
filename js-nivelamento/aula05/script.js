function adicionar_tarefa() {
    const tarefa = document.getElementById("tarefa")

    const tarefas = document.getElementById("tarefas")

    const li = document.createElement("li")
    li.textContent = tarefa.value
    tarefas.appendChild(li)

    tarefa.value = ""
  
}