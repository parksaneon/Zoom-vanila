import http from 'http';
import WebSocket from 'ws';
import express from 'express';

const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/public', express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('home'));
app.get('/*', (req, res) => res.redirect('/'));

const handleListen = console.log('Listening on http://localhost:3000');

// http server
const server = http.createServer(app);

// websocket server
const wss = new WebSocket.Server({ server });

// 콜백함수의 socket 매개변수는 연결된 브라우저를 뜻한다.
wss.on('connection', (socket) => {
  console.log('connected to Browser');

  socket.on('close', () => {
    console.log('Disconnected from Browser');
  });

  socket.send('hello');
});

app.listen(3000, handleListen);
