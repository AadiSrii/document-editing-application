import socketService from '../services/socketService';
import { io } from 'socket.io-client';

jest.mock('socket.io-client');

describe('SocketService', () => {
  it('should connect to socket and join document room', () => {
    const socket = { emit: jest.fn() };
    io.mockReturnValue(socket);

    const documentId = 'doc_id';
    const result = socketService.connect(documentId);

    expect(result).toBe(socket);
    expect(socket.emit).toHaveBeenCalledWith('join-document', documentId);
  });

  it('should update document via socket', () => {
    const socket = { emit: jest.fn() };
    socketService.updateDocument('doc_id', 'new content');

    expect(socket.emit).toHaveBeenCalledWith('update-document', { documentId: 'doc_id', content: 'new content' });
  });
});
