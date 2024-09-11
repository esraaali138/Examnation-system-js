export const regularEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const regularName = /^[a-zA-Z\s]+$/;

export function togglePasswordVisibility() {
const password = document.getElementById("password");
const showPasswordIcon = document.querySelector("#toggle-password");

showPasswordIcon.addEventListener("click", () => {
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    });
}

export function validateInputFields(inputFields, validations) {
  inputFields.forEach((input) => {
    const inputValue = input.value;
    let errorMessage = input.nextElementSibling;

    if (!errorMessage.classList.contains("error-message")) {
      errorMessage = document.createElement("p");
      errorMessage.classList.add("error-message");
      input.insertAdjacentElement("afterend", errorMessage);
    }
    errorMessage.textContent = "";

    validations(input, inputValue, errorMessage);
  });
}
