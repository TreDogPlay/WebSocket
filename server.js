const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 3000 });

server.on('connection', (socket) => {
  console.log('Cliente conectado');

  // Envía un mensaje al cliente cuando se establece la conexión
  socket.send('¡Conexión establecida!');

  // Maneja los mensajes recibidos desde el cliente
  socket.on('message', (message) => {
    console.log(`Mensaje recibido: ${message}`);

    // Envía el mensaje de vuelta al cliente
    socket.send(`Servidor: Recibí tu mensaje: ${message}`);
  });

  // Maneja la desconexión del cliente
  socket.on('close', () => {
    console.log('Cliente desconectado');
  });
});