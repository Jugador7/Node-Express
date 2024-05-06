//Method JSON.parse() parses a JSON string to a JavaScript Object

let json = '{"result": true, "count":42}';

obj = JSON.parse(json); console.log(obj.count);

//expected output: 42

console.log(obj. result)

//expected output: true

//Method JSON.stringify() converts a JavaScript object to a JSON string

console.log(JSON.stringify({x:5, y:6}));
//expected output: "{"x":5, "y":6}"

