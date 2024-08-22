import axios from 'axios';

const API_URL = 'http://localhost:5000/api/documents';

const getDocuments = async () => {
  const response = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

const getDocumentById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  });
  return response.data;
};

const documentService = {
  getDocuments,
  getDocumentById,
};

export default documentService;
