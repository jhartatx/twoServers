var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;
var niceArray = ["YOU are awesome!", "You have a nice smile", "You are the best!"];
var meanArray = ["Try harder", "You need work!", "You need help!"];

function handleRequest1(request, response){
  response.end(niceArray[Math.floor(Math.random()* niceArray.length)]);
}

function handleRequest2(request, response){
  response.end(meanArray[Math.floor(Math.random()* meanArray.length)]);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function(){
  console.log("Server listening ON: http://localhost:" + PORT1);
});

server2.listen(PORT2, function(){
  console.log("Server listening ON: http://localhost:" + PORT2);
});
