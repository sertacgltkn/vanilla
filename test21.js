function callBackFunction(result) {
  var text = (result == true) ? "even" : "odd";
    console.log(text);
}

function even(x, callback) {
  var result = x % 2 == 0 ? true : false;
  callback(result);
}

even(4, callBackFunction);



