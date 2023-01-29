var array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
var result = array.forEach((e,i) => {
  console.log(e,i);
  array[9]= "true"
  array.shift(9)
});
