# Collaborative Document Editing Application

## Overview

This is a real-time collaborative document editing application that allows multiple users to create, edit, and collaborate on documents simultaneously. The application features user authentication, a dashboard for managing documents, a rich text editor, document versioning, and a comment system.

## Features

- User Authentication
  - Register and log in with secure password storage using JWT.
- Dashboard
  - View and manage documents, including creating, renaming, and deleting them.
- Document Editor
  - Real-time collaborative editing with multiple users.
  - Rich text editing using Quill.js.
  - View active collaborators and their cursors.
- Document Versioning
  - View version history and revert to previous versions.
- Comments & Suggestions
  - Add comments on specific document sections.
  - Suggest changes and accept/reject them.
- Notifications
  - Real-time notifications for document changes and comments.

## Technologies Used

- **Frontend**: React, Vite, React Router, Axios, Socket.io, React Quill
- **Backend**: Node.js, Express, MongoDB, Mongoose, JWT, Socket.io
- **Development Tools**: Nodemon, Morgan, CORS

## Installation

### Prerequisites

- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)

### Clone the Repository

```bash
git clone https://github.com/your-username/document-editing-application.git
cd collaborative-docs-app

cd server
npm install

**.env**
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret

npm run dev



