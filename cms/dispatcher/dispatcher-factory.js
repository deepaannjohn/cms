const kafkaDispatcher = require('./kafka-dispatcher');
const elasicDispatcher = require('./elastic-dispatcher');

function DispatcherFactory(){
    return {
        kafkaDispatcher : kafkaDispatcher,
        elasicDispatcher : elasicDispatcher
    }
}

module.exports = DispatcherFactory();