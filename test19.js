function test() {
  console.log("test ....!");
}

console.log(test);
test();

// examples

function squared(n, x) {
  var square = n ** 2;
  console.log(`x : ${x}`);
  return square;
}

console.log(squared(3, 5));

// examples

function exercises(m = 2) {
  var exercise = m ** 5;
  return exercise;
}

console.log(exercises());

// examples

function condition(n) {
  if (n == 3) return
  console.log(n);
}

condition(3);
