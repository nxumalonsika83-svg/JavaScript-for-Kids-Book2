// Creating an Array of people.
var people = ["Teddy", "Cathy", "Bobby"];
// console.log(people);

// Reasigning value of first array.
// people[0] = "Georgie";
// console.log(people);

// Exercise
people[0] = "Mary";
people[1] = "Bobby";
people[2] = "Judy";
people[3] = "Eddie";
people[4] = "Herbie";
people[5] = "Tony";

// To see the people array on the console (inspect)
console.log(people);

// toString and valueOf
var otherPeople = ["Teddy", "Cathy", "G-berg", "Georgie"];

// Too see on the web browser the people array
document.getElementById("peopleIKnow").innerHTML = people.toString();

// document.getElementById("peopleIKnow2").innerHTML = people.valueOf();

// Concat() method
// people = people.concat(otherPeople);

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// indexOf() method
// people = people.indexOf("Eddie");

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// join() method
// people = people.join(" // ");

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// lastIndexOf() method
// people.push("Bobby");
// people = people.lastIndexOf("Bobby");

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// pop() method
// people.pop();

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// push() method
// people.push("Teddy");

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// reverse() method
// people = people.reverse();

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// shift() and unshift() methods
// people.shift(); // removes first element
// people.unshift("Teddy"); // adds element to begining of the array

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// slice() method
// people = people.slice(0, 3);

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// sort() method
// people = people.sort();

// document.getElementById("peopleIKnow").innerHTML = people.toString();

// splice() method
// people.splice(1,0,"Cathy", "Jackie"); // adds elements at index 1
// document.getElementById("peopleIKnow").innerHTML = people.toString();
