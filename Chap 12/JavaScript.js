/*
todo: Create three global variables:
* trainSpeed (initial value = 250)
* trainPosition (initial value = 0)
* animation (no initial value)
*/
/*
todo: Listen for click events on the train element and
call a function named speedUp when they happen.
*/
/*
todo: Listen for click events on the stop button element
and call a function called stopTrain when they
happen.
*/
function speedUp() {
 /*
 todo: Check whether the train is already going as fast
as it can. If not, increase the speed.
 */
 /*
 If the train is already moving, stop it and then
restart with the new speed by calling a
function called frame.
 */
 function frame() {
 /*
 todo: Reposition the train and check whether the
train is crashed.
 */
 }
}
function stopTrain() {
 /*
 todo: Test whether the train is already crashed. If
not, stop the train.
 */
}
function checkPosition(currentPosition) {
 /*
 todo: Check the train's current position and crash it
if it's at the end of the line.
 */
}
var trainSpeed = 250;
var trainPosition = 0;
var animation;

var train = document.getElementById("train");
train.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

if (trainSpeed > 10) {
 trainSpeed ‐= 10;
}

);
 animation = setInterval(frame, trainSpeed);

 function frame() {
 trainPosition += 2;
 train.style.left = trainPosition + 'px';
 checkPosition(trainPosition);
}

function checkPosition(currentPosition) {
 if (currentPosition === 260) {
 alert("Crash!");
 console.log("Crash!");
 clearInterval(animation);
 }
}

function stopTrain() {
 if (trainPosition < 260) {
 clearInterval(animation);
 }
}

