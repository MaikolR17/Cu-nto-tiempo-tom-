Number.prototype.isPrime = function () {
  for (let i = 2; i <= Math.sqrt(this); i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return this > 1;
};

const { performance } = require("perf_hooks");
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1e4) {
  if (num.isPrime()) {
    primeCount++;
  }
  num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`); 
while (primeCount < 1e5) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 100,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

while (primeCount < 1e6) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 1,000,000th prime number is ${num - 1}`); 
console.log(`This took ${performance.now() - start} milliseconds to run`);




//Fibonacci
// recursive
function rFib( n ) {
    if ( n < 2 ) {
        return n;
    }
    return rFib( n-1 ) + rFib( n-2 );
}
console.time('tiempoRecursive');
result = rFib(20);
console.log(result);
console.timeEnd('tiempoRecursive');

// iterative
function iFib( n ) {
    const vals = [ 0, 1 ];
    while(vals.length-1 < n) {
        let len = vals.length;
        vals.push( vals[len-1] + vals[len-2] );
    }
    return vals[n];
}
console.time('tiempoIterative');
result2 = iFib(20);
console.log(result2);
console.timeEnd("tiempoIterative");
/*
La función iterativa es más rápida ya que almacena los valores ya calculados en un arreglo
*/



//Invertir una cadena
const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";

console.time('reversed');
reversedString(story);
console.timeEnd('reversed');

function reversedString() {
  let reversed1 = "";
  for (var i = story.length - 1; i >= 0; i--){
    reversed1 += story[i];
  }
  return reversed1;
};