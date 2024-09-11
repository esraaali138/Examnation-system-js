const marked = [];
///
function MarkedQuestion() {
  const flag = document.querySelector(".flag");
  flag.addEventListener("click", function () {
    // console.log(questions[index].question);

    if (!marked.includes(questions[index].question)) {
      marked.push(questions[index].question);
      const questionMark = document.createElement("button");
      ////////////
      const removeMark = document.createElement("button");
      removeMark.textContent = "Delete";
      document.querySelector(".div_marks").append(questionMark);
      document.querySelector(".div_marks").append(removeMark);
      removeMark.setAttribute("class", "removeMark");
      removeMark.setAttribute("id", index);

      ////////////////////////////////////
      questionMark.setAttribute("class", "MarkedQuestion");
      questionMark.innerHTML += ` Question ${`<span>${index + 1} </span>`}`; // to write quesion 1|2|3|
      questionMark.setAttribute("id", index); // set attru to id current

      /////////////
      questionMark.addEventListener("click", function () {
        index = parseInt(this.id); // the id that i set it to the equal the current
        displayQuestionAndAnswers(); //call the fuction that display the questions and answers
        document.querySelector(".active").innerHTML = +index + 1; /// set the button current when marked the curren question
        /////////////////////
      });
      removeMark.addEventListener("click", function (e) {
        marked[e.target.id] = "";

        questionMark.remove();
        removeMark.remove();
      });
    }
  });
}
MarkedQuestion();

