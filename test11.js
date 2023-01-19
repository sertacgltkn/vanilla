var test = "hello javascript world";

var response = test.split("a");

console.log(response);


//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list[0] = "Ece";

console.log(list);

//!----------------------------------------

console.log(list.includes("Ece")) // true

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list.push("Ece");

console.log(list);

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list.pop();

console.log(list);

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list.unshift("Ece");

console.log(list);  

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list.shift();

console.log(list);

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list.splice(0, 0, "Ece");

console.log(list);

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];

list.splice(0, 1);

console.log(list);

//!----------------------------------------

var list = ["Ahmet", "Ayşe", "Efe"];



