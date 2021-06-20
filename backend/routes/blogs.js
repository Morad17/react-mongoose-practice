const router = require('express').Router();
let Blog = require('../models/blog.model');

/*------Gets All Blog Posts------*/
router.route('/').get((req, res) => {
  Blog.find()
    .then(blogs => res.json(blogs))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*------Add a Blog Posts------*/
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const blogTitle = req.body.blogTitle;
  const mainContent = req.body.mainContent;
  const blogType = req.body.blogType;
  const category = req.body.category;
  const date = Date.parse(req.body.date);
  const featured = req.body.featured;

  const newBlog = new Blog({
    username,
    blogTitle,
    mainContent,
    blogType,
    category,
    date,
    featured,
  });

  newBlog.save()
  .then(() => res.json('Blog posted!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/*------Gets a particular Blog Posts------*/
router.route('/:id').get((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => res.json(blog))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*------Delete a Blog Posts------*/
router.route('/:id').delete((req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog Post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*------Update a Blog Posts------*/
router.route('/update/:id').post((req, res) => {
  Blog.findById(req.params.id)
    .then(blog => {
      blog.username = req.body.username;
      blog.blogTitle = req.body.blogTitle;
      blog.mainContent = req.body.mainContent;
      blog.blogType = req.body.blogType;
      blog.category = req.body.category;
      blog.date = Date.parse(req.body.date);
      blog.featured = req.body.featured;

      blog.save()
        .then(() => res.json('Blog updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;