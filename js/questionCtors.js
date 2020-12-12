// Define list of questions
var questions = [{
    "question": "What is the HTML tag under which one can write the JavaScript code?",
    "correctAnswer": 2,
    "answers": [
        "<javascript>",
        "<scripted>",
        "<script>",
        "<js>"
    ]
},
{
    "question": "What is the JavaScript syntax for printing values in Console?",
    "correctAnswer": 1,
    "answers": [
        "print(5);",
        "console.log(5);",
        "console.print(5);",
        "print.console(5);"
    ]
},
{
    "question": "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 5?",
    "correctAnswer": 2,
    "answers": [
        "if (i<>5)",
        "if i<>5",
        "if (i!=5)",
        "if i!=5"
    ]
}
]

// Define questions constructor
function Question(que) {
    Object.defineProperties(this, {
        question: {
            value: que.question,
            writable: false,
            enumerable: true,
            configurable: false
        },
        correctAnswer: {
            //correct answer here is converted to a statement instead of an index
            value: que.answers[que.correctAnswer],
            writable: false,
            enumerable: false,
            configurable: false
        },
        answers: {
            // Shuffling answers
            value: que.answers.sort(function () {
                return 0.5 - Math.random()
            }),
            enumerable: true,
            writable: false,
            configurable: false
        }
    });
}

// Shuffling questions 
var shuffledQuestions = questions.sort(function () {
    return 0.5 - Math.random()
});

shuffledQuestions.forEach(function (element) {
    // Create new question with Question constructor
    element = new Question(element);
    // console.log(element.question, ':');
    // console.log(element.answers.join('\n'));
    // console.log("Correct Answer is: ", element.correctAnswer);
    // console.log('-------------------------');
});