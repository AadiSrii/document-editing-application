import React from 'react';
import { Link } from 'react-router-dom';

function DocumentItem({ document }) {
  return (
    <div className="document-item">
      <h3>{document.title}</h3>
      <p>Last modified: {new Date(document.updatedAt).toLocaleString()}</p>
      <Link to={`/document/${document._id}`}>Open</Link>
    </div>
  );
}

export default DocumentItem;
