// 1) somar

const somar = (value1) => (value2) => (value3) => value1 + value2 + value3;

console.log(somar(2)(3)(1));

// 2) calcular
const calcular = (value1) => (value2) => (fn) => fn(value1, value2);

const subtrair = (v1, v2) => v1 - v2;

console.log(calcular(5)(3)(subtrair));
