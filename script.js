function addBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "0px 0px 5px 1.5px rgba(0, 0, 0, 0.2)";
}

function removeBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "";
}

const togglePassword = document.querySelector('#togglePassword');
const password = document.querySelector('#passwordField');

togglePassword.addEventListener('click', function (e) {
  // toggle the type attribute
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle the eye slash icon
  this.classList.toggle('fa-eye-slash');
});