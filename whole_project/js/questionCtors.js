// Define list of questions

var questions = [
    {
        "question": "What is the HTML tag under which one can write the JavaScript code?",
        "correctAnswer": "<script>",
        "answers": [
            "<javascript>",
            "<scripted>",
            "<script>",
            "<js>"
        ]
    },
    {
        "question": "What is the JavaScript syntax for printing values in Console?",
        "correctAnswer": "console.log(5);",
        "answers": [
            "print(5);",
            "console.log(5);",
            "console.print(5);",
            "print.console(5);"
        ]
    },
    {
        "question": "How to write an ‘if’ statement for executing some code. If “i” is NOT equal to 5?",
        "correctAnswer": "if (i!=5)",
        "answers": [
            "if (i<>5)",
            "if i<>5",
            "if (i!=5)",
            "if i!=5"
        ]
    },
    {
        "question": "How to initialize an array in JavaScript?",
        "correctAnswer": "var Geeks=[“Geek1”, “Geek2”, “Geek3”]",
        "answers": [
            "var Geeks= “Geek1”, “Geek2”, “Geek3”",
            "var Geeks=(1:Geek1, 2:Geek2, 3:Geek3)",
            "var Geeks=(1=Geek1, 2=Geek2, 3=Geek3)",
            "var Geeks=[“Geek1”, “Geek2”, “Geek3”]"
        ]
    }
    ,
    {
        "question": " Look at this series: 58, 52, 46, 40, 34, . . . What number should come next?",
        "correctAnswer": "28",
        "answers": [
            "26", 
            "28",
            "30",
            "32"
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
            value: que.correctAnswer,
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

shuffledQuestions.forEach(function (element,index) {
    // Create new question with Question constructor
    shuffledQuestions[index] = new Question(element);
});








