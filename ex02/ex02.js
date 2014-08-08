/**
    ex02 - Esse programa cria um arquivo com o mesmo nome recebido como parametro.
    R01 - O arquivo foi criado?
*/
var fs = require('fs');

module.exports = function(nameFile, callback){

    fs.writeFile('/tmp/'+nameFile, "Hello!", function(err) {
        if(err) {
            callback(false);
        } else {
            callback(true);
        }
    });

}
