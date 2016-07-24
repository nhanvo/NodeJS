var http = require("http");
var fs = require("fs");

var txtFileName = "/danhsach.txt";
var htmlFileName = "/index.html";
var UTF_8 = "utf-8";
var CONTENT_TYPE = 'text/html; charset=utf-8';

var readFileJSON = function () {
    // Send the response body as "Hello World"
    var buffer = fs.readFileSync(__dirname + txtFileName);
    return JSON.stringify(buffer.toJSON());
}

var readFileString = function () {
    var buffer = fs.readFileSync(__dirname + txtFileName);
    return buffer.toString();
}

var webserverText = function(req, res) {
    res.writeHead(200, {'Content-Type': CONTENT_TYPE});

    var buffer = new Buffer("Hello world", UTF_8);
    res.end(readFileJSON()+readFileString());
}

var webserverHTML = function(req, res) {
    res.writeHead(200, {'Content-Type': CONTENT_TYPE});
    res.end(fs.readFileSync(__dirname + htmlFileName), UTF_8);

}

var webserverPipe = function(req, res) {
    res.writeHead(200, {'Content-Type': CONTENT_TYPE});
    fs.createReadStream(__dirname + htmlFileName, UTF_8).pipe(res);
}

var webserverJSON = function(req, res) {
    var obj;
    res.writeHead(200, {'Content-Type':'application/json'});

    obj = {
        ho: "Vo",
        ten: "Nhan",
        namsinh: "1987"
    };

    res.end(JSON.stringify(obj));
}

http.createServer(function (request, response) {

    //webserverText(request, response);
    //webserverHTML(request, response);
    //webserverPipe(request, response);
    webserverJSON(request, response);
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');