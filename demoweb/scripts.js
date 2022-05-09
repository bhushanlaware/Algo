document.getElementById("login").addEventListener("click", check);

function check() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  alert(email + " " + password);
}