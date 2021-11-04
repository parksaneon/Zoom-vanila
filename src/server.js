import http from 'http';
import SocketIO from 'socket.io';
// import WebSocket from 'ws';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = console.log('Listening on http://localhost:3000');

// http server
const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

// websocket server
// const wss = new WebSocket.Server({ server });

// const sockets = [];
// // 콜백함수의 socket 매개변수는 연결된 브라우저를 뜻한다.
// wss.on('connection', (socket) => {
//   sockets.push(socket);
//   socket['nickname'] = 'Anon';
//   console.log('connected to Browser');

//   socket.on('close', () => {
//     console.log('Disconnected from Browser');
//   });

//   socket.on('message', (msg) => {
//     const [type, payload] = JSON.parse(msg);
//     switch (type) {
//       case 'new_message':
//         sockets.forEach((aSocket) => aSocket.send(`${socket.nickname} : ${payload}`));
//       case 'nickname':
//         socket['nickname'] = payload;
//     }
//   });
//   socket.send('hello');
// });

app.listen(3000, handleListen);
