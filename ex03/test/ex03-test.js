var request = require('supertest');
var assert = require('assert');

describe('API / USER endpoint', function(){

    describe('POST /api/user', function () {

        it('Criar usuário com sucesso', function (done) {
            var user = {
            	"email": "marcos@thedon.com.br",
                "name":{
                	"first": "Marcos",
                    "last": "Bérgamo"
                }
            };

            data = JSON.stringify(user);

            request('http://localhost:8080/api/')
                .post('user')
                .set('Content-Type', 'application/json')
                .send(data)
                .expect('Content-Type', /json/)
                .expect(202, done);
        });
    });
});
