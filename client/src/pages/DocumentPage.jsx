import React from 'react';
import { useParams } from 'react-router-dom';
import DocumentEditor from '../components/Editor/DocumentEditor';

function DocumentPage() {
  const { id } = useParams();

  return (
    <div className="document-page">
      <DocumentEditor documentId={id} />
    </div>
  );
}

export default DocumentPage;
