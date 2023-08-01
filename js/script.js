let marca = "marca";
let year = year;
let tipo = "tipo";

function Seguro(marca, year, tipo) {
  this.marca = marca;
  this.year = year;
  this.tipo = tipo;
}

Seguro.prototype.cotizarSeguro = function () {
  let cantidad;
  const base = 100000;

  switch (this.marca) {
    case "1":
      cantidad = base * 1.0;
      break;
    case "2":
      cantidad = base * 1.15;
      break;
    case "3":
      cantidad = base * 1.25;
      break;
    case "4":
      cantidad = base * 1.35;
      break;
    case "5":
      cantidad = base * 1.45;
      break;
    default:
      break;
  }
  const diferencia = new Date().getFullYear() - this.year;
  cantidad -= (diferencia * 5 * cantidad) / 100;
  if (this.tipo === "basico") {
    cantidad *= 1.25;
  } else {
    cantidad *= 1.5;
  }

  return cantidad;
};

function UI() {}

UI.prototype.llenarOpciones = () => {
  const max = new Date().getFullYear(),
    min = max - 20;

  const selectYear = document.querySelector("#year");

  for (let i = max; i > min; i--) {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectYear.appendChild(option);
  }
};
