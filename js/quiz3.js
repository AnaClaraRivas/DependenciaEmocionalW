const questions = [
  {
    question: "No livro, qual é o principal vazio emocional que Igor tenta preencher?",
    options: ["O desejo de poder", "A busca por status social", " A falta de dinheiro", "A falta de amor e afeto"],
    correct: 3
  },
  {
    question: "O que a história de Igor pode nos ensinar sobre a relação entre falta de afeto e decisões prejudiciais?",
    options: ["A falta de amor pode ser ignorada e não afeta as escolhas", "A falta de afeto não tem influência nas ações de uma pessoa", " A ausência de afeto pode levar a escolhas impulsivas e prejudiciais", "A falta de amor faz com que uma pessoa se torne mais racional"],
    correct: 2
  },
  {
    question: "Como a dependência de Igor o afeta em termos de suas relações familiares?",
    options: ["Ele cria laços mais fortes com sua família","Ele não muda sua relação com a família","Ele se afasta da família para buscar ajuda em clínicas","Ele começa a culpar as pessoas ao seu redor, especialmente as funcionárias da casa"],
    correct: 3
  },
  {
    question: "O que o comportamento de Igor, ao começar a usar drogas e roubar, demonstra sobre o impacto da falta de afeto na vida de um jovem?",
    options: ["Ele está em busca de prazer imediato e não de um alívio emocional","Ele é apenas uma vítima das circunstâncias, sem responsabilidade","Ele busca preencher o vazio emocional que sente, o que leva a escolhas destrutivas","Ele está em busca de reconhecimento social"],
    correct: 2
  },
  {
    question: "Como a história de Igor ilustra a relação entre riqueza material e vazio emocional?",
    options: [" A riqueza material faz com que Igor se sinta completamente feliz e satisfeito.","  A falta de afeto e amor emocional leva Igor a se sentir perdido, apesar de sua riqueza.", "Igor encontra um propósito na vida ao usar seu dinheiro para ajudar os outros.", "A riqueza de Igor permite que ele compre a felicidade, mas ele continua insatisfeito."],
    correct: 1
  }
];
  
  let currentQuestion = 0;
  let score = 0;
  
  // Elementos 
  const startScreen = document.getElementById("start-screen");
  const rulesScreen = document.getElementById("rules-screen");
  const quiz = document.getElementById("quiz");
  const resultScreen = document.getElementById("result-screen");
  const questionElement = document.getElementById("question");
  const optionsContainer = document.getElementById("options");
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  const startButton = document.getElementById("start-btn");
  const continueButton = document.getElementById("continue-btn");
  const restartButton = document.getElementById("restart-btn");
  
  // Tela inicial para regras
  startButton.addEventListener("click", () => {
    startScreen.classList.add("hidden");
    rulesScreen.classList.remove("hidden");
  });
  
  // Regras para começar
  continueButton.addEventListener("click", () => {
    rulesScreen.classList.add("hidden");
    quiz.classList.remove("hidden");
    loadQuestion();
  });
  
  // Pergunta Atual
  function loadQuestion() {
    const question = questions[currentQuestion];
    questionElement.textContent = question.question;
    optionsContainer.innerHTML = "";
  
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-btn");
      button.addEventListener("click", () => selectOption(index, button));
      optionsContainer.appendChild(button);
    });
  
    nextButton.classList.add("hidden");
  }
  
  // Respostas
  function selectOption(selectedIndex, button) {
    const question = questions[currentQuestion];
    if (selectedIndex === question.correct) {
      button.classList.add("correct");
      score++;
    } else {
      button.classList.add("wrong");
      // Resposta correta
      const correctButton = optionsContainer.children[question.correct];
      correctButton.classList.add("correct");
    }
  
    // Tira os botões
    Array.from(optionsContainer.children).forEach(btn => {
      btn.disabled = true;
    });
  
    nextButton.classList.remove("hidden");
  }
  
  // Próxima pergunta
  nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showResult();
    }
  });
  
  // Mostra o resultado final
  function showResult() {
    quiz.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreElement.textContent = score;
  }
  
  // Reinicia o quiz
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    score = 0;
    resultScreen.classList.add("hidden");
    startScreen.classList.remove("hidden");
  });
  