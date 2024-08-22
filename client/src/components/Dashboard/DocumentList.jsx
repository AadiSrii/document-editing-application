import React, { useState, useEffect } from 'react';
import documentService from '../../services/documentService';
import DocumentItem from './DocumentItem';

function DocumentList() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const fetchedDocuments = await documentService.getDocuments();
        setDocuments(fetchedDocuments);
      } catch (error) {
        console.error('Failed to fetch documents', error);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div>
      {documents.map((doc) => (
        <DocumentItem key={doc._id} document={doc} />
      ))}
    </div>
  );
}

export default DocumentList;
