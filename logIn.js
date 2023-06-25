function Login() {


  
  let username = document.getElementById('username').value;
  let password = document.getElementById('password').value;

  if (username === 'yaseen' && password === 'alam') {
    
    document.getElementById('comment').textContent = 'Login Successfully...';
    document.getElementById("comment").style.color = "green";
    
  } else {
    
    document.getElementById('comment').textContent = 'Invalid Credentials!';
    document.getElementById("comment").style.color = "red";
  }

}
