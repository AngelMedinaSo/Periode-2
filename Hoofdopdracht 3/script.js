const answers = [
    { text: "Ja, absoluut!", tone: "positive" },
    { text: "Zeker weten!", tone: "positive" },
    { text: "Het ziet er goed uit.", tone: "positive" },
    { text: "Misschien...", tone: "neutral" },
    { text: "Vraag het later opnieuw.", tone: "neutral" },
    { text: "Dat is onzeker.", tone: "neutral" },
    { text: "Nee, absoluut niet.", tone: "negative" },
    { text: "Ik denk van niet.", tone: "negative" },
    { text: "De sterren zeggen nee.", tone: "negative" },
    { text: "Zeer waarschijnlijk wel!", tone: "positive" }
];

let lastAnswerIndex = -1;
const warning = document.getElementById("warning");
const startScreen = document.getElementById("startScreen");
const answerScreen = document.getElementById("answerScreen");
const questionOutput = document.getElementById("questionOutput");
const answerOutput = document.getElementById("answerOutput");
const questionInput = document.getElementById("questionInput");
const askBtn = document.getElementById("askBtn");
const backBtn = document.getElementById("backBtn");

askBtn.addEventListener("click", function() {

    let question = questionInput.value;

    if (question.trim() === "") {
        warning.classList.remove("hidden");
    } else {
        warning.classList.add("hidden");

        let randomIndex;

        do {
            randomIndex = Math.floor(Math.random() * answers.length);
        } while (randomIndex === lastAnswerIndex);

        lastAnswerIndex = randomIndex;

        let selectedAnswer = answers[randomIndex];

        questionOutput.textContent = question;
        answerOutput.textContent = selectedAnswer.text;

        answerOutput.classList.remove("positive", "negative", "neutral");

        answerOutput.classList.add(selectedAnswer.tone);

        startScreen.classList.remove("active");
        answerScreen.classList.add("active");
    }
});

backBtn.addEventListener("click", function() {
    answerScreen.classList.remove("active");
    startScreen.classList.add("active");

    questionInput.value = "";
});