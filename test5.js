// without operator
var age = 18;
if(age >= 18){
    console.log("You are an adult");
}
else if(age >= 14) {
    console.log("You are a teenager");
}
else {
    console.log("You are a child");
}


// Ternary operator
let agee = 18;
console.log(agee >= 18 ? "You are an adult" : agee >= 14 ? "You are a teenager" : "You are a child");


// Switch statement
let ageee = 18;
switch(ageee){
    case 18:
        console.log("You are an adult");
        break;
    case 14:
        console.log("You are a teenager");
        break;
    default:
        console.log("You are a child");
        break;
}

// for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}

// while loop
let i = 0;
while(i < 10){
    console.log(i);
    i++;
}

// do while loop
let j = 0;
do{
    console.log(j);
    j++;
}
while(j < 10);



// for of loop
let names = ["John", "Jane", "Mary"];
for(let name of names){
    console.log(name);
}

// break statement
for(let i = 0; i < 10; i++){
    if(i == 5){
        break;
    }
    console.log(i);
}

// continue statement
for(let i = 0; i < 10; i++){
    if(i == 5){
        continue;
    }
    console.log(i);
}




