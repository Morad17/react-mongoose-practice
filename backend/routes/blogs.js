const router = require('express').Router();
let BlogPost = require('../models/blog.model');

/*------Gets All Blog Posts------*/
router.route('/').get((req, res) => {
  BlogPost.find()
    .then(blogposts => res.json(blogposts))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*------Add a Blog Posts------*/
router.route('/add').post((req, res) => {
  const username = req.body.username;
  const blogTitle = req.body.blogTitle;
  const mainContent = req.body.mainContent;
  const dateCreated = Date.parse(req.body.dateCreated);

  const newBlogPost = new BlogPost({
    username,
    blogTitle,
    mainContent,
    dateCreated,
  });

  newBlogPost.save()
  .then(() => res.json('Blog posted!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

/*------Gets a particular Blog Posts------*/
router.route('/:id').get((req, res) => {
  BlogPost.findById(req.params.id)
    .then(blogpost => res.json(blogpost))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*------Delete a Blog Posts------*/
router.route('/:id').delete((req, res) => {
  BlogPost.findByIdAndDelete(req.params.id)
    .then(() => res.json('Blog Post deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

/*------Update a Blog Posts------*/
router.route('/updateCreated/:id').post((req, res) => {
  BlogPost.findById(req.params.id)
    .then(blogpost => {
      BlogPost.username = req.body.username;
      BlogPost.blogTitle = req.body.blogTitle;
      BlogPost.mainContent = req.body.mainContent;
      BlogPost.dateCreated = Date.parse(req.body.dateCreated);

      BlogPost.save()
        .then(() => res.json('Blog updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;