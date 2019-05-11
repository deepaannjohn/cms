var request = require('request') ;

 describe("test suite for blog apis",()=>{
    var app;
    beforeAll(()=>{
        app=require('../app');
    })
    describe("test suite for blog apis",()=>{
        var data = {};
        beforeAll((done)=>{
            request.get('http://localhost:3000/blog/read',(error,response,body) => {
                data.body = body;
                data.status = response.statusCode;
                done();
            })
        })
        it("testing blog api/read",()=>{
            expect(data.status).toBe(200);
        })
    })
 })