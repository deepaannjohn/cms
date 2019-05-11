function Config(){
    const elasticConfig = {
        host: 'localhost:9200'
    };

    const kafkaConfig = {
        //to be added
    }

    return {
        elasticConfig : elasticConfig,
        kafkaConfig : kafkaConfig
    }
}

module.exports = new Config;

