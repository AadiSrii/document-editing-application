const Document = require('../models/Document');

const getDocuments = async (req, res, next) => {
  try {
    const documents = await Document.find({ userId: req.user._id });
    res.json(documents);
  } catch (error) {
    next(error);
  }
};

const getDocumentById = async (req, res, next) => {
  try {
    const document = await Document.findById(req.params.id);
    if (!document) {
      return res.status(404).json({ message: 'Document not found' });
    }
    res.json(document);
  } catch (error) {
    next(error);
  }
};

const createDocument = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const newDocument = await Document.create({
      title,
      content,
      userId: req.user._id,
    });

    res.status(201).json(newDocument);
  } catch (error) {
    next(error);
  }
};

module.exports = { getDocuments, getDocumentById, createDocument };
