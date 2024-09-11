const startButton = document.querySelector(".start-button");
if (startButton) {
  startButton.addEventListener("click", () => {
    location.replace("quiz.html");
  });
}


const cateGoryName = document.querySelectorAll(".categories div");

cateGoryName.forEach((category) => {
  category.addEventListener("click", () => {
    let selectedCategory;

    if (category.id === "html") {
      selectedCategory = "htmlQuestions";
    } else if (category.id === "css") {
      selectedCategory = "cssQuestions";
    } else if (category.id === "js") {
      selectedCategory = "jsQuestions";
    } else if (category.id === "react") {
      selectedCategory = "reactQuestions";
    }

    sessionStorage.setItem("selectedCategory", selectedCategory);
    location.href = "questions.html";
  });
});

