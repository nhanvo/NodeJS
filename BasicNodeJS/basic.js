/**
 * ARRAY
 */
console.log("-----TEST ARRAY-----");
var mang = ["Cam", "Xoai", "Chuoi"];

mang.push("Man");

for (var i = 0; i < mang.length; i++) {
   console.log("Array["+i+"] = " + mang[i]);
}


/**
 * FUNCTION
 */
console.log("-----TEST FUNCTION-----");
function tinhtong(a, b) {
   return a + b;
}

var x = tinhtong(5, 3);
console.log("Call sum(5, 3) = " + x);

/**
 * FUNCTION PARAMETTER
 */
console.log("-----TEST FUNCTION PARAMETTER-----");
function hello() {
   console.log("Example parametter function");
}

function goiham(fn) {
   fn();
}

goiham(hello);

/**
 * EXPORT MODULE CALL AT module.js file
 */

module.exports = mang;