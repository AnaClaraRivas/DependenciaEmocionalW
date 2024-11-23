const questions = [
    {
      question: "Qual é a principal diferença entre amor e dependência emocional?",
      options: ["O amor é baseado na dependência emocional.", "O amor é egoísta, enquanto a dependência emocional é generosa.", "O amor envolve entregar-se de forma plena, sem esperar algo em troca, enquanto a dependência emocional é baseada em ego e necessidade.", "O amor depende do outro para a felicidade, mas a dependência emocional não."],
      correct: 2
    },
    {
      question: "O que significa 'ver o parceiro como metade de si mesmo' em um relacionamento?",
      options: ["Significa amar o outro de forma saudável.", "Indica um relacionamento problemático e sinaliza dependência emocional.", "Reflete um amor verdadeiro e sem egoísmo.", "Demonstra uma relação equilibrada e independente."],
      correct: 1
    },
    {
      question: "O que ocorre quando uma pessoa coloca nas mãos do parceiro a responsabilidade pela sua felicidade?",
      options: ["Isso fortalece o relacionamento de maneira saudável.","A pessoa se torna mais independente e feliz.","Isso é uma prática comum em relações de amor verdadeiro.","Isso pode ser prejudicial tanto para a pessoa quanto para o parceiro."],
      correct: 3
    },
    {
      question: "O que significa ser 'um indivíduo completo' em um relacionamento?",
      options: ["Significa que a pessoa não precisa de ninguém para ser feliz e pode compartilhar a vida de forma saudável com o parceiro.","Significa que a pessoa vive sozinha e não se envolve emocionalmente com ninguém.","Significa que a pessoa depende do parceiro para se sentir inteira.","Significa que a pessoa busca controlar o parceiro para se sentir segura."],
      correct: 0
    },
    {
      question: "Qual é a ideia central sobre a pessoa que depende emocionalmente do parceiro?",
      options: ["A pessoa sente que pode viver sem o parceiro."," A pessoa se sente mais segura e feliz.", "A pessoa acredita que só será feliz ou conseguirá sobreviver se o outro estiver ao seu lado.", " A pessoa está em um relacionamento equilibrado e saudável."],
      correct: 0
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
  