function exec(fn, a, b) {
  return fn(a, b);
}

const somarNoTerminal = (x, y) => console.log(x + y);

exec(somarNoTerminal, 3, 5);

setInterval(function () {
  console.log("Exec...");
}, 1000);
