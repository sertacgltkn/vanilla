// break statement

for (var i = 0; i < 10; i++) {
    if(i == 5 ) break
    console.log(i);
    }
   
    console.log("end of loop")

// continue statement

for (var i = 0; i < 10; i++) {
    if(i == 5 ) continue
    console.log(i);
    }

    console.log("end of loop")

//examples

var ages = [ 15, 16, 18, 19, 22, 25 ]
for (age of ages) {
    if(age <= 18) continue
    console.log(age)
}

