var assert = require('assert');
var ext01 = require('../ex01.js');

describe('Calcular dois números', function(){
    it('Somando 2 + 2 devemos obter 4', function(){
        assert.equal(ext01(2, 2), 4);
    });

    it('Somando 2 + 0 devemos obter false', function(){
        assert.equal(ext01(2, 0), false);
    });

    it('Somando 2 + a devemos obter false', function(){
        assert.equal(ext01(2, 'a'), false);
    });
});
