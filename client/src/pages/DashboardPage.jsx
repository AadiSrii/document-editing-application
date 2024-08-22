import React from 'react';
import DocumentList from '../components/Dashboard/DocumentList';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <h2>Your Documents</h2>
      <DocumentList />
    </div>
  );
}

export default DashboardPage;
