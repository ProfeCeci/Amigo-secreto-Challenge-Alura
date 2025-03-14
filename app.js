// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const nombreAmigo = document.getElementById("amigo").value;
  if (nombreAmigo) {
    amigos.push(nombreAmigo);
    document.getElementById("amigo").value = "";
    actualizarListaAmigos(); // 
  } else {
    alert("Por favor inserte un nombre");
  }
  return amigos;
}

function actualizarListaAmigos() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`; 
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let amigoSorteado = Math.floor(Math.random() * amigos.length); // 
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigos[amigoSorteado]}</li>`; //
  } else {
    alert("Debe ingresar el nombre de sus amigos");
  }
}
