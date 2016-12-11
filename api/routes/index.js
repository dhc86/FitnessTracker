var express = require('express');
var router = express.Router();

var ctlPosts = require('../controllers/posts.controllers.js');


router
    .route('/posts')
    .get(ctlPosts.postGetAll)

router
    .route('/posts/:id')
    .get(ctlPosts.postGetOne)

router
    .route('/posts/new')
    .post(ctlPosts.postAddOne)

module.exports = router;