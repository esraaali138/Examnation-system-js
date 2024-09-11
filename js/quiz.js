class Questions {
  constructor(question, answers = []) {
    this.question = question;
    this.answers = answers;
  }
}
class Answers {
  constructor(text, Correct = false) {
    this.text = text;
    this.Correct = Correct;
  }
}
const htmlQuestions = [
  new Questions("What does HTML stand for?", [
    new Answers("Hyper Text Markup Language", true),
    new Answers("Hyperlinks and Text Markup Language"),
    new Answers("Home Tool Markup Language"),
    new Answers("Hyper Tool Markup Language"),
  ]),
  new Questions("Which HTML tag is used to define an internal style sheet?", [
    new Answers("style", true),
    new Answers("script"),
    new Answers("link"),
    new Answers("meta"),
  ]),
  new Questions(
    "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
    [
      new Answers("alt", true),
      new Answers("src"),
      new Answers("title"),
      new Answers("href"),
    ]
  ),
  new Questions(
    "What is the correct HTML element for inserting a line break?",
    [
      new Answers("br", true),
      new Answers("break"),
      new Answers("lb"),
      new Answers("linebreak"),
    ]
  ),
  new Questions("How can you make a numbered list in HTML?", [
    new Answers("ul"),
    new Answers("ol", true),
    new Answers("list"),
    new Answers("dl"),
  ]),
];

const cssQuestions = [
  new Questions("What does CSS stand for?", [
    new Answers("Cascading Style Sheets", true),
    new Answers("Computer Style Sheets"),
    new Answers("Creative Style Sheets"),
    new Answers("Colorful Style Sheets"),
  ]),
  new Questions("Which property is used to change the font of an element?", [
    new Answers("font-family", true),
    new Answers("font-style"),
    new Answers("text-style"),
    new Answers("font-weight"),
  ]),
  new Questions(
    "How do you apply a CSS style to a specific element with a class?",
    [
      new Answers(".classname { property: value; }", true),
      new Answers("#classname { property: value; }"),
      new Answers("classname { property: value; }"),
      new Answers("element.classname { property: value; }"),
    ]
  ),
  new Questions(
    "Which property is used to control the spacing between lines of text?",
    [
      new Answers("line-height", true),
      new Answers("letter-spacing"),
      new Answers("text-spacing"),
      new Answers("word-spacing"),
    ]
  ),
  new Questions("How can you make a text bold in CSS?", [
    new Answers("font-weight: bold;", true),
    new Answers("font-style: bold;"),
    new Answers("text-transform: bold;"),
    new Answers("font-size: bold;"),
  ]),
];

const jsQuestions = [
  new Questions(
    "Which method is used to add an element to the end of an array in JavaScript?",
    [
      new Answers("push()", true),
      new Answers("pop()"),
      new Answers("shift()"),
      new Answers("unshift()"),
    ]
  ),
  new Questions("How do you declare a variable in JavaScript?", [
    new Answers("var variableName;", true),
    new Answers("variableName = ;"),
    new Answers("declare variableName;"),
    new Answers("set variableName;"),
  ]),
  new Questions("Which event occurs when the user clicks on an HTML element?", [
    new Answers("click", true),
    new Answers("hover"),
    new Answers("focus"),
    new Answers("change"),
  ]),
  new Questions("What is the output of `console.log(2 + '2')` in JavaScript?", [
    new Answers("'22'", true),
    new Answers("'4'"),
    new Answers("4"),
    new Answers("Error"),
  ]),
  new Questions("How do you define a function in JavaScript?", [
    new Answers("function myFunction() {}", true),
    new Answers("def myFunction() {}"),
    new Answers("func myFunction() {}"),
    new Answers("function: myFunction() {}"),
  ]),
];

const reactQuestions = [
  new Questions("What is the primary function of React?", [
    new Answers("To build user interfaces", true),
    new Answers("To handle server-side logic"),
    new Answers("To create databases"),
    new Answers("To manage HTTP requests"),
  ]),
  new Questions("How do you create a React component?", [
    new Answers("function MyComponent() {}", true),
    new Answers("createComponent MyComponent() {}"),
    new Answers("component MyComponent() {}"),
    new Answers("class MyComponent {}"),
  ]),
  new Questions("What is JSX in React?", [
    new Answers("A syntax extension for JavaScript", true),
    new Answers("A new JavaScript library"),
    new Answers("A database technology"),
    new Answers("A server-side framework"),
  ]),
  new Questions(
    "How do you pass data from a parent component to a child component in React?",
    [
      new Answers("Using props", true),
      new Answers("Using state"),
      new Answers("Using context"),
      new Answers("Using reducers"),
    ]
  ),
  new Questions(
    "Which hook is used to manage state in functional components?",
    [
      new Answers("useState()", true),
      new Answers("useEffect()"),
      new Answers("useContext()"),
      new Answers("useReducer()"),
    ]
  ),
];

let index = 0;
let currentQuestions = [];
let counter = 0;

const next = document.querySelector("#next");
const prev = document.querySelector("#prev");

function displayQuestionAndAnswers(questions) {
  const countQuestion = ["A", "B", "C", "D"];
  const answersContainer = document.getElementById("answersContainer");
  const questionElement = document.getElementById("questions");
  const questionCountElement = document.querySelector(".question-count");

  answersContainer.innerHTML = "";
  const question = questions[index];
  questionElement.textContent = question.question;

  question.answers.forEach((answer, i) => {
    const answerDivs = document.createElement("div");
    answerDivs.innerHTML = `
      <p class='char'>${countQuestion[i]}</p>
      <h2>${answer.text}</h2>
    `;
    answersContainer.appendChild(answerDivs);

    answerDivs.addEventListener("click", () => {
      document.querySelectorAll("#answersContainer div").forEach((selected) => {
        selected.classList.remove("selected");
        selected.children[0].classList.remove("active");
      });

      answerDivs.classList.add("selected");
      answerDivs.children[0].classList.add("active");

      if (question.answers[i].Correct) {
        counter++;
        localStorage.setItem("counter", counter);
      }
    });
  });

  questionCountElement.textContent = `Question ${index + 1} of ${
    questions.length
  }`;
  prev.disabled = index === 0;
  next.disabled = index === questions.length - 1;
}

const selectedCategory = sessionStorage.getItem("selectedCategory");

switch (selectedCategory) {
  case "htmlQuestions":
    currentQuestions = htmlQuestions;
    break;
  case "cssQuestions":
    currentQuestions = cssQuestions;
    break;
  case "jsQuestions":
    currentQuestions = jsQuestions;
    break;
  case "reactQuestions":
    currentQuestions = reactQuestions;
    break;
}

if (currentQuestions.length > 0) displayQuestionAndAnswers(currentQuestions);

next.addEventListener("click", () => {
  if (index < currentQuestions.length - 1) {
    index++;
    displayQuestionAndAnswers(currentQuestions);
  }
});
prev.addEventListener("click", () => {
  if (index > 0) {
    index--;
    displayQuestionAndAnswers(currentQuestions);
  }
});

const submitButton = document.querySelector("button[type='submit']");
submitButton.addEventListener("click", () => {
  updateCounter();
  location.replace("result.html");

});

