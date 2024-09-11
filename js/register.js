import { togglePasswordVisibility, validateInputFields  , regularEmail , regularName} from "./form.utils.js";

const Name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const inputField = document.querySelectorAll(".input");
const createAccountInput = document.querySelector('[value="Create account"]');
const loginInput = document.querySelector('[value="Sign In"]');


createAccountInput.addEventListener('click' ,(e)=>{
e.preventDefault();
validateInputFields(inputField , (input , inputValue , errorMessage)=>{
  if (inputValue === "") {
    errorMessage.textContent = "This field is required";
    input.style.border = "1px solid red";
  } else {
    input.style.border = "1px solid #87a9c1";

    if (input.id === "name" && !regularName.test(inputValue)) {
      errorMessage.textContent = "Please enter Only Characters";
      input.style.border = "1px solid red";
    }

    if (input.id === "email" && !regularEmail.test(inputValue)) {
      errorMessage.textContent = "Please enter valid email";
      input.style.border = "1px solid red";
    }

    if (input.id === "password" && password.value.length < 8) {
      errorMessage.textContent =
        "Password should be at least 8 characters long";
      input.style.border = "1px solid red";
    }
    if (
      input.id === "confirmPassword" &&
      password.value !== confirmPassword.value
    ) {
      errorMessage.textContent = "Passwords do not match.";
      input.style.border = "1px solid red";
    }

    if (errorMessage.textContent === "") errorMessage.remove();
    redirectToLogin();

  }
})
})
togglePasswordVisibility()


function redirectToLogin() {
  if (
    regularName.test(Name.value) &&
    regularEmail.test(email.value) &&
    password.value.length >= 8 &&
    password.value === confirmPassword.value
  ) {
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem('fullName' , Name.value)
    location.replace("login.html");
  }
}

loginInput.addEventListener("click", (e) => {
  e.preventDefault();
  location.replace("login.html");
});
