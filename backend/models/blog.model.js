const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  username: { type: String, required: true },
  blogTitle: { type: String, required: true },
  mainContent: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  category: {type: String, required: true},
  languange: {type: String, required: true}
}, {
  timestamps: true,
});

const BlogPost = mongoose.model('BlogPost', blogSchema);

module.exports = BlogPost;