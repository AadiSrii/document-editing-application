import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Quill } from 'react-quill'; // Import Quill.js or Draft.js as per your preference
import socketService from '../../services/socketService';
import documentService from '../../services/documentService';
import 'react-quill/dist/quill.snow.css';

function DocumentEditor() {
  const { id } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const fetchedDocument = await documentService.getDocumentById(id);
        setContent(fetchedDocument.content);
      } catch (error) {
        console.error('Failed to fetch document', error);
      }
    };

    fetchDocument();

    const socket = socketService.connect(id);
    socket.on('document-update', (newContent) => {
      setContent(newContent);
    });

    return () => {
      socket.disconnect();
    };
  }, [id]);

  const handleContentChange = (value) => {
    setContent(value);
    socketService.updateDocument(id, value);
  };

  return (
    <div className="document-editor">
      <Quill value={content} onChange={handleContentChange} />
    </div>
  );
}

export default DocumentEditor;
