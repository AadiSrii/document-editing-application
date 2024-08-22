import documentService from '../services/documentService';
import axios from 'axios';

jest.mock('axios');

describe('DocumentService', () => {
  it('should fetch documents', async () => {
    const documents = [{ title: 'Doc1', content: 'Content1' }];
    axios.get.mockResolvedValue({ data: documents });

    const result = await documentService.getDocuments();

    expect(result).toBe(documents);
  });

  it('should fetch document by ID', async () => {
    const document = { title: 'Doc1', content: 'Content1' };
    axios.get.mockResolvedValue({ data: document });

    const result = await documentService.getDocumentById('doc_id');

    expect(result).toBe(document);
  });
});
