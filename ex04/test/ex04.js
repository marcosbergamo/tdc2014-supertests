var assert = require('assert');
var sys = require('sys')
var exec = require('child_process').exec;

describe('Testando um programa em outra linguagem', function(){
    it('Qual número é maior: 4 ou 8?', function(callback){
        exec("./teste 4 8", function puts(error, stdout, stderr) {
            assert.equal(stdout, 8);
            callback();
        });
    });
});
