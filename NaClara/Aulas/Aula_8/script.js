let programa;
let saldo, compra;
let n1, n2, oper, res;
let A, B, C, D, soma, media;
programa = prompt('Digite um valor de 1 á 5 da operação que você deseja realizar.\n1 - SIMULAR UMA COMPRA \n2 - REALIZAR UM CÁLCULO \n3 - CALCULAR A MÉDIA DE 4 NÚMEROS \n4 - CALCULAR A MÉDIA DE X NÚMEROS \n5 - CACULAR A SOMA DOS NÚMEROS ÍMPARES EM UM INTERVALO');
if(programa == 1)
{
    alert('Agora você deverá informar o seu saldo bancário e o valor da compra que deseja realizar');
    saldo =  prompt('Digite o valor do seu saldo bancário');
    compra = prompt('Digite o valor da compra que você deseja fazer')
    saldo_final = saldo - compra;
    divida = compra - saldo
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
    alert(`A soma dos quatro números é ${soma}`)
    media = soma/4
    alert(`A média dos quatro números é ${media}`)
}