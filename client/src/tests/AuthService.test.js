import authService from '../services/authService';
import axios from 'axios';

jest.mock('axios');

describe('AuthService', () => {
  it('should call login API and return token', async () => {
    const token = 'sample_token';
    axios.post.mockResolvedValue({ data: { token } });

    const result = await authService.login({ email: 'test@example.com', password: 'password' });

    expect(result).toBe(token);
    expect(localStorage.getItem('token')).toBe(token);
  });

  it('should call register API', async () => {
    axios.post.mockResolvedValue({});

    await authService.register({ email: 'test@example.com', password: 'password' });

    expect(axios.post).toHaveBeenCalledWith('http://localhost:5000/api/auth/register', {
      email: 'test@example.com',
      password: 'password',
    });
  });
});
