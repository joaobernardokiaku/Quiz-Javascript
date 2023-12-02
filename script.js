const $startGameButton = document.querySelector('.start-quiz');
const $startGameLogo = document.querySelector('#logo');
const $questionsContainer = document.querySelector('.questions-container');
const $answersContainer = document.querySelector('.answers-container');
const $questionText = document.querySelector('.question');
const $nextQuestionButton = document.querySelector('.next-question');

$startGameButton.addEventListener("click", startGame);
$nextQuestionButton.addEventListener("click", displayNextQuestion);

//var currentQuestionIndex = Math.floor(Math.random() * 12) + 1;
let currentQuestionIndex = 0;
let totalCorrect = 0;

function startGame() {
    $startGameButton.classList.add("hide");
    $startGameLogo.classList.add("hide");
    $questionsContainer.classList.remove("hide");
    displayNextQuestion();
}

function displayNextQuestion() {
    resetState();

    if (questions.length === currentQuestionIndex) {
        return finishGame();
    }

    $questionText.textContent = questions[currentQuestionIndex].question;
    questions[currentQuestionIndex].answers.forEach(answer => {
        const newAnswer = document.createElement('button');
        newAnswer.classList.add('button', 'answer');
        newAnswer.textContent = answer.text;
        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct;
        }
        $answersContainer.appendChild(newAnswer);

        newAnswer.addEventListener('click', selectAnswer);
    })
}

function resetState() {
    while ($answersContainer.firstChild) {
        $answersContainer.removeChild($answersContainer.firstChild);
    }
    document.body.removeAttribute('class');
    $nextQuestionButton.classList.add('hide');
}

function selectAnswer(event) {
    const answerClicked = event.target;
    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct');
        totalCorrect++;
    } else {
        document.body.classList.add('incorrect');
    }
    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
        button.disabled = true;
    })
    $nextQuestionButton.classList.remove('hide');
    currentQuestionIndex++;
}

function finishGame() {
    const totalQuestion = questions.length;
    const performance = Math.floor(totalCorrect * 100 / totalQuestion);

    let message = '';
    switch (true) {
        case (performance >= 90):
            message = 'Excelente!';
            break;
        case (performance >= 70):
            message = 'Muito bom!';
            break;
        case (performance >= 50):
            message = 'Bom!';
            break;
        default:
            message = 'Procure melhorar!';
    }

    $questionsContainer.innerHTML = "<p class ='final-message'> Você acertou " + totalCorrect + " questões em " + totalQuestion + " tentativas! <span>Resultado: " + message + "</span></p> <br> <button onclick='window.location.reload()' class ='button'>Refazer Texto</button>";
}

// ::::::::::::::Questões:::::::::::::::::::

// ::::::::::::::Questões:::::::::::::::::::

const questions = [
    {
        question: "Qual dos animais é o rei da serlva?",
        answers: [
            { text: "Gorila", correct: false },
            { text: "Leão", correct: true },
            { text: "Elefant", correct: false },
            { text: "Jaguar", correct: false }
        ]
    },
    {
        question: "Quem venceu o mundial 2022?",
        answers: [
            { text: "Alemanha", correct: false },
            { text: "França", correct: false },
            { text: "Argentina", correct: true },
            { text: "Espanha", correct: false }
        ]
    },
    {
        question: "Qual é a nacionalidade do Micheal Jackson?",
        answers: [
            { text: "Americano", correct: true },
            { text: "Inglês", correct: false },
            { text: "Alemão", correct: false },
            { text: "Francês", correct: false }
        ]
    },
    {
        question: "Qual dos animais não dorme?",
        answers: [
            { text: "Cobra", correct: false },
            { text: "Gato", correct: false },
            { text: "Cão", correct: false },
            { text: "Lobo", correct: true }
        ]
    },
    {
        question: "Como se chama o actual presidente dos Estados Unidos da América?",
        answers: [
            { text: "Gorila", correct: false },
            { text: "Joe Biden", correct: true },
            { text: "Donald Tramp", correct: false },
            { text: "Barack Obama", correct: false }
        ]
    },
    {
        question: "Como se chama o protocolo da internet?",
        answers: [
            { text: "TCP/IP", correct: false },
            { text: "FTP", correct: false },
            { text: "HTTPS", correct: true },
            { text: "HTPS", correct: false }
        ]
    },
    {
        question: "Quantos paises tem o continente africano?",
        answers: [
            { text: "57", correct: false },
            { text: "55", correct: true },
            { text: "56", correct: false },
            { text: "54", correct: false }
        ]
    },
    {
        question: "Qual é o inserto que não dorme?",
        answers: [
            { text: "Mosca", correct: false },
            { text: "Barata", correct: false },
            { text: "Formiga", correct: true },
            { text: "Mosquito", correct: false }
        ]
    },
    {
        question: "Qual é o maior rio de África?",
        answers: [
            { text: "Zambeze", correct: false },
            { text: "Kwanza", correct: false },
            { text: "Nilo", correct: true },
            { text: "Congo", correct: false }
        ]
    },
    {
        question: "Qual é o animal mais gigante do mundo?",
        answers: [
            { text: "Leão", correct: false },
            { text: "Elefante", correct: false },
            { text: "Girafa", correct: false },
            { text: "Baleia", correct: true }
        ]
    },
    {
        question: "Como se chama o primeiro presidente de Angola?",
        answers: [
            { text: "Jónas Savimbi", correct: false },
            { text: "João Lourenço", correct: false },
            { text: "José Eduardo", correct: false },
            { text: "Agostinho Neto", correct: true }
        ]
    },
    {
        question: "Como se chama o pai do Jota?",
        answers: [
            { text: "Tio Nelson", correct: false },
            { text: "Tio Pedro", correct: false },
            { text: "Tio Lemos", correct: false },
            { text: "Tio João", correct: true }
        ]
    },
    {
        question: "Como se chama a mãe do Jota?",
        answers: [
            { text: "Tia Sandra", correct: false },
            { text: "Tia Julha", correct: false },
            { text: "Tia Francisca", correct: false },
            { text: "Tia Paula", correct: true }
        ]
    },
    {
        question: "Qual é o maior país do mundo?",
        answers: [
            { text: "Estados Unidos", correct: false },
            { text: "Rússia", correct: true },
            { text: "China", correct: false },
            { text: "Canadá", correct: false }
        ]
    }
]
