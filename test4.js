// Operators

var a = "1";

console.log(a==1) // true

console.log(a===1) // false

console.log(a!=1) // false

console.log(a!==1) // true

console.log(a>1) // false

console.log(a<1) // false

console.log(a>=1) // true

console.log(a<=1) // true

console.log(a&&1) // 1

console.log(a||1) // 1

console.log(!a) // false

console.log(a&1) // 1

console.log(a|1) // 1

console.log(a^1) // 0

console.log(a<<1) // 2

console.log(a>>1) // 0

console.log(a>>>1) // 0

console.log(a+=1) // 2

console.log(a-=1) // 1

console.log(a*=1) // 1

console.log(a/=1) // 1

console.log(a%=1) // 0

console.log(a&=1) // 1


var condition1 = 5 > 3
var condition2 = 6 > 3

console.log(condition1 && condition2) // true


var condition1 = 5 > 3
var condition2 = 6 < 3

console.log(condition1 && condition2) // false


var condition12 = 4 > 3
var condition22 = 2 < 3

console.log(condition12 || condition22) // true


