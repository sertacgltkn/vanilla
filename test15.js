// for loop

for(var i = 0; i < 5; i+= 2){
    console.log(i,"hello world", i+1, 1)
}

//!------------

var list = ["İstanbul", "Ankara", "İzmir"]

var text = ""
for (var i = 0; i < list.length; i++){
    text += list[i]
}

console.log(text)

//!------------

var text = "hello world"

for (var i = 0; i < text.length; i++){
    console.log(text[i])
}

//!------------ for of

var list = ["İstanbul", "Ankara", "İzmir"]

for (var i of list){
    console.log(i)
}


//!------------ for in

var list = ["İstanbul", "Ankara", "İzmir"]

for (var i in list){
    console.log(i)
}

//!------------

var count = 100

var text = ""
for (var i = 1; i <= count; i++){
   var add_text = "*".repeat(i)
   text += `${add_text}\n`
}

console.log(text)

//!------------

for (let i = 0; i < 15; i++) {
    let output = "";
    for (let j = 0; j < 25; j++) {
      if (j === 12 - i || j === 12 + i || i === 7) {
        output += "❤";
      } else {
        output += " ";
      }
    }
    console.log(output);
  }
  

  


