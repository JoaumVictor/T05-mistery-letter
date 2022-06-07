const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const paragrafo = document.getElementById('carta-gerada');
// const carta = document.getElementsByClassName('carta');
const contador = document.getElementById('carta-contador');

function createSpan(textoRecebido) {
  const span = document.createElement('span');
  span.textContent = textoRecebido;
  return span;
}

const dice = (value) => Math.floor(Math.random() * value);
const dice0or1 = () => {
  if (Math.random() > 0.5) return 1;
  return 0;
};

const adicionaClasse = (valor) => {
  const array1 = ['newspaper', 'magazine1', 'magazine2'];
  const array2 = ['medium', 'big', 'reallybig'];
  const array3 = ['rotateleft', 'rotateright'];
  const array4 = ['skewleft', 'skewright'];
  if (valor === 1) return array1[dice(3)];
  if (valor === 2) return array2[dice(3)];
  if (valor === 3) return array3[dice0or1()];
  if (valor === 4) return array4[dice0or1()];
};

const randomizaClasse = ({ target }) => {
  const test = target;
  test.classList = 'carta';
  target.classList.add('carta');
  target.classList.add(adicionaClasse(1));
  target.classList.add(adicionaClasse(2));
  target.classList.add(adicionaClasse(3));
  target.classList.add(adicionaClasse(4));
  contador.innerText = paragrafo.childNodes.length;
};

const adicionaSpan = (valor) => {
  const span = createSpan(valor);
  span.classList.add('carta');
  span.addEventListener('click', randomizaClasse);
  span.classList.add(adicionaClasse(1));
  span.classList.add(adicionaClasse(2));
  span.classList.add(adicionaClasse(3));
  span.classList.add(adicionaClasse(4));
  paragrafo.appendChild(span);
};

function validationInput() {
  if (input.value.trim() === '') {
    paragrafo.innerText = '';
    const span = createSpan('Por favor, digite o conteúdo da carta.');
    paragrafo.appendChild(span);
    contador.innerText = '';
    return;
  }
  if (input.value) {
    paragrafo.innerText = '';
    const palavras = (input.value.trim().split(' '));
    palavras.forEach((palavra) => adicionaSpan(palavra));
    contador.innerText = paragrafo.childNodes.length;
  }
}

button.addEventListener('click', validationInput);
