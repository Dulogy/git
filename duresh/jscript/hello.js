let myMap = new Map()
myMap.set(NaN, 'not a number')

console.log(myMap.get(NaN)) ;;

console.log("hhhhh");
let otherNaN = Number('foo')
console.log(myMap.get(otherNaN)); 

