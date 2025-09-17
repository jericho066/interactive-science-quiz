const welcomeSection = document.getElementById("welcome-section");
const progressFill = document.getElementById("progressFill");

const quizSection = document.getElementById("quiz-section");
const questionNumber = document.getElementById("questionNumber");
const questionText =  document.getElementById("questionText");
const input = document.getElementById("answerInput");

const buttonGroup = document.getElementById("buttonGroup");
const feedback = document.getElementById("feedBack");

const resultSection = document.getElementById("result-section");
const resultMessage = document.getElementById("resultMessage");
const resultDetails = document.getElementById("resultDetails");


const questionsAndAnswers = [
    { question: "What is the largest planet in our solar system?", answer: "jupiter" },
    { question: "What is the study of living organisms called?", answer: "biology" },
    { question: "What is the process by which plants convert sunlight into energy called?", answer: "photosynthesis" },
    { question: "What is the smallest unit of an element that retains its chemical properties?", answer: "atom" },
    { question: "What is the basic unit of heredity?", answer: "gene" },
    { question: "What is the process by which liquid water turns into water vapor?", answer: "evaporation" },
    { question: "What is the process of converting a solid directly into a gas called?", answer: "sublimation" },
    { question: "What is the fundamental unit of life?", answer: "cell" },
    { question: "What is the process of a liquid turning into a gas at the surface called?", answer: "vaporization" },
    { question: "Who discovered the law of gravity?", answer: "isaac newton" }
];

//* quiz state
let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = []


//! ==== FUNCTIONS ====

function shuffleQuestions() {
    quizQuestions = [...questionsAndAnswers];
    for (let i = quizQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [quizQuestions[i], quizQuestions[j]] = [quizQuestions[j], quizQuestions[i]];
    }
}

function startQuiz() {
    shuffleQuestions(); 
    currentQuestionIndex = 0;
    score = 0;

    welcomeSection.style.display = "none";
    quizSection.classList.add("active");

    showQuestion();
}

function updateProgress() {
    //* updating the width of the progress base on current question.
    const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + "%";
}

function showQuestion() {
    if (currentQuestionIndex < quizQuestions.length) {
        questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
        questionText.textContent = quizQuestions[currentQuestionIndex].question;
        input.value = '';

        feedback.classList.remove('show', 'correct', 'incorrect', 'skipped');
        
        buttonGroup.innerHTML = `
            <button class="btn btn-primary" onclick="submitAnswer()">Submit Answer</button>
            <button class="btn btn-secondary" onclick="skipQuestion()">Skip Question</button>
        `;
        
        updateProgress();

        //* to auto focus the input.
        setTimeout (() => { input.focus(); }, 100);
    }
}

function capitalizeAnswer(answer) {
    return answer.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type} show`;
}

function submitAnswer() {
    const userAnswer = input.value.trim().toLowerCase();

    if (!userAnswer) {
        showFeedback("Please provide an answer or skip if you don't know.", 'skipped');
        return;
    }

    const correctAnswer = quizQuestions[currentQuestionIndex].answer;
    let formattedAnswer = capitalizeAnswer(correctAnswer);

    if (correctAnswer === "isaac newton" && (userAnswer === "isaac newton" || userAnswer === "sir isaac newton")) {
        showFeedback("Correct! Well done!", "correct");
        score++;
    } else if (correctAnswer === "isaac newton") {
        formattedAnswer = "Isaac Newton or Sir Isaac Newton";
        showFeedback(`Incorrect. The correct answer is: ${formattedAnswer}`, "incorrect");
    } else if (userAnswer === correctAnswer){
        showFeedback("Correct! Well done!", "correct");
        score++;
    } else {
        showFeedback(`Incorrect. The correct answer is: ${formattedAnswer}`, "incorrect");
    }

    showNextButton();
}

function showNextButton() {    
    if (currentQuestionIndex < quizQuestions.length - 1) {
        buttonGroup.innerHTML = '<button class="btn btn-success" onclick="nextQuestion()">Next Question</button>';
    } else {
        buttonGroup.innerHTML = '<button class="btn btn-primary" onclick="showResults()">View Results</button>';
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function skipQuestion() {
    let correctAnswer = capitalizeAnswer(quizQuestions[currentQuestionIndex].answer);

    if (correctAnswer.toLowerCase() === "isaac newton") {
        correctAnswer = "Isaac Newton or Sir Isaac Newton";
    }

    showFeedback(`Question skipped. The correct answer was: ${correctAnswer}`, 'skipped');
    showNextButton();
}


function showResults() {
    quizSection.classList.remove('active');
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    const passed = score >= 7;
    
    document.getElementById('scoreCircle').textContent = percentage + '%';
    
    if (passed) {
        resultMessage.textContent = 'Congratulations! You passed!';
        resultMessage.className = 'result-message pass';
    } else {
        resultMessage.textContent = 'You didn\'t pass this time.';
        resultMessage.className = 'result-message fail';
    }
    
    resultDetails.innerHTML = `
        <p>You answered <strong>${score}</strong> out of <strong>${quizQuestions.length}</strong> questions correctly.</p>
        <p>Your final score: <strong>${percentage}%</strong></p>
        ${!passed ? '<p>You need 70% or higher to pass. Try again!</p>' : ''}
    `;
    
    resultSection.classList.add('show');
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    //* to allow Enter key to submit answers
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const submitBtn = document.querySelector('.btn-primary');
            if (submitBtn && submitBtn.textContent === 'Submit Answer') {
                submitAnswer();
            }
        }
    });
});