document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "b3wLAxKSFiXvo34cpBoXI8FU0XM4ZeC4TjGfy2Yy";
  const startBtn = document.getElementById("start-btn");
  const questionBox = document.getElementById("question-box");
  const question = document.getElementById("question");
  const options = document.getElementById("options");
  const resultBox = document.getElementById("result-box");
  const scoreBox = document.getElementById("score");
  let score = 0;
  let totalQuestion = 0;

  startBtn.addEventListener("click", async () => {
    startBtn.classList.add("hidden");
    questionBox.classList.remove("hidden");
    const questionData = await fetchQustion();
    const response = await questionData.json();
    console.log(response);
    displayQuestion(response);
  });

  async function nextQuestion() {
    options.innerHTML = "";
    if (totalQuestion < 5) {
      const questionData = await fetchQustion();
      const response = await questionData.json();
      displayQuestion(response);
    } else {
      displayResult();
    }
  }

  const fetchQustion = async () => {
    try {
      const data = await fetch(
        `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}&category=react&difficulty=Hard&limit=1&tags=React`
      );
      return data;
    } catch (error) {
      console.error("Network or Fetch Error:", error);
      return null;
    }
  };
  const displayQuestion = (data) => {
    options.innerHTML = "";
    if (!data || data.length === 0) {
      question.textContent =
        "No questions available or API rate limit exceeded.";
      return;
    }
    question.textContent = data[0].question;
    let answers = data[0].answers;
    let correct_answers = data[0].correct_answers;
    correct_answers = Object.values(correct_answers);
    answers = Object.values(answers);

    answers.forEach((element, index) => {
      if (element !== null) {
        const li = document.createElement("li");
        li.innerHTML = `<button data-id="${index}">${element}</button>`;
        options.appendChild(li);
      }
    });
    options.addEventListener("click", (e) => {
      e.stopPropagation();
      if (e.target.tagName === "BUTTON") {
        const answerid = parseInt(e.target.getAttribute("data-id"));
        correct_answers.forEach((element, index) => {
          if (index === answerid && element === "true") {
            score++;
            console.log(score);
          }
        });
        totalQuestion++;
        nextQuestion();
      }
    });
  };

  const displayResult = () => {
    questionBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreBox.innerHTML = `The score is : ${score}/${totalQuestion}`;
  };
});
