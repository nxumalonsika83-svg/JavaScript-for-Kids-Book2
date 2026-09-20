// declare variables
debugger;
var story = document.getElementById("story");
var siteFooter = document.getElementById("siteFooter");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var yourAnswer = document.getElementById("yourAnswer");
var submit = document.getElementById("submit");
// todo: make an empty array called answers
var answers = [];

/* todo: listen for clicks on the submit button and call
the getAnswer() function when they happen. */
submit.addEventListener("click",getAnswer);
// todo: call the function to ask the first question
/* askQuestion() asks a question, based on the number
passed to it */

askQuestion(0);

function askQuestion(questionNumber) {


/* getAnswer() gets the answer from the text field and
pushes it into the answers array, then calls
the continueStory function */
answer.style.display = "block";
answers.length = questionNumber;

switch (questionNumber)
{
    case 0:
        question.innerHTML = "Are you ready to play?";
        break;
    case 1:
        question.innerHTML = "Go to Mars, or stay home?";
        break;
    case 2:
        question.innerHTML = "Risk it, or go home or throw the cat out?";
        break; 
    default:
        break;           
}
}

function getAnswer()
{
/* continueStory() displays part of the story or an error
based on the value of an item in the answers
array */
var cleanInput = yourAnswer.value.toUpperCase();
answers.push(cleanInput);
yourAnswer.value = "";
continueStory(answers.length - 1);
}
/* theEnd() ends the story and hides the input field */
function continueStory(answerNumber) 
{
    switch (answerNumber)
    {
        case 0:
            if (answers[0] == "YES")
            {
                story.innerHTML = document.getElementById("answer01").innerHTML;
                askQuestion(1);
            }
            else if (answers[0] === "NO")
            {
                story.innerHTML = document.getElementById("answer02").innerHTML;
                askQuestion(0);
            }
            else
            {
                story.innerHTML = document.getElementById("err0").innerHTML;
                askQuestion(0);
            }
            break;
        case 1:
            if (answers[1] === "GO TO MARS")
                {
                    story.innerHTML = document.getElementById("answer11").innerHTML;
                    askQuestion(2);     
                }
            else if (answers[1] === "STAY HOME")
                {
                    story.innerHTML = document.getElementById("answers12").innerHTML;
                    theEnd();
                }
            else
                {
                    story.innerHTML = document.getElementById("err1").innerHTML;
                    askQuestion(1);
                }
            break;
        case 2:
            if (answers[2] === "RISK IT" ) 
            {
                story.innerHTML = document.getElementById("answer21").innerHTML;
                theEnd();
            }
            else if (answers[2] === "GO HOME")
            {
                story.innerHTML = document.getElementById("answer22").innerHTML;
                theEnd();
            }
            else 
            {
                story.innerHTML = document.getElementById("err2").innerHTML;
                askQuestion(2);
            }
            break;
            default:
                story.innerHTML = "The story is over";

                break;

            
    }
}
function theEnd() 
{
    story.innerHTML += "<p>The End.</p>";
    question.innerHTML = "";
    answer.style.display = "none";
}
