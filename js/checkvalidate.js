function showSignupForm() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("signup-form").style.display = "block";
}

function showLoginForm() {
  document.getElementById("signup-form").style.display = "none";
  document.getElementById("login-form").style.display = "block";
}
function isValidEmail(email) {
  var emailPattern = "/^[^\s@]+@[^\s@]+\.[^\s@]+$/";
  return emailPattern.test(email);
}

function handleRegistration(email) {
  if (isValidEmail(email)) {
    alert("Đăng ký thành công!");
  } else {
    alert("Email không hợp lệ. Vui lòng nhập đúng định dạng!");
  }
}

function handleLogin(email) {
  if (isValidEmail(email)) {
    alert("Đăng nhập thành công!");
  } else {
    alert("Email không hợp lệ. Vui lòng nhập đúng định dạng!");
  }
}

function handleRegistrationSubmit() {
  var email = document.getElementById("registrationEmail").value;
  handleRegistration(email);
}

// Sử dụng hàm handleLogin để xử lý đăng nhập khi người dùng submit form đăng nhập
function handleLoginSubmit() {
  var email = document.getElementById("loginEmail").value;
  handleLogin(email);
}
