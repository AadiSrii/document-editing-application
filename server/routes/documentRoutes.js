const express = require('express');
const { getDocuments, createDocument } = require('../controllers/documentController'); // Ensure paths are correct

const router = express.Router();

router.get('/', getDocuments);
router.post('/', createDocument);

module.exports = router;
