if (localStorage.count === undefined) {
  localStorage.setItem('count', 0);
}
const reiniciar = document.getElementById('reset-game');
const cores = [];
const container = document.getElementById('container');
const placar = document.getElementById('score');
placar.innerText = localStorage.count;
function createCircles() {
  let cor;
  for (let i = 1; i <= 6; i += 1) {
    const circle = document.createElement('div');
    circle.className = 'ball';
    cor = '(' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ', ' + parseInt(Math.random() * 255) + ')';
    cores.push(cor);
    circle.setAttribute('style', 'background-color:' + 'rgb' + cor);
    container.appendChild(circle);
  }
}
createCircles();

function colorgues() {
  const seçao = document.getElementById('texto');
  const cor = Math.floor(Math.random() * cores.length);
  const texto = document.createElement('p');
  texto.id = 'rgb-color';
  texto.innerText = cores[cor];
  seçao.appendChild(texto);
}
colorgues();
function seleciona(event) {
  const selecionado = event.target;
  const rgb = selecionado.style.backgroundColor;
  const text = 'rgb' + document.getElementById('rgb-color').innerText;
  const answer = document.getElementById('answer');
  if (rgb === text) {
    answer.innerText = 'Acertou!';
    localStorage.count = parseInt(localStorage.count) + 3;
    placar.innerText = localStorage.count;
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
}
function recarrega() {
  document.location.reload();
}
reiniciar.addEventListener('click', recarrega);
container.addEventListener('click', seleciona);
