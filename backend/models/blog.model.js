const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  username: { type: String, required: true },
  blogTitle: { type: String, required: true },
  mainContent: { type: String, required: true },
  category: {type: String, required: true},
  language: {type: String, required: true},
  date: { type: Date, required: true },
  featured: { type: Boolean, required: true }
}, {
  timestamps: true,
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;