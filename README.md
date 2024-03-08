const socket = new WebSocket('ws://localhost:3000');

// Maneja la apertura de la conexión
socket.addEventListener('open', (event) => {
  console.log('Conexión abierta');
  // Envía un mensaje al servidor
  socket.send('Hola, servidor!');
});

// Maneja los mensajes recibidos del servidor
socket.addEventListener('message', (event) => {
  console.log(`Mensaje del servidor: ${event.data}`);
});

// Maneja el cierre de la conexión
socket.addEventListener('close', (event) => {
  console.log('Conexión cerrada');
});
