function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>No9ta</h1>";
    gameOverHTML += "<h2 id='score'> Chhal jebtii: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("?ايلا عطاوك تختار معجزة وحدة تحقق شنو تختار ", ["1. تولي لا مرئي", "2.تكون كتقرا افكار الناس",".تكون تحكم ف مزاج الأخرين", "كاملين"], "1. تولي لا مرئي"),
    new Question("االحاجة لي تقدر تعيش بلا بيها ", ["1.لحم البشر", "2.الفضلات 😂",".تكون تحكم ف مزاج الأخرين", "كاملين"], "1.لحم البشر"),
    

];


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





