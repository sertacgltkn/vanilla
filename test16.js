// while loop
// var i = 0;
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// examples
var number = 1;
var result = []

for(var i = 0; i < 15 ; i++){
    while(number % 7 !== 0 || number % 9 != 0) {
        number ++
    }
    result.push(number)
    number++
}

console.log(result)

