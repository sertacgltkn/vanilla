var list = [1251, 'test', 4]

console.log(list.length) // object

console.log(list[0]) // 1251

console.log(list[1]) // test

console.log(list[2]) // 4

console.log(list[3]) // undefined


var list2 = [213, 2134, 214124]

list2.push("4", 123213213123)
list2.length = 8
console.log(list2.length) // 8
console.log(list2[5]) // undefined

list2 = list2.slice(0, 2)
console.log(list2.length) // 2



