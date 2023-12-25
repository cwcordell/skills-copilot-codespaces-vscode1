// Create web server using express.js
const express = require('express');
const app = express();
// Create a router object
const router = express.Router();
// Create a controller object
const commentsController = require('../controllers/commentsController.js');
// Create a route for the path /
router.get('/', commentsController.getAllComments);
// Create a route for the path /:id
router.get('/:id', commentsController.getCommentById);
// Create a route for the path /:id
router.get('/post/:id', commentsController.getCommentsByPostId);
// Create a route for the path /:id
router.get('/user/:id', commentsController.getCommentsByUserId);
// Create a route for the path /
router.post('/', commentsController.createComment);
// Create a route for the path /:id
router.put('/:id', commentsController.updateComment);
// Create a route for the path /:id
router.delete('/:id', commentsController.deleteComment);
// Export the router
module.exports = router;


