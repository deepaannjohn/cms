function ResponseHandler(){
    this.sendError = function(res, data) {
        const resObj = {
            responseCode: data.responseCode || 'SERVER_ERROR',
            data: data
        }
        res.status(500);
        res.json(resObj);
    }

    this.sendSuccess= function(res, data) {
        const resObj = {
            responseCode: data.responseCode || 'SUCCESS',
            data: data.data.hits.hits
        }
        res.status(200);
        res.json(resObj);
    }
}
    

module.exports=new ResponseHandler;