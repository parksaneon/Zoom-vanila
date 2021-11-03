const messageList = document.querySelector('ul');
const messageForm = document.querySelector('form');
// 사용자의 정보를 소켓이 담는다.
// socket은 서버로의 연결은 뜻한다.
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener('open', () => {
  console.log('Connected to Browser');
});

socket.addEventListener('message', (message) => {
  console.log(message.data);
});

socket.addEventListener('close', () => {
  console.log('Disconnected from server');
});

function handleSubmit(event) {
  event.preventDefault();
  const input = messageForm.querySelector('input');
  socket.send(input.value);
  input.value = '';
}

messageForm.addEventListener('submit');
