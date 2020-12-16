var anScore = new Array(shuffledQuestions.length).fill(0);
var finalScore = 0;
var answerFunc = function () {
    $('.answer').click(function (e) {
        $('.answer').css("background-color", "rgb(70, 78, 78)");
        $(this).css("background-color", "cadetblue");
        $(this).addClass("selected");
        var index = e.target.id;
        if (shuffledQuestions[quesNo - 1].correctAnswer == shuffledQuestions[quesNo - 1].answers[index]) {
            // console.log(quesNo-1)
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
    localStorage.setItem("finalScore", finalScore);
    localStorage.setItem("quesNum", anScore.length);
    console.log(finalScore)
    location.replace("./Pages/result.html")
})
