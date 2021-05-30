let programa;
let fator1, fator2; /* Programa 1 - Multiplicação */
let base, expoente; /* Programa 2 - Potenciação */
let ano_atual, ano_nascimento; /* Programa 3 - Idade */
let saldo, compra; /* Programa 4 - Compra */
let n1, n2, oper; /* Programa 5 - Operação básica de 2 números */
let A, B, C, D /* Programa 6 - Média de 2 números */
let val, cont_val, X, Y, soma2, media2; /* Programa 7 - Média de X números */
let val1, val2, somaImpares, value; /* Programa 8 - Soma dos números ímpares de um intervalo */

programa = parseInt(prompt('Digite um valor de 1 á 8 da operação que você deseja realizar.\n1 - MULTIPLICAR 2 NÚMEROS \n2 - CALCULAR A POTÊNCIA DE 2 NÚMEROS \n3 - CALCULAR A IDADE \n4 - SIMULAR UMA COMPRA \n5 - REALIZAR UM CÁLCULO \n6 - CALCULAR A MÉDIA DE 4 NÚMEROS \n7 - CALCULAR A MÉDIA DE X NÚMEROS \n8 - CACULAR A SOMA DOS NÚMEROS ÍMPARES EM UM INTERVALO'));
if(programa > 8)
{
    alert('Essa operação não existe, digite novamente a operação que deseja fazer.');
}

if(programa == 1)
{
    function produto(fator1, fator2) /* Programa 1 - Multiplicação */
    {
        alert('Digite os dois valores que você deseja multiplicar');
        fator1 = parseInt(prompt('Digite o 1º fator'));
        fator2 = parseInt(prompt('Digite o 2º fator'));
        return fator1*fator2;
    }
    const produtoRES = produto(fator1, fator2);
    alert(`O produto dos dois fatores é ${produtoRES}`);
}
if(programa == 2)
{
    function potencia(base, expoente) /* Programa 2 - Potenciação */
    {
        alert('Digite os dois valores da potenciação');
        base = parseInt(prompt('Digite o valor da base'));
        expoente = parseInt(prompt('Digite o valor do expoente'));
        return base**expoente;
    }
    const potenciaRES = potencia(base, expoente);
    alert(`A potência dos dois números é ${potenciaRES}`);
}
if(programa == 3)
{
    function idade(ano_atual, ano_nascimento) /* Programa 3 - Idade */
    {
        alert('Você deverá digitar o ano em que se encontra e o ano em que nasceu(O programa conta a idade que você terá até o último dia do ano)');
        ano_atual = parseInt(prompt('Digite o ano atual'));
        ano_nascimento = parseInt(prompt('Digite o ano em que você nasceu'));
        return ano_atual - ano_nascimento;
    }
    const idadeRES = idade(ano_atual, ano_nascimento);
    alert(`Você tem/terá ${idadeRES} anos até o final do ano`);
}
if(programa == 4)
{
    function pagamento(saldo, compra)
    {
        alert('Agora você deverá informar o seu saldo bancário e o valor da compra que deseja realizar');
        saldo =  parseInt(prompt('Digite o valor do seu saldo bancário'));
        compra = parseInt(prompt('Digite o valor da compra que você deseja fazer'));
        return saldo - compra;
    }
    const saldo_final = pagamento(saldo, compra);
    if(saldo_final >= 0)
    {
        alert(`A compra ocorreu bem, seu saldo agora é de R$ ${saldo_final},00`);
    }
    else
    {
        alert('Você não tem saldo suficiente');
    }
}
if(programa == 5)
{
    function calculadora(n1, n2,oper)
    {
        alert('Agora você deverá informar os dois números inteiros e a operação que deseja realizar');
        n1 =  parseInt(prompt('Digite o primeiro número inteiro'));
        n2 = parseInt(prompt('Digite o segundo número inteiro'));
        oper = prompt('Digite a operação que deseja fazer. \n 1 -> SOMA(+) \n 2 -> SUBTRAÇÃO(-) \n 3 -> MULTIPLICAÇÃO(*) \n 4 -> DIVISÃO(/)');
        if(oper == '+' || oper == 1 || oper == 'SOMA' || oper == 'soma')
        {
            return n1 + n2;
        }
        if(oper == '-' || oper == 2 || oper == 'SUBTRAÇÃO' || oper == 'subtração')
        {
            return n1 - n2;
        }
        if(oper == '*' || oper == 3 || oper == 'MULTIPLICAÇÃO' || oper == 'multiplicação')
        {
            return n1 * n2;
        }
        if(oper == '/' || oper == 4 || oper == 'DIVISÃO' || oper == 'divisão')
        {
            return n1 / n2;
        }
    }
    const res = calculadora(n1, n2, oper)
    alert (`A resposta é ${res}`)
}
if(programa == 6)
{
    function media4(A, B, C, D, soma)
    {
        alert('Agora você deverá digitar os quatro números que você deseja calcular a média deles');
        A = parseInt(prompt('Digite o primeiro número'))
        B = parseInt(prompt('Digite o segundo número'));
        C = parseInt(prompt('Digite o terceiro número'));
        D = parseInt(prompt('Digite o quarto número'));
        soma = A + B + C + D;
        return soma/4;
    }
    const mediaRES = media4(A, B, C, D); 
    alert(`A média dos quatro números é ${mediaRES}`);
}
if(programa == 7)
{
    function mediaX(val, cont_val, X, Y, soma2)
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
        return soma2/val;
    }
    const mediaXres = mediaX(val, cont_val, X, Y, soma2)
    alert(`A média dos valores apresentados é ${mediaXres}`);   
}
if(programa == 8)
{
    function SomaImpares(val1, val2, somaImpares, value)
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
        return somaImpares
    }
    const somaImparesRES = SomaImpares(val1, val2, somaImpares, value)
    alert(`A soma dos números ímpares do intervalo é ${somaImparesRES}`);
}