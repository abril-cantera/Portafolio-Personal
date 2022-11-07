const inicio = document.getElementById('inicio');
const sobreMi = document.getElementById('sobreMi');
const trabajos = document.getElementById('trabajos');
const contactos = document.getElementById('contactos');

const containerInicio = document.getElementById('containerInicio');
const containerSobreMi = document.getElementById('containerSobreMi');
const containerTrabajos = document.getElementById('containerTrabajos');
const containerContacts = document.getElementById('containerContacts');

//BTN
const btn1 = document.getElementById('btn-1');
const btn2 = document.getElementById('btn-2');
const btn3 = document.getElementById('btn-3');
const btn4 = document.getElementById('btn-4');
const btn5 = document.getElementById('btn-5');
var containerImg = document.getElementById('containerImg');
var imgTitle = document.getElementById('imgTitle');

inicio.addEventListener('click', openInicio);
sobreMi.addEventListener('click', openSobreMi);
trabajos.addEventListener('click', openTrabajos);
contactos.addEventListener('click', openContacts);

//BTN
btn1.addEventListener('click', nextImg1);
btn2.addEventListener('click', nextImg2);
btn3.addEventListener('click', nextImg3);
btn4.addEventListener('click', nextImg4);
btn5.addEventListener('click', nextImg5);


function openInicio() {
  containerInicio.classList.remove('inactive');
  containerInicio.classList.add('animacionEnter');
  containerSobreMi.classList.add('inactive');
  containerTrabajos.classList.add('inactive');
}

function openSobreMi() {
  containerInicio.classList.add('inactive');
  containerSobreMi.classList.remove('inactive');
  containerSobreMi.classList.add('animacionEnter');
  containerTrabajos.classList.add('inactive');
}

function openTrabajos() {
  containerInicio.classList.add('inactive');
  containerSobreMi.classList.add('inactive');
  containerTrabajos.classList.remove('inactive');
  containerTrabajos.classList.add('animacionEnter');
}

function openContacts() {
  containerContacts.classList.toggle('inactive');
  containerContacts.classList.add('animacionEnterContacts');
}

//Function Btn

function quit() {
  containerImg.classList.remove("animacion");
}


function nextImg1() {
  containerImg.src = './Img/trabajos/1.jpg';
  containerImg.classList.add('animacion');
  imgTitle.innerText = "Proyecto HTML y CSS | Netflix";
  imgTitle.classList.add('imgTitle');
  const a = document.createElement("a");
  a.target = "_blank";
  const img = document.createElement("img");
  a.appendChild(img);
  img.src = './Img/iconos/eye-solid.svg'
  a.href = 'https://proyectp-neftlix.vercel.app/';
  imgTitle.appendChild(a);
  setTimeout(() => {
    quit();
  }, 300);
}

function nextImg2() {
  containerImg.src = './Img/trabajos/4.jpg';
  containerImg.classList.add('animacion');
  imgTitle.innerText = "Proyecto HTML y CSS | Google";
  imgTitle.classList.add('imgTitle');
  const a = document.createElement("a");
  a.target = "_blank";
  const img = document.createElement("img");
  a.appendChild(img);
  img.src = './Img/iconos/eye-solid.svg'
  a.href = 'https://google-white.vercel.app/';
  imgTitle.appendChild(a);
  setTimeout(() => {
    quit();
  }, 300);
}

function nextImg3() {
  containerImg.src = './Img/trabajos/5.jpg';
  containerImg.classList.add('animacion');
  imgTitle.innerText = "Proyecto HTML y CSS | Perfumeria";
  imgTitle.classList.add('imgTitle');
  const a = document.createElement("a");
  a.target = "_blank";
  const img = document.createElement("img");
  a.appendChild(img);
  img.src = './Img/iconos/eye-solid.svg'
  a.href = 'https://vista-previa-del-producto.vercel.app/';
  imgTitle.appendChild(a);
  setTimeout(() => {
    quit();
  }, 300);
}

function nextImg4() {
  containerImg.src = './Img/trabajos/6.jpg';
  containerImg.classList.add('animacion');
  imgTitle.innerText = "Proyecto HTML y CSS | Resumen de Pedido";
  imgTitle.classList.add('imgTitle');
  const a = document.createElement("a");
  a.target = "_blank";
  const img = document.createElement("img");
  a.appendChild(img);
  img.src = './Img/iconos/eye-solid.svg';
  a.href = 'https://resumen-de-pedido.vercel.app/';
  imgTitle.appendChild(a);
  setTimeout(() => {
    quit();
  }, 300);
}

function nextImg5() {
  containerImg.src = './Img/trabajos/8.jpg';
  containerImg.classList.add('animacion');
  imgTitle.innerText = "Proyecto HTML y CSS | QR";
  imgTitle.classList.add('imgTitle');
  const a = document.createElement("a");
  a.target = "_blank";
  const img = document.createElement("img");
  a.appendChild(img);
  img.src = './Img/iconos/eye-solid.svg'
  a.href = 'https://codigo-qr-lac.vercel.app/';
  imgTitle.appendChild(a);
  setTimeout(() => {
    quit();
  }, 300);
}
