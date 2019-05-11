var elasticsearch = require('elasticsearch');
var elasticConfig = require('../config/config').elasticConfig;

function ElasticService(){
    var client = new elasticsearch.Client(elasticConfig);
    this.create = function(req,res,callback){
        var data = {
            'title' : req.body.title,
            'contet'  : req.body.content,
            'created' : new Date(),
            'lastUpdated' : new Date()
        }
        client.index({ index : 'blog' , type : 'post', body : data }, (err, resp) => {
            callback(req,res,{ data : resp, method : 'create'},err)
        })
    }

    this.read = function(req,res,callback){
        client.search({
            index: 'blog',
            type: 'post',
            body: {
                query: { match_all: {} },
                sort : [ { 'created' : 'desc'}]
            }
        },(err, resp) => {
            callback(req,res,{ data : resp, method : 'read'} ,err)
        });
    }
    
    this.search = function(req,res,callback){
        var searchString = req.query.searchString;
        client.search({
            index: 'blog',
            type: 'post',
            body: {
                query: {
                    match: {
                        "title": searchString
                    }
                }
            }
        },(err, resp) => {
            callback(req,res,{ data : resp, method : 'search'} ,err)});
    }
}

module.exports = new ElasticService;