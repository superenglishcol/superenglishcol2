// Preguntas del cuestionario
const questions = [
    {
        question: "¿Cómo se dice 'perro' en inglés?",
        answer: "dog"
    },
    {
        question: "¿Cómo se dice 'gato' en inglés?",
        answer: "cat"
    },
    {
        question: "¿Cómo se dice 'casa' en inglés?",
        answer: "house"
    },
    {
        question: "¿Cómo se dice 'libro' en inglés?",
        answer: "book"
    },
    {
        question: "¿Cómo se dice 'árbol' en inglés?",
        answer: "tree"
    }
];

// Variables para rastrear el estado del cuestionario
let currentQuestionIndex = 0;

// Elementos del DOM
const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const feedbackElement = document.getElementById('feedback');
const checkAnswerButton = document.getElementById('checkAnswer');
const nextQuestionButton = document.getElementById('nextQuestion');

// Inicializar la primera pregunta
function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    answerInput.value = '';  // Limpiar el campo de entrada
    feedbackElement.textContent = '';  // Limpiar la retroalimentación
    answerInput.focus();  // Poner el foco en el campo de entrada
}

// Verificar la respuesta ingresada
function checkAnswer() {
    const currentQuestion = questions[currentQuestionIndex];
    const userAnswer = answerInput.value.trim().toLowerCase();

    if (userAnswer === currentQuestion.answer.toLowerCase()) {
        feedbackElement.textContent = "¡Correcto!";
        feedbackElement.classList.add('correct');
        feedbackElement.classList.remove('incorrect');
    } else {
        feedbackElement.textContent = `Incorrecto. La respuesta correcta es "${currentQuestion.answer}".`;
        feedbackElement.classList.add('incorrect');
        feedbackElement.classList.remove('correct');
    }
}

// Cargar la siguiente pregunta
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = 0;  // Reiniciar el cuestionario si se llega al final
    }
    loadQuestion();
}

// Event listeners para los botones
checkAnswerButton.addEventListener('click', checkAnswer);
nextQuestionButton.addEventListener('click', nextQuestion);

// Cargar la primera pregunta cuando la página se carga
document.addEventListener('DOMContentLoaded', loadQuestion);
