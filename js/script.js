var ques = document.getElementById("theQues");
var ans = document.getElementById("theAns");
var quesNo = 1;
var userAnswer = new Array(shuffledQuestions.length);
document.getElementById("startBtn").addEventListener("click", function () {
    document.getElementById("start").style.display = "none";
    document.getElementById("quesDiv").style.display = "inline-block";
    document.getElementById("controlBar").style.display = "inline-block";
    document.getElementById("markBar").style.display = "inline-block";
    document.getElementById("markDiv").style.display = "inline-block";
    ques.innerText = shuffledQuestions[0].question;
    for (var i = 0; i < shuffledQuestions[0].answers.length; i++) {
        var childDiv = document.createElement("div");
        childDiv.id = i;
        childDiv.classList = "answer";
        childDiv.innerText = shuffledQuestions[0].answers[i];
        ans.append(childDiv);
    }
    answerFunc();
    //time 
    document.getElementById('timeContainer').style.display = 'block';
    var count = 0;
    var totalTimeInSeconds = shuffledQuestions.length * 30;
    var intervalStart = setInterval(function () {
        count++;
        var timePercentage = (count / totalTimeInSeconds) * 100;
        if (timePercentage <= 100) {
            document.getElementById('timeBar').style.width = timePercentage + '%';
        }
        else {
            clearInterval(intervalStart)
        }
        if (timePercentage == 50) {
            document.getElementById('timeBar').style.backgroundColor = '#FFC135';
        }
        if (timePercentage == 75) {
            document.getElementById('timeBar').style.backgroundColor = 'red';
        }
        if (timePercentage == 100) {
            timeOut();
        }
    }, 1000);
})
//next button 
document.getElementById("next").addEventListener("click", function () {
    // console.log(userAnswer)
    if (quesNo == 1) {
        document.getElementById("previous").style.display = "inline-block";
    }
    if (quesNo == shuffledQuestions.length) {
        quesNo = shuffledQuestions.length;
    } else {
        if (quesNo == shuffledQuestions.length - 1) {
            document.getElementById("next").style.display = "none";
        }
        quesNo++;
        document.getElementById("theNumber").innerText = quesNo;
        ans.innerHTML = ' ';
        ques.innerText = shuffledQuestions[quesNo - 1].question;
        for (var i = 0; i < shuffledQuestions[quesNo - 1].answers.length; i++) {
            var childDiv = document.createElement("div");
            childDiv.classList = "answer";
            childDiv.id = i;
            childDiv.innerText = shuffledQuestions[quesNo - 1].answers[i];
            ans.append(childDiv);
        }
    }
    //the selected answer
    var answers = document.getElementsByClassName("answer")
    for (var i = 0; i < answers.length; i++) {
        if(answers[i].innerText == userAnswer[quesNo - 1]){
            answers[i].style.backgroundColor = "rgb(70, 78, 78)"
        }
    }
    answerFunc();
})
//previous button
document.getElementById("previous").addEventListener("click", function () {
    if (quesNo == shuffledQuestions.length) {
        document.getElementById("next").style.display = "inline-block";
    }
    if (quesNo == 1) {
        quesNo = 1;
    } else {
        if (quesNo == 2) {
            quesNo = 1;
            document.getElementById("previous").style.display = "none";
        } else {
            quesNo--;
        }
        document.getElementById("theNumber").innerText = quesNo;
        ans.innerHTML = ' ';
        ques.innerText = shuffledQuestions[quesNo - 1].question;
        for (var i = 0; i < shuffledQuestions[quesNo - 1].answers.length; i++) {
            var childDiv = document.createElement("div");
            childDiv.classList = "answer";
            childDiv.id = i;
            childDiv.innerText = shuffledQuestions[quesNo - 1].answers[i];
            ans.append(childDiv);
        }
    }
    var answers = document.getElementsByClassName("answer")
    for (var i = 0; i < answers.length; i++) {
        if(answers[i].innerText == userAnswer[quesNo - 1]){
            answers[i].style.backgroundColor = "rgb(70, 78, 78)"
        }
    }
    answerFunc();
})
//bookmark button
document.getElementById("bookmark").addEventListener("click", function () {
    var marks = document.querySelectorAll(".mark");
    var flag = 0;
    for (var i = 0; i < marks.length; i++) {
        if (marks[i].id == document.getElementById("theNumber").innerText) {
            flag = 1;
        }
        // console.log(marks[i].id);
    }
    if (flag == 0) {
        var childLi = document.createElement("li");
        childLi.id = document.getElementById("theNumber").innerText;
        childLi.classList = "mark";
        childLi.innerText = "Question " + document.getElementById("theNumber").innerText;
        document.getElementById("markBar").append(childLi);
    }
    //bookmark event
    document.querySelectorAll('.mark').forEach(function (bookMark) {
        bookMark.addEventListener("click", function (e) {
            quesNo = e.target.id;
            document.getElementById("next").style.display = "inline-block";
            document.getElementById("previous").style.display = "inline-block";
            if (quesNo == shuffledQuestions.length) {
                document.getElementById("next").style.display = "none";
            }
            if (quesNo == 1) {
                document.getElementById("previous").style.display = "none";
            }
            document.getElementById("theNumber").innerText = quesNo;
            ans.innerHTML = ' ';
            ques.innerText = shuffledQuestions[quesNo - 1].question;
            for (var i = 0; i < shuffledQuestions[quesNo - 1].answers.length; i++) {
                var childDiv = document.createElement("div");
                childDiv.id = i;
                childDiv.classList = "answer";
                childDiv.innerText = shuffledQuestions[quesNo - 1].answers[i];
                ans.append(childDiv);
            }
            //the selected answer
            var answers = document.getElementsByClassName("answer")
            for (var i = 0; i < answers.length; i++) {
                if(answers[i].innerText == userAnswer[quesNo - 1]){
                    answers[i].style.backgroundColor = "rgb(70, 78, 78)"
                }
            }
            answerFunc();
        })
    });
})