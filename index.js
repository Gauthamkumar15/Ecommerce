let userArray = localStorage.getItem("users");
console.log(userArray);

if(userArray !== undefined){
  userArray = JSON.parse(userArray);
  console.log(userArray);
}
else{
  userArray = [];
}

let userName = document.getElementById("username");
let password = document.getElementById("password");

function onLoginClicked(event){
  event.preventDefault();
  userArray.push({
    userName : userName.value,
    password : password.value
  });
  localStorage.setItem("users",JSON.stringify(userArray));
}



