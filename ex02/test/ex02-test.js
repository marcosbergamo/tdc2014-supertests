var assert = require('assert');
var ext02 = require('../ex02.js');

describe('Criar um arquivo em /tmp/nameFile', function(){
    it('Criar arquivo nome marcos', function(callback){
        ext02('marcos', function(ret){
            assert.ok(ret);
            callback();
        });
    });
});
