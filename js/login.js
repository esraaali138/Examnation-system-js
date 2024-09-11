import { togglePasswordVisibility, validateInputFields } from "./form.utils.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const getPassword = localStorage.getItem("password");
const getEmail = localStorage.getItem("email");
const loginInput = document.querySelector('[value="Sign In"]');
const createAccountInput = document.querySelector('[value="Create account"]');
const inputField = document.querySelectorAll(".input");


loginInput.addEventListener("click", function (e) {
  e.preventDefault();
 
  validateInputFields(inputField , (input , inputValue , errorMessage)=>{
    if (inputValue === "") {
      errorMessage.textContent = "This field is required";
      input.style.border = "1px solid red";
    } else {
      input.style.border = "1px solid #87a9c1";

      if (getEmail === email.value && getPassword === password.value) {
        location.replace("startExam.html");
      } else {
        errorMessage.textContent = "your data does not match ";
      }
      if (errorMessage.textContent === "") errorMessage.remove();
    }
  })
});
togglePasswordVisibility()


createAccountInput.addEventListener("click", (e) => {
  e.preventDefault();
  location.replace("index.html");
});
