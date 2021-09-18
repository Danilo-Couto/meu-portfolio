window.onload = function () {
  document.getElementById('lista-tarefas').innerHTML = localStorage.getItem('lista salva');
};

const buttonCreateTask = document.getElementById('criar-tarefa');
const ol = document.getElementById('lista-tarefas');
const liItems = document.getElementsByClassName('itemTarefa');
const textoInput = document.getElementById('texto-tarefa');

buttonCreateTask.onclick = function () {
  const novaTarefa = document.createElement('li');
  novaTarefa.className = 'itemTarefa';
  ol.appendChild(novaTarefa);
  novaTarefa.innerText = textoInput.value;
  document.getElementById('texto-tarefa').value = '';
};

ol.onclick = function (e) {
    for (let i = 0; i < liItems.length; i += 1) {
      liItems[i].style.backgroundColor = '';
      liItems[i].classList.remove('selected');
    }
    e.target.style.backgroundColor = 'rgb(128, 128, 128)';
    e.target.classList.add('selected');
  }
};
// credidos ao slack e também a alguns amigos que ajudaram em zoom

ol.ondblclick = function (e) {
  if (e.target.classList.contains('completed')) {
    e.target.classList.remove('completed');
    e.target.style.textDecoration = '';
  } else {
    e.target.classList.add('completed');
    const risked = document.querySelectorAll('.completed');
    for (let i = 0; i < risked.length; i += 1) {
      risked[i].style.textDecoration = 'line-through solid rgb(0, 0, 0)';
    }
  }
};

const buttonEraseAll = document.createElement('button');
buttonEraseAll.innerHTML = 'Apagar tudo';
buttonEraseAll.id = 'apaga-tudo';
document.body.appendChild(buttonEraseAll);

buttonEraseAll.onclick = function () {
  for (let index = 0; index < liItems.length; index += 0) {
    liItems[index].remove();
  }
};

const buttonEraseFinished = document.createElement('button');
buttonEraseFinished.innerHTML = 'Apagar finalizados';
buttonEraseFinished.id = 'remover-finalizados';
document.body.appendChild(buttonEraseFinished);

buttonEraseFinished.onclick = function () {
  for (let index = liItems.length - 1; index >= 1; index -= 1) {
    if (liItems[index].classList.contains('completed')) {
      liItems[index].remove();
    }
  }
};
// creditos ao slack https://trybecourse.slack.com/archives/C02B4PPBERE/p1631576685102200;

const buttonSaveList = document.createElement('button');
buttonSaveList.id = 'salvar-tarefas';
document.body.appendChild(buttonSaveList);
buttonSaveList.innerText = 'Salvar lista';

buttonSaveList.addEventListener('click', saveTasks);

function saveTasks() {
  const savedItems = ol.innerHTML;
  localStorage.setItem('lista salva', savedItems);
}
// creditos à alguns slacks;

const ButtonMoveUp = document.createElement('button');
ButtonMoveUp.id = 'mover-cima';
document.body.appendChild(ButtonMoveUp);
ButtonMoveUp.innerText = 'mover tarefa pra cima';

ButtonMoveUp.onclick = function () {
  for (let i = 0; i < liItems.length; i += 1) {
    if (liItems[i].classList.contains('selected')) {
      if (liItems[i] !== ol.firstChild) {
        ol.insertBefore(liItems[i], liItems[i].previousSibling);
      } else {
      }
    }
  }
};

const ButtonMoveDown = document.createElement('button');
ButtonMoveDown.id = 'mover-baixo';
document.body.appendChild(ButtonMoveDown);
ButtonMoveDown.innerText = 'mover tarefa pra baixo';

ButtonMoveDown.onclick = function () {
  for (let i = liItems.length - 1; i >= 0; i -= 1) {
    if (liItems[i].classList.contains('selected')) {
      if (liItems[i] !== ol.lastChild) {
        ol.insertBefore(liItems[i].nextSibling, liItems[i]);
      }
    }
  }
};

const buttonUnSelect = document.createElement('button');
buttonUnSelect.id = 'remover-selecionado';
buttonUnSelect.innerText = 'Remover selecionado';
document.body.appendChild(buttonUnSelect);

buttonUnSelect.onclick = function () {
  for (let i = 0; i < liItems.length; i += 1) {
    if (liItems[i].classList.contains('selected')) {
      liItems[i].remove();
    }
  }
};