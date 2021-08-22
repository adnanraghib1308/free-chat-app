const username = document.getElementById('name');
const password = document.getElementById('password');

const socket = io();

const signup = () => {
  socket.emit('login', {username: username.value, password: password.value})
}