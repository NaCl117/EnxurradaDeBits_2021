let programa;
let saldo, compra;
let n1, n2, oper, res;
let A, B, C, D, soma, media;
let val, cont_val, X, Y, soma2, media2;
let val1, val2, somaImpares, value;

programa = prompt('Digite um valor de 1 á 5 da operação que você deseja realizar.\n1 - SIMULAR UMA COMPRA \n2 - REALIZAR UM CÁLCULO \n3 - CALCULAR A MÉDIA DE 4 NÚMEROS \n4 - CALCULAR A MÉDIA DE X NÚMEROS \n5 - CACULAR A SOMA DOS NÚMEROS ÍMPARES EM UM INTERVALO');
if(programa == 1)
{
    alert('Agora você deverá informar o seu saldo bancário e o valor da compra que deseja realizar');
    saldo =  prompt('Digite o valor do seu saldo bancário');
    compra = prompt('Digite o valor da compra que você deseja fazer');
    saldo_final = saldo - compra;
    divida = compra - saldo;
    if(saldo_final >= 0)
    {
        alert(`A compra ocorreu bem, seu saldo agora é de R$ ${saldo_final},00`);
    }
    else
    {
        alert(`Você não tem saldo suficiente, lhe faltam R$ ${divida},00`);
    }
}
if(programa == 2)
{
    alert('Agora você deverá informar os dois números inteiros e a operação que deseja realizar');
    n1 =  prompt('Digite o primeiro número inteiro');
    n2 = prompt('Digite o segundo número inteiro');
    oper = prompt('Digite a operação que deeja fazer. \n 1 -> SOMA \n 2 -> SUBTRAÇÃO \n 3 -> MULTIPLICAÇÃO \n 4 -> DIVISÃO');
    if(oper == 1)
    {
        res = parseInt(n1) + parseInt(n2);
        alert(`O resultado da operação é ${res}`);
    }
    if(oper == 2)
    {
        res = n1 - n2;
        alert(`O resultado da operação é ${res}`);
    }
    if(oper ==3)
    {
        res = n1 * n2;
        alert(`O resultado da operação é ${res}`);
    }
    if(oper == 4)
    {
        res = n1 / n2;
        alert(`O resultado da operação é ${res}`);
    }
}
if(programa == 3)
{
    alert('Agora você deverá digitar os quatro números que você deseja calcular a média deles');
    A = prompt('Digite o primeiro número');
    B = prompt('Digite o segundo número');
    C = prompt('Digite o terceiro número');
    D = prompt('Digite o quarto número');
    soma = parseInt(A) + parseInt(B) + parseInt(C) + parseInt(D);
    alert(`A soma dos quatro números é ${soma}`);
    media = soma/4;
    alert(`A média dos quatro números é ${media}`);
}
if(programa == 4)
{
    alert('Agora você deverá informar a quantidade de número que você deseja calcular a média e seus respectivos valores');
    val = prompt('Digite quantos números terão sua média calculada');
    cont_val=1;
    X = prompt(`Digite o ${cont_val}º valor`);
    Y = 0;
    soma2 = parseInt(X) + parseInt(Y);
    while(cont_val <  val)
    {
        cont_val++;
        Y = prompt(`Digite o ${cont_val}º valor`);
        soma2 = soma2 + parseInt(Y);
    }
    media2 = soma2/val;
    alert(`A soma dos valores apresentados é ${soma2}`);
    alert(`A média dos valores apresentados é ${media2}`);
}
if(programa == 5)
{
    val1 = parseInt(prompt("Digite o primeiro valor"));
    val2 = parseInt(prompt("Digite o segundo valor, ele deve ser(obrigatoriamente) maior que o primeiro"));
    somaImpares = 0;
    value = val1;
    for(value; value <= val2; value++) 
    {
        if(value%2 == 1)
        {
            somaImpares += value;
        }
    }
    alert(`A soma dos números ímpares do intervalo de ${val1} e ${val2} é ${somaImpares}`);
}
