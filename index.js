const submitBtn = document.getElementById("submitBtn");
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const confirmPassError = document.getElementById("confirmPassError");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    validateName() &&
    validateEmail() &&
    validatePassword() &&
    validateConfirmPassword()
  ) {
    alert("Form Submitted Successfully");
    // Optionally, reset the form here
    document.getElementById("form").reset();
    resetIcons(); // Reset the icons after form submission
  }
});

function validateName() {
  let name = document.getElementById("name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is required";
    toggleIcon(nameError, false);
    return false;
  }

  if (!name.match(/^[A-Za-z\s]+$/)) {
    // Allowing full names with spaces
    nameError.innerHTML = "Write a valid full Name";
    toggleIcon(nameError, false);
    return false;
  }

  nameError.innerHTML = "";
  toggleIcon(nameError, true);
  return true;
}

function validateEmail() {
  let email = document.getElementById("email").value;

  if (email.length === 0) {
    emailError.innerHTML = "Email is required";
    toggleIcon(emailError, false);
    return false;
  }

  if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    emailError.innerHTML = "Enter a valid Email";
    toggleIcon(emailError, false);
    return false;
  }

  emailError.innerHTML = "";
  toggleIcon(emailError, true);
  return true;
}

function validatePassword() {
  let password = document.getElementById("password").value;

  if (password.length === 0) {
    passError.innerHTML = "Password is required";
    toggleIcon(passError, false);
    return false;
  }

  if (
    !password.match(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/
    )
  ) {
    passError.innerHTML =
      "Password should contain 1 Uppercase, 1 Lowercase, 1 Digit, and 1 Special Character";
    toggleIcon(passError, false);
    return false;
  }

  passError.innerHTML = "";
  toggleIcon(passError, true);
  return true;
}

function validateConfirmPassword() {
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirmPassword").value;

  if (confirmPassword.length === 0) {
    confirmPassError.innerHTML = "Confirm Password is required";
    toggleIcon(confirmPassError, false);
    return false;
  }

  if (confirmPassword !== password) {
    confirmPassError.innerHTML = "Passwords do not match";
    toggleIcon(confirmPassError, false);
    return false;
  }

  confirmPassError.innerHTML = "";
  toggleIcon(confirmPassError, true);
  return true;
}

function toggleIcon(errorElement, isValid) {
  let icon = errorElement.previousElementSibling;
  if (isValid) {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-check");
  } else {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-xmark");
  }
}

function resetIcons() {
  let icons = document.querySelectorAll(".fas");
  icons.forEach((icon) => {
    icon.classList.remove("fa-check", "fa-xmark");
  });
}
