// Check if logged in
if (!sessionStorage.getItem('loggedIn')) {
  window.location.href = 'login.html';
}

function logout() {
  sessionStorage.removeItem('loggedIn');
  window.location.href = 'login.html';
}
