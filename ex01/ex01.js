/**
    ex01 - Esse programa recebe 2 numeros e soma os mesmos.
    R01 - Não podemos somar numeros menores ou iguais a 0.
    R02 - Letras não somam
*/


module.exports = function(input1, input2){
    if(input1 <= 0 || input2 <= 0){
        return false;
    }

    if(!parseInt(input1) || !parseInt(input2)){
        return false;
    }

    return parseInt(input1) + parseInt(input2);
};
