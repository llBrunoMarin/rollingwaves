const questions = [
    {
        question: "¿Cuál es tu estilo de patinaje preferido?",
        choices: [
            "Derby (agresivo y de contacto)",
            "Artístico (figuras y coreografías)",
            "Recreativo (paseos y diversión)",
            "Velocidad (carreras y resistencia)"
        ]
    },
    {
        question: "¿Qué tipo de música te gusta patinar?",
        choices: [
            "Rock y punk",
            "Música clásica",
            "Pop y música electrónica",
            "Cualquier ritmo que me mantenga en movimiento"
        ]
    },
    {
        question: "¿Cuál es tu nivel de experiencia?",
        choices: [
            "Principiante",
            "Intermedio",
            "Avanzado",
            "Profesional"
        ]
    }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextButton = document.getElementById('next');
const progressEl = document.getElementById('progress');
const currentQuestionEl = document.getElementById('current-question');
const totalQuestionsEl = document.getElementById('total-questions');

function showQuestion() {
    const question = questions[currentQuestion];
    questionEl.textContent = question.question;
    choicesEl.innerHTML = '';
    
    question.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.classList.add('btn');
        button.addEventListener('click', () => selectChoice(index));
        choicesEl.appendChild(button);
    });

    // Update progress bar and counter
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressEl.style.width = `${progress}%`;
    currentQuestionEl.textContent = currentQuestion + 1;
    totalQuestionsEl.textContent = questions.length;
}

function selectChoice(choiceIndex) {
    const buttons = choicesEl.getElementsByTagName('button');
    for (let button of buttons) {
        button.classList.remove('selected');
    }
    buttons[choiceIndex].classList.add('selected');
    score = choiceIndex;
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const results = [
        "¡Eres un Derby Roller! Te encanta la adrenalina y el contacto.",
        "¡Eres un Roller Artístico! La elegancia y la expresión son tu fuerte.",
        "¡Eres un Roller Recreativo! Disfrutas de la diversión y la socialización.",
        "¡Eres un Roller de Velocidad! La velocidad y el desafío son tu pasión."
    ];
    
    questionEl.textContent = results[score];
    choicesEl.innerHTML = '';
    nextButton.style.display = 'none';
}

nextButton.addEventListener('click', nextQuestion);

// Start the quiz
showQuestion(); 