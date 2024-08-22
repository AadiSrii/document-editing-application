import { io } from 'socket.io-client';

const SOCKET_URL = 'http://localhost:5000';
let socket;

const connect = (documentId) => {
  socket = io(SOCKET_URL);
  socket.emit('join-document', documentId);

  return socket;
};

const updateDocument = (documentId, content) => {
  socket.emit('update-document', { documentId, content });
};

const socketService = {
  connect,
  updateDocument,
};

export default socketService;
