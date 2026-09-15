// console.log(typeof 9);
// var doTheMath = 7 + 8 + 18;
// doTheMath;

var dreamCar = {
 make: "Lexus",
 model: "LFA",
 color: "silver",
 year: 2015,
 bodyStyle: "Luxury Car",
 price: 45000
};

// alert("The type of dreamCar is: " + typeof dreamCar);

document.getElementById("pricetag").innerHTML = dreamCar.price;
document.getElementById("modelyear").innerHTML = dreamCar.year;
document.getElementById("body").style.backgroundColor = dreamCar.color;
document.getElementById("body").innerHTML = dreamCar.make + " " + dreamCar.model;