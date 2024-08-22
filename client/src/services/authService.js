import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const login = async (credentials) => {
  const response = await axios.post(`${API_URL}/login`, credentials);
  const { token } = response.data;
  localStorage.setItem('token', token);
  return token;
};

const register = async (credentials) => {
  await axios.post(`${API_URL}/register`, credentials);
};

const authService = {
  login,
  register,
};

export default authService;
