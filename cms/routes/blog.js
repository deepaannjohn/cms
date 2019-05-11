const blogService = require('../service/blog-service')
var express = require('express');
var router = express.Router();

blogService.on('create',(req)=>{
  console.log('writing to kafka the create event');
  //write to Kafka
})

blogService.on('read',(req)=>{
  console.log('writing to kafka the read event');
  //write to Kafka, should be an extensible interface, eg: can wtite to rabbit mq instead..may be DI pattern?
})

blogService.on('search',(req)=>{
  console.log('writing to kafka the search event');
  //write to Kafka and use it to make relevant feed for the user
})

/* Create blogs. */
router.post('/create', function(req, res) {
    blogService.createBlog(req, res);
});

/* Read blogs. */
router.get('/read', function(req, res, next) {
  blogService.readBlog(req, res);
  });

/* Update blogs. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

/* Delete blogs. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

/* Search blogs. */
router.get('/search', function(req, res, next) {
    blogService.searchBlog(req, res);
  });
  

module.exports = router;
