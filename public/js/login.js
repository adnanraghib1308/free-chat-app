const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');

const socket = io();

const signup = () => {
  socket.emit('login', {username: username.value, email: email.value, password: password.value})
}