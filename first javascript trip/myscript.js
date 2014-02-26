//This is a simple javascript program for practice with tree house lessons

//Do a couple of console.logs
console.log("Hello from myscript.js");
console.log("Hello Again"); //This is not needed

//This line sets the initial variable name
// var name = prompt("What is your name?");
// alert("Hello " + name);

// name = "Nick";
// console.log("The user's name is " + name);

/*
console.log("Before")

var name = prompt("What is your name")
if(name) {
	console.log ("If block")
} else {
	console.log("Else block")
}


console.log("After")
*/
/*
var counter = 10;

console.log("Before")
while (counter) {
	console.log('Hello World!');
	counter = counter - 1;
}

while (prompt("What is your name?")) {
	console.log("Got your name")
}


for (var counter=10; counter; counter = counter - 1) {
	console.log("hellow world", counter);
}
console.log("After")



124.04
"hello world"
true
false
alert()
prompt()
Array[]


var friends = ["nick", "michael", "Joser","amit", "Allyson Grace", "john"];
console.log(friends)
console.log(friends.length)
console.log(friends[0])
console.log(friends[1])
console.log(friends[2])
console.log(friends[3])
console.log(friends[4])
console.log(friends[10])

var friendNumber = 1;
console.log(friends[friendNumber])

for (var i=0; i < friends.length; i+=1) {
	console.log(friends[i])
}


var me = {
	first_name: "Jim",
	last_name: "Hoskins",
	"Employee Number":1

}

me["first_name"] = "james";

console.log(me.first_name);
console.log(me["last_name"]);
console.log(me["Employee Number"]);
console["log"](me);

var key = "last_name"

console.log(me[key])
*/



var sayHello = function () {
	var message = "Hello";
	message = message + " World!";
	console.log(message)
}

var debug = function (message) {
	console.log("Debug", message);
}

var doubleNumber = function (num){
	return num * 2;
}

debug(doubleNumber(24))

sayHello()

var x = 1;

debug("x has been set")

sayHello()

x += 10;
var y = 100;
debug("x has increased. y has been set")

sayHello()


