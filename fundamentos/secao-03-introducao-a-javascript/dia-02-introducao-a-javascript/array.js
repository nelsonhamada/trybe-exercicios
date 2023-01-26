// let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
// let menuServices = menu[1] ;

// console.log(menuServices)


// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
// let indexOfPortfolio = menu.indexOf('Portifólio') ;

// console.log(indexOfPortfolio);

// let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

// menu.push('Contato');

// console.log(menu);


// let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

// for (let index = 0; index < groceryList.length; index += 1) {
//     console.log(groceryList[index]);
// }


// let names = ['João', 'Maria', 'Antônio', 'Margarida'];

// for (let name of names) {
//     console.log(name);
// } 


//EXERCICIO DO DIA
// Imprimindo todos os valores do array:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// }



// Calculando a soma de todos os valores:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index= 0; index < numbers.length; index += 1) {
//     resultado += numbers[index]
 
// } console.log(resultado)


//Calculando a média aritimética e imprima 'Valor maior que 20' ou 'Valor menor que 20': 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;


// for (let index= 0; index < numbers.length; index += 1) {
//     resultado = (resultado + numbers[index]);
 
// } 

// let media = resultado / numbers.length; 

// if (media > 20) {
//     console.log('Valor maior que 20');
// } else {
//     console.log('Valor menor que 20')
// }


// Descubra qual o maior valor contido no array e imprima:

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let maiorValor= 0;

// for (let index= 0; index < numbers.length; index+=1 ) {
//     if (numbers[index] > maiorValor) {
//      maiorValor=numbers[index]   
//     }
// } console.log(maiorValor)


// Imprimindo resultado de cada item do array dividido por 2.

// let elemento = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
// let resultado = 0;   

// for (index=0; index < elemento.length; index += 1) {
//     resultado = elemento[index] / 2; 
//     console.log(resultado)
// }
  


const n = `"?"` ;

let resultado = 100;
for (let index = 0; index <= n; index += 1) {
  resultado -= index;
};
console.log(resultado);
