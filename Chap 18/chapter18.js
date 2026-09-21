// FOR LOOP - Chap 17
// console.log("The for loop");
// for (var i = 0; i < 10; i++) {
//     console.log(i + ": Hello, JavaScript!");
// };

// WHILE LOOPS
// Listing 18-1 exercise from the book

// console.log("The while loop");
// var i = 0;
// while (i < 10) {
//     console.log(i + ": Hello , JavaScript");
//     i++;
// };

// FOR LOOP - Chap 17
// console.log("The for loop");
// for (var count = 10; count > 0; count--) {
//  console.log(count);
// };
// console.log("Blast Off!");

// LISTING 18-2 exercise from the book
// WHILE LOOPS
// console.log("The while loop");
// var count = 10;
// while (count > 0) {
//     console.log (count);
//     count--;
// };
// console.log("Blast Off!");

// LISTING 18-3 - example from book chap 18

// var people = ["Deborah", "Carla", "Mary"];

// var i = 0;
// while (people[i]) {
//     console.log(people[i]);
//     i++;
// };

// CODING THE LUNCH GAME

// declare globals
debugger;
let money = 20;
let lunches = 0;

//display lunch budget
document.getElementById("money").innerHTML = money;

//listen for order
document.getElementById("placeOrder").addEventListener("click", buyLunches);

/* buys specified number of sandwiches per day at current prices */
function buyLunches() {
  resetForm();
  var day = 0;

  while (money > 0) {
    var priceToday = getSandwichPrice();
    var numberOfSandwiches = document.getElementById("numSandwiches").value;
    var totalPrice = priceToday * numberOfSandwiches;
    
    if (money >= totalPrice) {
        money = money - totalPrice;
        day++;
        lunches++;
        
        document.getElementById("receipt").innerHTML +=  "<p>On day " + day + ", sandwiches are: $" + priceToday + ". You have $" + money.toFixed(2) + " left.</p>";
    } else {
        document.getElementById("receipt").innerHTML += "<p>Today, sandwiches are: $" + priceToday + ". You don't have enough money. Maybe your sister will give you some of her sandwich.</p>";
        money = 0;
    }  
  }
  document.getElementById("receipt").innerHTML += "<p>You bought " + lunches + " lunches this week.</p>";
}

/*
gets the current price of sandwiches
*/
function getSandwichPrice() {
  let sandwichPrice = (Math.random() * (5 - 1) + 1).toFixed(2);
  return sandwichPrice;
}

/*
resets the game so that a new order can be placed
*/
function resetForm() {
  money = 20;
  lunches = 0;
  document.getElementById("receipt").innerHTML = "";
}
