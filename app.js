const digiteNombre = document.getElementById('digiteNombre');
const botonAgregar = document.getElementById('botonAgregar');
const botonSortear = document.getElementById('botonSortear');
const listaNombre = document.getElementById('listaNombre');
const mostrarResultado = document.getElementById('mostrarResultado'); 

let nombres= [];

function agregarNombre() { 
    const nombre = digiteNombre.value.trim();
  
    if (nombre === '') {
      alert('Por favor, ingresa un nombre válido.');
      return;
    } 
  
    nombres.push(nombre);
  
    digiteNombre.value = '';
  
    actualizarListaNombres();
  }
  
  function actualizarListaNombres() {
    listaNombre.innerHTML = ''; 
  
    nombres.forEach((nombre, index) => {
      const elementoLista = document.createElement('ElementoLista');
      elementoLista.textContent = nombre;
      listaNombre.appendChild(elementoLista);
    });
  }
  
  function sortearAmigoSecreto() {
    if (nombres.length === 0) {
      alert('La lista está vacía. Agrega nombres antes de realizar el sorteo.');
      return;
    }
  
    const nombreAleatorio = Math.floor(Math.random() * nombres.length);
    const amigoSecreto = nombres[nombreAleatorio];
  
    mostrarResultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
  }
  
  botonAgregar.addEventListener('click', agregarNombre);
  botonSortear.addEventListener('click', sortearAmigoSecreto); 