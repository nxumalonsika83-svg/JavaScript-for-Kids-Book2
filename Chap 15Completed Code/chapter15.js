// exercise 1:
// Switch statements
// var myDayOfWeek = prompt("Enter your favourite day of the week!").toLowerCase();
// var theResponse;

// switch (myDayOfWeek)
// {
//     case "monday":
//         theResponse = "Ack!";
//         break;
//     case "tuesday":
//         theResponse = "Taco day!";
//         break;
//     case "wednesday":
//         theResponse = "Halfway there!";
//         break;
//     case "thursday":
//         theResponse = "It’s the new Friday!";
//         break;
//     case "friday":
//         theResponse = "TGIF! Yeah!";
//         break;
//     case "saturday":
//         theResponse = "What a day!";
//         break;
//     case "sunday":
//         theResponse = "Sunday = Funday!";
//         break;
//     default:
//          theResponse = "I haven’t heard of that one!";
//         break;
// }
// alert (theResponse);
// ============================================================

// Exercise 2:
// Date objects

// var myDate = new Date();
// console.log(myDate);
// console.log(myDate.getDay());
// console.log(myDate.getDate());
// console.log(myDate.getMonth());

// var myNewDate = new Date();
// console.log(myNewDate);
// console.log(myNewDate.setMonth(7));
// console.log(myNewDate);
// ========================================================

// Exercise 3 - Look at HTML and CSS
debugger;
var todayDate = document.getElementById("todaysdate");
var todoButton = document.getElementById("whattodo");
// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);
// create a new Date object
var d = new Date();

// call the displayDate() function
displayDate();

function displayDate() {
 // todo: display the current date in the todaysdate div
 todayDate.innerHTML = d.toDateString();
}
function displayActivity() 
{
    var dayOfWeek = d.getDay();
    var youShould;

    switch (dayOfWeek)
    {
        case 0: 
            youShould = "Go to church. The sabbath belongs to YHWH";
            break;
        case 1:
            youShould = "Do bootcamp work";
            break;    
        case 2:
            youShould = "Go to the gym";
            break;
        case 3:
            youShould = "Go to class";
            break;
        case 4:
            youShould = "Practice some sketching";
            break;
        case 5:
            youShould = "Go to Young Adults";
            break;
        case 6:
            youShould = "Go Help Someone";
            break;

    }
    document.getElementById("thingToDo").innerHTML = youShould;
}

/*
Because JavaScript numbers the days of the week like this:

Sunday     = 0
Monday     = 1
Tuesday    = 2  ← TODAY
Wednesday  = 3
Thursday   = 4
Friday     = 5
Saturday   = 6

JavaScript starts months at 0:

January   = 0
February  = 1
March     = 2
April     = 3
May       = 4
June      = 5
July      = 6
August    = 7
September = 8  ← September
October   = 9
November  = 10
December  = 11

*/
