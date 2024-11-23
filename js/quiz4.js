const questions = [
  {
    question: "Como o isolamento de Teresa e Alicia, após a perda do pai, reflete a maneira como o luto pode afetar as pessoas de formas diferentes?",
    options: ["Teresa tenta ajudar Alicia, mas a filha se recusa a aceitar a ajuda.", "Alicia encontra apoio imediato em seus avós e amigos na nova cidade.", "Teresa busca ajuda profissional enquanto Alicia encontra consolo nas atividades escolares.", "Teresa e Alicia se isolam em seus quartos, cada uma lidando com a dor de maneira solitária, sem apoio mútuo."],
    correct: 3
  },
  {
    question: "Alicia se muda para uma nova cidade após a perda do pai. Como isso agrava sua sensação de solidão e sofrimento?",
    options: ["Alicia faz novos amigos rapidamente e se adapta à nova cidade, encontrando conforto em seu novo ambiente.", "A mudança para uma nova cidade aumenta a sensação de isolamento de Alicia, já que ela não tem amigos e a cidade é estranha para ela.", "Alicia sente que a mudança é positiva e começa a se sentir mais feliz, superando o luto.", "Alicia encontra consolo nos avós e logo se sente em casa na nova cidade."],
    correct: 1
  },
  {
    question: " O que a presença dos avós durante o período de luto oferece a Alicia e Teresa?",
    options: ["Os avós não têm um papel importante, pois Alicia e Teresa preferem se isolar."," Os avós culpam Alicia e Teresa pela morte do pai e dificultam o processo de cura.","Os avós proporcionam apoio emocional, oferecendo conforto e compreensão durante o luto."," Os avós tomam conta de tudo e impedem que Teresa e Alicia expressem suas emoções."],
    correct: 2
  },
  {
    question: "Como o pedido de Pedro todas as noites pelo pai e a saudade constante de sua mãe e irmã refletem o impacto emocional da perda em sua vida cotidiana?",
    options: [" Pedro não sente a falta do pai, mãe ou irmã e se adapta bem ao novo cotidiano com os avós.","Pedro lida com a perda de maneira tranquila, sem sentir a ausência de sua mãe e irmã.","Pedro se sente mais próximo de sua irmã e mãe, já que elas tentam confortá-lo durante o luto.","A saudade de Pedro pelo pai, somada à ausência emocional de sua mãe e irmã, o deixa ainda mais perdido e sem apoio, dificultando seu processo de luto."],
    correct: 2
  },
  {
    question: "Como a mudança para uma nova cidade e a exclusão de Alicia de seus antigos amigos afetam seu sentimento de solidão?",
    options: ["Alicia se adapta rapidamente à nova cidade e faz amigos facilmente, sem sentir falta dos antigos amigos."," Alicia se torna ainda mais próxima de Teresa, e as duas enfrentam o luto juntas, sem a necessidade de amigos ou apoio externo.", "A mudança para uma nova cidade e a falta de apoio dos antigos amigos agravam o sentimento de solidão de Alicia, dificultando sua capacidade de lidar com o luto.", "Alicia se aproxima rapidamente de seus novos colegas e encontra conforto nas novas amizades, superando a dor da perda."],
    correct: 2
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
  