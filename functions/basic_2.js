function bomdia() {
  console.log("Bom dia!!!");
}

const boatarde = function () {
  console.log("Boa tarde!!!");
};

//1) passar function como parametro para outra function
function chamar(fn) {
  if (typeof fn === "function") fn();
}

chamar(3);
chamar(bomdia);
chamar(boatarde);

//2) Retornar uma function a partir de outra function
function potencia(base) {
  return function (exp) {
    return Math.pow(base, exp);
  };
}

const potencia2 = potencia(2);

console.log(potencia2(8));
