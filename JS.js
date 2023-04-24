var greeting = "Hello World";
console.log(greeting);

let count = 20;
count = 30;
console.log(count);

const numbers = [1, 2, 3, 4, 5];
numbers.push(6);
console.log(numbers);

var a = 1;
var b = 2;
var sum = a + b;
console.log(sum);

function greet(name) {
    var message = "Hello " + name;
    console.log(message);
}

greet("Kyrillos");

const array = [1, 2, 3, 4, 5];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

let num = 10;

if (num > 10) {
    console.log("Number is greater than 10");
} else {
    console.log("Number is less than 10");
}


let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

let num = 10;