// // write a function given an array of numbers. it will return the count of positive numbers within that array

// array = [3, 4, 0,3 ,5,6,7,8,-5,-10,-12, 5, 6, -5, -10,-11]

// function call (array) {
//     x = 0
//     for (i =0; i<array.length; i++) {
//         if (array[i] >= 0) {
//             x++;
//         }
//     }
//     return x;
// }

// console.log(call(array))



var x = 'aHfhHwd'
var answer = 'false'

for (i= 0; i<x.length; i++) {
    if (x[i].includes("H")){
        answer= "true"
        break;
    }
}
console.log(answer)