// Primitive data types
// Number
// String 
// Boolean
// BigInt x > 1.79
// Null : empty
// Undefined : not defined
// Symbol : unique string

// TODO >>>> VARIABLE

var hello = 1
hello = 5
var exit = "sadasdasd"

console.log(hello, exit)   // ! terminal >>> node test.js 


// TODO >>>> STRİNG 

var name = "Mehmet"
var surname = "Kaya"
var age = 25

console.log(name + " " + surname + " " + age)  // ! terminal >>> node test.js


boolean = false
console.log(boolean)


// TODO >>>> SYMBOL

test2 = Symbol("test2")

console.log(test2)


// TODO >>>> NULL

var test3 = null
console.log(test3)

// TODO >>>> UNDEFINED

var test4
console.log(test4)

// TODO >>>> TYPEOF

console.log(typeof test2)  //*! >>>> type of number,boolean, undefined, null, string, symbol



// TODO >>>>>> A+B 

var a = 5
var b = 10
var c = `${a} ${b} merhabalar`

console.log(a+" "+b, c)


// TODO >>>>> STRING INDEX [0]

var name = "Mehmet"
console.log(name[0]) 

console.log(name.charAt(2))

// TODO >>>>> STRING LENGTH

console.log(name.length)


// TODO >>>>> STRING indexof (first character)

console.log(name.indexOf("e", 5)) // start of 5


// TODO >>>>> STRING lastIndexOf (last character)

console.log(name.lastIndexOf("e"))



// TODO >>>>>> startsWith  

console.log(name.startsWith("m"))


// TODO >>>>>> endsWith

console.log(name.endsWith("t"))

// TODO >>>>>> includes

console.log(name.includes("e"))

// TODO >>>>>> repeat

console.log(name.repeat(5))

// TODO >>>>>> replace

console.log(name.replace("e", "a"))

// TODO >>>>>> slice

console.log(name.slice(0, 3))

// TODO >>>>>> split

console.log(name.split("e"))

// TODO >>>>>> toLowerCase

console.log(name.toLowerCase())

// TODO >>>>>> toUpperCase

console.log(name.toUpperCase())


// TODO >>>>>> trim , space delete

var name = " Mehmet "
console.log(name.trim())

// TODO >>>>>> Number

var number = 5
console.log(number)

// TODO >>>>>> Number to String

var number = 5
console.log(number.toString())
console.log(typeof number.toString())


// TODO >>>>>> substring

var name = "Mehmet"
console.log(name.substring(0, 3))


// TODO >>>>>> Math

console.log(Math.PI)
console.log(Math.E)
console.log(Math.round(3.5))
console.log(Math.ceil(3.1))
console.log(Math.floor(3.9))
console.log(Math.abs(-5))
console.log(Math.pow(2, 3))
console.log(Math.sqrt(9))
console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(Math.random())
console.log(Math.floor(Math.random(1,2,3) * 10 + 1))
console.log(Math.random())



// TODO >>>>>> Date

var date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.getDay())
console.log(date.getFullYear())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getTime())


var a = "test"
 a = `${a[0].toUpperCase()}${a.slice(1)}`
console.log(a)

// TODO >>>>>> ARRAY

var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array)
console.log(array[0])
console.log(array[1])
console.log(array[2])
console.log(array[3])
console.log(array[4])
console.log(array[5])

// TODO >>>>>> ARRAY LENGTH

console.log(array.length)


// TODO >>>>>> ARRAY PUSH

array.push(11)
console.log(array)

// TODO >>>>>> ARRAY POP

array.pop()
console.log(array)

// TODO >>>>>> ARRAY UNSHIFT

array.unshift(0)
console.log(array)

// TODO >>>>>> ARRAY SHIFT

array.shift()
console.log(array)

// TODO >>>>>> ARRAY SPLICE

array.splice(0, 2)
console.log(array)

// TODO >>>>>> ARRAY CONCAT

var array2 = [11, 12, 13, 14, 15]
var array3 = array.concat(array2)
console.log(array3)


// TODO >>>>>> ARRAY JOIN

console.log(array3.join(" - "))
console.log(array3.join(" "))
console.log(array3.join(""))

// TODO >>>>>> ARRAY SORT

console.log(array3.sort())

// TODO >>>>>> ARRAY REVERSE

console.log(array3.reverse())



// TODO >>>>>> ARRAY FOREACH

array3.forEach(function (item, index) {
    console.log(item, index)
}
)

// TODO >>>>>> ARRAY MAP

var array4 = array3.map(function (item, index) {
    return item * 2
}
)
console.log(array4)



// TODO >>>>>> ARRAY FILTER

var array5 = array4.filter(function (item, index) {
    return item > 10
}
)
console.log(array5)


// TODO >>>>>> ARRAY FIND

var array6 = array5.find(function (item, index) {
    return item > 10
}
)
console.log(array6)


// TODO >>>>>> ARRAY FINDINDEX

var array7 = array5.findIndex(function (item, index) {
    return item > 10
}
)
console.log(array7)


// TODO >>>>>> ARRAY INCLUDES

console.log(array5.includes(10))


// TODO >>>>>> ARRAY INDEXOF

console.log(array5.indexOf(16))

