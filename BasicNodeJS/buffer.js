/**
 * Initialize buffer from Json
 */
console.log("-----Hello -> buffer-----");
var buffer = new Buffer("Hello", "utf-8");
console.log(buffer);

/**
 * Convert buffer to String
 */
console.log("-----buffer -> Hello-----");
var str = buffer.toString();
console.log(str);

/**
 * Convert buffer to Json
 */
console.log("-----buffer to Json-----");
var json = buffer.toJSON();
console.log(json);