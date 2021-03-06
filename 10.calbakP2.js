// Vamos ver agora a diferença de usar ou não o Calback 

const nota = [5, 4, 6, 7, 8, 9, 15, 20, 10]

// O Objetivo é mostrar apenas as notas menores que 7


// SEM CALBACK /////

let notasBaixas = [] // Perceba que criamos um outro Array para receber as notas abaixo ou igual a 7

for (let i in nota) { // Criamos um laço para passar no Array notas

    if (nota[i] <=7){
        notasBaixas.push (nota[i]) // As notas que forem menor ou igual a 7 serão acrescentadas no Array (notasBaixas)
    }
}

console.log (notasBaixas) // Ai vamos imprimir o Array com as notas baixas

///// COM CALBACK ////

let notasBaixas2 = nota.filter (function (nota){ 

    return nota <= 7
})

/* O comando (filter) tem um Calback que vai analisar se determinada condição é verdadeira ou falsa
   Sendo verdadeiro o valor será anexado no Array (notasBaixas2) se não sera exposta.
   A function criada tem justamente o papel de criar esse filtro e devemos passar o ELEMENTO (não parametro)
   que ira ser analisado pela function que no caso é o Array nota*/

   console.log (notasBaixas2)

/* Perceba que o ressultado foi o mesmo com o CALBACK, mas sem precisar usar um laço de repetição o 
   Calback fez por si proprio o laço e nem precisamos criar um novo Array vazio para armazenar os dados
   Na propria criação da variavel já utilizamos o CALBACK*/