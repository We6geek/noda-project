// particles
particlesJS.load('particles', './js/particles-config.json')
// particles
// form
function openForm() {
    document.getElementById("wrapper").style.display = "block";
}
function closeForm() {
    document.getElementById("wrapper").style.display = "none";
}
// form
const loginText = document.querySelector(".title-text .login");
      const loginForm = document.querySelector("form.login");
      const loginBtn = document.querySelector("label.login");
      const signupBtn = document.querySelector("label.signup");
      const signupLink = document.querySelector("form .signup-link a");
      signupBtn.onclick = (()=>{
        loginForm.style.marginLeft = "-50%";
        loginText.style.marginLeft = "-50%";
      });
      loginBtn.onclick = (()=>{
        loginForm.style.marginLeft = "0%";
        loginText.style.marginLeft = "0%";
      });
      signupLink.onclick = (()=>{
        signupBtn.click();
        return false;
      });
// form
function subLogin() {
        window.location.href = 'main.html';
};
// confirm pass
function validate_password() {
 
  var pass = document.getElementById('pass').value;
  var confirm_pass = document.getElementById('confirm_pass').value;
  if (pass != confirm_pass) {
      document.getElementById('wrong_pass_alert').style.color = 'red';
      document.getElementById('wrong_pass_alert').innerHTML
        = 'Use same password';
      document.getElementById('create').disabled = true;
      document.getElementById('create').style.opacity = (0.5);
  } else {
      document.getElementById('wrong_pass_alert').style.color = 'green';
      document.getElementById('wrong_pass_alert').innerHTML =
          'Password Matched';
      document.getElementById('create').disabled = false;
      document.getElementById('create').style.opacity = (1);
  }
}
