// eslint-disable-next-line @typescript-eslint/no-var-requires
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

let users = [];
const sendMessage = (message) => {
  console.log('sending message to all users', message);
  users.forEach((user) => {
    user.ws.send(JSON.stringify(message));
  });
};

wss.on('connection', function connection(ws) {
  const userRef = { ws };
  users.push(userRef);
  ws.on('error', console.error);

  ws.on('message', function message(data) {
    const json = JSON.parse(data);
    const body = {
      ...json,
      timestamp: new Date().getTime(),
    };
    sendMessage(body);
  });

  ws.on('close', (code, reason) => {
    users = users.filter((user) => user !== userRef);
    console.log(`Connection closed: ${code} ${reason}!`);
  });
});
