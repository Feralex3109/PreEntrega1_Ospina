let tipoSeguros = [
  { id: 1, nombre: "Previsora", precio: "$ 250000" },
  { id: 2, nombre: "Bolivar", precio: "$ 275000" },
  { id: 3, nombre: "Mapfre", precio: "$ 300000" },
  { id: 4, nombre: "Suramericana", precio: "$ 282000" },
  { id: 5, nombre: "Allianz", precio: "$ 260000" },
  { id: 6, nombre: "Liberty", precio: "$ 260000" },
];

function filtrar(listaOrdenar, nombre, precio) {
  switch (operador) {
    case "===":
      return listaOrdenar.filter((elemento) => elemento[nombre] === precio);
      break;
    case "!==":
      return listaOrdenar.filter((elemento) => elemento[nombre] !== precio);
      break;
    case "includes":
      return listaOrdenar.filter((elemento) =>
        elemento[nombre].includes(precio)
      );
      break;
    default:
      break;
  }
}

function ordenar(listaOrdenar, nombre, precio) {
  listaOrdenar.sort((a, b) => {
    if (a.precio < b.precio) {
      return -1;
    }
    if (a.precio > b.precio) {
      return 1;
    }
    return 0;
  });

  if (forma === "Ascendente") {
    listaOrdenar.reverse();
  }
  return listaOrdenar;
}

console.log(ordenar(tipoSeguros, "Ascendente"));
