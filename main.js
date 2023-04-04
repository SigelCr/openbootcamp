//primera parte

function suma(a, b, c) {
  let resultado = a + b + c;

  return resultado;
}

let resultado = suma(10, 5, 10);

console.log(resultado);

//segunda parte

class Coche {
  constructor(puertas) {
    this.puertas = puertas;
  }

  agregarPuerta() {
    this.puertas++;
  }
}

let miCoche = {
  puertas: 2,
  agregarPuerta() {
    this.puertas++;
  },
};

miCoche.agregarPuerta(); //ahora tiene 3 puertas

console.log(miCoche.puertas);
