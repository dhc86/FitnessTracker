var postData = require('../data/posts-data.json') 

module.exports.postGetAll = function (req, res) {
    console.log("GET the posts...");
    res
        .status(200)
        .json( postData );
}


module.exports.postGetOne = function (req, res) {
    var postId = req.params.id;
    var thisPost = postData[postId];

    console.log("GET PostId:", postId);
    res
        .status(200)
        .json( thisPost );
}

module.exports.postAddOne = function (req, res) {
    var newPost = req.body;
    
    console.log("POST Post:", newPost);
    res
        .status(200)
        .json( newPost );
}