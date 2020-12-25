var anScore = new Array(shuffledQuestions.length).fill(0);
var finalScore = 0;
var answerFunc = function () {
    $('.answer').click(function (e) {
        $('.answer').css("background-color", "cadetblue");
        $(this).css("background-color", "rgb(70, 78, 78)");
        $(this).addClass("selected");
        var index = e.target.id;
        userAnswer[quesNo - 1] = (shuffledQuestions[quesNo - 1].answers[index])
        if (shuffledQuestions[quesNo - 1].correctAnswer == shuffledQuestions[quesNo - 1].answers[index]) {
            anScore[quesNo - 1] = 1;
        } else {
            anScore[quesNo - 1] = 0;
        }

    })
}
$('#submit').click(function () {
    anScore.forEach(function (element) {
        finalScore = finalScore + element;
    })
    var dateUsed = new Date();
    setCookie("finalScore",finalScore, dateUsed);    
    setCookie("quesNum",anScore.length, dateUsed);    
    console.log(finalScore)
    location.replace("result.html")
})

var timeOut = function () {
    anScore.forEach(function (element) {
        finalScore = finalScore + element;
    })

    var dateUsed = new Date();
    setCookie("finalScore",finalScore, dateUsed);    
    setCookie("quesNum",anScore.length, dateUsed);    
    console.log(finalScore)
    location.replace("timeOut.html")
}