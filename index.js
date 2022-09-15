let users = [];
let userName = document.getElementById("username").value;
let password = document.getElementById("password").value;

function onLoginClicked(event) {
  event.preventDefault();
  if (userName.value !== undefined && password.value !== undefined) {
    userArray.push({
      userName: userName.value,
      password: password.value,
    });
    localStorage.setItem("users", JSON.stringify(userArray));
  } else if (userName.value === undefined) {
    userName.textContent = "Enter Username";
  } else if (password.value === undefined) {
    password.textContent = "Enter Password";
  } else if (userName.value === undefined && password.value === undefined) {
    userName.textContent = "Enter Username";
    password.textContent = "Enter Password";
  } else {
    userName.textContent = "";
    password.textContent = "";
  }
}
