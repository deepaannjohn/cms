var kafka = require('kafka-node');
var kafkaConfig = require('../config/config').kafkaConfig;
var responseHandler = require('../common/responseHandler')

function KafkaService(req,res){
    console.log('write to kafka');
    // var client = new kafka.Client(elasticConfig);
    // this.create = function(req,res){
    //     var data = {
    //         'title' : req.body.title,
    //         'contet'  : req.body.content,
    //         'created' : new Date(),
    //         'lastUpdated' : new Date()
    //     }
    //     client.index({ index : 'blog' , type : 'blog', body : data }, (err, resp) => {
    //         if (err)  {
    //             responseHandler.sendError(res,{ id : req.body.title });
    //         } 
    //     })
    // }
}

module.exports =  KafkaService;