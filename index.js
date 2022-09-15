let users = [];
let userName = document.getElementById("username").value;
let password = document.getElementById("password").value;


function onLoginClicked(){
  let userCredentials = {
    userName : userName,
    password : password
  };
  users.push(userCredentials);
  console.log(users);
}
