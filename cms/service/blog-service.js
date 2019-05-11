const DispatcherFactory = require('../dispatcher/dispatcher-factory');
const responseHandler = require('../common/responseHandler');
const eventEmitter = require('events').EventEmitter;
const util = require('util');

const BlogService = function(){
    var self = this;
    this.createBlog = function(req,res){
        //insert blog data into elastic database
        DispatcherFactory.elasicDispatcher.create(req,res,this.callback);
    }

    this.readBlog = function(req,res){
        //read blog data from elastic database
        DispatcherFactory.elasicDispatcher.read(req,res,this.callback);
    }

    this.searchBlog = function(req,res){
        //search blog data from elastic database
        DispatcherFactory.elasicDispatcher.search(req,res,this.callback);
    }

    this.callback = function(req,res,resp,err){
        if (err) {
            responseHandler.sendError(res,err);
        } 
        else{
            self.emit(resp.method, req);
            responseHandler.sendSuccess(res, resp);
        }
    }
}

util.inherits(BlogService, eventEmitter);

module.exports = new BlogService;