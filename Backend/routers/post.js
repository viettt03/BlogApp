const router = require('express').Router()
const { createPost, deletePost, updatePost,
    getPost, getFeaturedPost, getPosts, searchPost,
    getRelatedPosts, uploadImage
} = require('../controllers/post');

const multer = require('../middlewares/multer');
const { postValidator, validate } = require('../middlewares/postValidater');
const parseData = require('../middlewares/index')

router.post('/create', multer.single('thumbnail'),
    parseData, postValidator, validate, createPost);

router.put('/:postId', multer.single('thumbnail'),
    parseData, postValidator, validate, updatePost);

router.delete("/:postId", deletePost);

router.get("/single/:slug", getPost);

router.get("/featured-posts", getFeaturedPost);

router.get('/posts', getPosts);

router.get('/search', searchPost);

router.get('/related-posts/:postId', getRelatedPosts);

router.post('/upload-image', multer.single('image'), uploadImage);
module.exports = router;
