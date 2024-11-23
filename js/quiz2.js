const questions = [
    {
      question: "Qual abordagem terapêutica é comumente usada para ajudar a modificar padrões de pensamento que sustentam a dependência emocional?",
      options: ["Terapia psicanalítica", "Terapia cognitivo-comportamental (TCC)", "Terapia de casal", "Terapia humanista"],
      correct: 1
    },
    {
      question: "O que são os Co-Dependentes Anônimos (CoDA)?",
      options: ["Um grupo terapêutico focado em saúde física", "Um grupo de apoio para pessoas que buscam melhorar a autoestima", " Um grupo de apoio para quem lida com dependência emocional", "Um grupo para ajudar em problemas financeiros"],
      correct: 2
    },
    {
      question: "Qual é um dos benefícios principais da prática de mindfulness no tratamento da dependência emocional?",
      options: ["Aumentar a dependência dos outros","Melhorar as relações interpessoais sem focar no autoconhecimento","Evitar todos os tipos de emoções","Desenvolver uma relação mais consciente consigo mesmo"],
      correct: 3
    },
    {
      question: "Qual é a importância de desenvolver hobbies pessoais para alguém com dependência emocional?",
      options: ["Para fortalecer a autonomia emocional e melhorar o autoconhecimento"," Para afastar-se de amigos e familiares"," Para melhorar a conexão com outras pessoas","Para evitar relacionamentos amorosos"],
      correct: 0
    },
    {
      question: "Qual é a principal vantagem de ter um sistema de apoio com amigos e familiares ao lidar com a dependência emocional?",
      options: ["Evitar a independência emocional"," Proporcionar suporte sem a necessidade de dependência excessiva", "Garantir a aprovação em todas as decisões pessoais", "Substituir a ajuda terapêutica"],
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
  