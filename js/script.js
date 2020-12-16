var ques = document.getElementById("theQues");
var ans = document.getElementById("theAns");
var quesNo = 1;
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
})
//next button 
document.getElementById("next").addEventListener("click", function () {
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
    answerFunc();
})
//previous button
document.getElementById("previous").addEventListener("click", function () {
    // $(".selected").css("background-color","red")
    console.log(document.getElementsByClassName("selected")[0])
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
            answerFunc();
        })
    });
})