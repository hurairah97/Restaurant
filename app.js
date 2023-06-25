var users = [];

// Sign Up

function signup(){
    
  var name = document.querySelector("#signupName").value;
  var email = document.querySelector("#signupEmail").value;
  var password = document.querySelector("#signupPass").value;
  var date = document.querySelector("#signupDate").value;
  if( users.push({ name: name, email: email, password: password, date: date }))
  {
    localStorage.setItem("LOGIN", JSON.stringify(users));
  alert("Sign up successful!");
  window.location.href = "login.html"; 
  }
  else{
    alert("Not inserted in array")
  }
};

//Login
function login(){
  
  var email = document.querySelector("#loginEmail").value;
  var password = document.querySelector("#loginPass").value;
  var data =  JSON.parse(localStorage.getItem("LOGIN") || "[]");
    
  if(data[0]?.email == email && data[0]?.password == password)
  {
    alert("Login successful!");
    window.location.href = "restaurant.html"; 
  }
  else
  {
    alert("Invalid email or password")
  }

};

var data =  JSON.parse(localStorage.getItem("LOGIN") || "[]");
//Array Data
var Arrayname = data[0]?.name;
var Arrayemail = data[0]?.email;
var Arraypass = data[0]?.password;
var Arraydate = data[0]?.date;
//Html Data
var Uname = document.querySelector('#name');
var Uemail = document.querySelector('#email');
var Upass = document.querySelector('#password');
var Udate = document.querySelector('#date');

Uname.innerHTML = Arrayname;
Uemail.innerHTML = Arrayemail;
Upass.innerHTML = Arraypass;
Udate.innerHTML = Arraydate;

// var nav = document.querySelector("#nav");

// if(data[0]?.email != null)
// {
// //Pic + username
// nav.innerHTML = `<img src="./images/logo.jpg" alt="" style="height: 50px;" class="image">
// <a href="profile.html"><h3>${Arrayname}</h3></a>`;
// }
// else
// {
// //Signup/login
// nav.innerHTML = `<img src="./images/icon.png" alt="" class="image">
// <a href="login.html"><h3>Log In</h3></a>`;
// }

