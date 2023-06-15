
const quizQuestions = [
    {
      question: "Which country won FIFA world cup 2022?",
      options: ["Argentina", "Germany", "Portgual", "France"],
      correctAnswer: "Argentina"
    },
    {
      question: "Which team won IPL 2023?",
      options: ["MI", "GT", "RCB", "CSK"],
      correctAnswer: "CSK"
    },
    {
      question: "Who is class topper ?",
      options: ["Rahi", "Jatin", "Aryan", "No one"],
      correctAnswer: "Aryan"
    },
    {
      question: "Who painted the Mona Lisa?",
      options: ["Pablo Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Michelangelo"],
      correctAnswer: "Leonardo da Vinci"
    },
    {
      question: "Which is best Indian movie?",
      options: ["KGF 2", "WAR", "RRR", "ROAR"],
      correctAnswer: "KGF 2"
    }
    {
        question: "Which movie won best documentary award in Oscar 2023?",
        options: ["Whale", "Elephant Wispher", "Doom", "Into the sky"],
        correctAnswer: "Elephant wispher"
      },
      {
        question: "Who wrote the play 'Romeo and Juliet'?",
        options: ["William Shakespeare", "George Bernard Shaw", "Arthur Miller", "Oscar Wilde"],
        correctAnswer: "William Shakespeare"
      },
      {
        question: "Which player won most of Grand Slam in Tennis?",
        options: ["Roger Federer", "Ken Rosewall", "Rafael Nadal", "Novak Djokovic"],
        correctAnswer: "Novak Djokovic"
      },
      {
        question: "Which is most popular mobile game in world?",
        options: ["FREEFIRE", "PUBG", "BGMI", "ON BED"],
        correctAnswer: "PUBG"
      }
  ];
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 30;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
    questionText.innerHTML = currentQuestion.question;
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
      document.getElementById("timer").textContent = timeLeft;
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  function endQuiz() {
    clearInterval(timerInterval);
    const scorePercentage = (score / quizQuestions.length) * 100;
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  document.getElementById("start-button").addEventListener("click", startQuiz);