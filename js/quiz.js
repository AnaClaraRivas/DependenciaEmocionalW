const questions = [
    {
      question: "O que caracteriza uma pessoa com dependência emocional?",
      options: ["Capacidade de se isolar facilmente", "Necessidade excessiva de aprovação dos outros", "Habilidade para resolver problemas sozinha", "Desinteresse por relações interpessoais"],
      correct: 1
    },
    {
      question: "Qual é uma das consequências mais comuns de uma dependência emocional não tratada?",
      options: ["Melhora na comunicação interpessoal", "Aumento da autoestima", "Independência financeira", "Dificuldade em tomar decisões sem a ajuda de outras pessoas"],
      correct: 3
    },
    {
      question: "Qual é um comportamento típico de uma pessoa emocionalmente dependente em um relacionamento?",
      options: ["Manter uma boa comunicação e autonomia","Manter-se distante para evitar conflitos","Colocar as necessidades do parceiro acima das próprias","Buscar apoio em diversas fontes para resolver questões pessoais"],
      correct: 2
    },
    {
      question: "Como a terapia pode ajudar uma pessoa com dependência emocional?",
      options: ["Ajudando a evitar relações interpessoais","Incentivando a independência emocional e a autoestima","Tornando-a mais dependente de outras pessoas","Ignorando os problemas emocionais para não gerar conflitos"],
      correct: 2
    },
    {
      question: "O que é importante para o tratamento da dependência emocional?",
      options: ["Aprender a estabelecer limites e valorizar a própria identidade","Manter um relacionamento sem conflitos", "Isolar-se para evitar novos relacionamentos", " Depender sempre do apoio de um parceiro"],
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
  