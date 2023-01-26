// let primeiroNumero = 16;
// let segundoNumero = 12;

// if (primeiroNumero < segundoNumero) {
// 	console.log(primeiroNumero, 'é menor que', segundoNumero);
// }
// else {
// 	console.log(primeiroNumero, 'é maior que', segundoNumero)
// }


// let primeiroNumero = 16;
// let segundoNumero = 12;
// let terceiroNumero = 10;

// if (primeiroNumero > segundoNumero && primeiroNumero > terceiroNumero) {
// 	console.log (primeiroNumero);
// } else if (segundoNumero > primeiroNumero && segundoNumero >> terceiroNumero) {
// 	console.log (segundoNumero);
// } else {
// 	console.log (terceiroNumero);
// }


// let valor= -0;
// if (valor > 0) {
// 	console.log('positive');
// } else if (valor < 0) {
// 	console.log('negative');
// } else {
// 	console.log('zero');
// }

// const catetoUm = -2;
// const catetoDois = 10;
// const hipotenusa = 80;

// let somaDosAngulos= catetoUm + catetoDois + hipotenusa;

// if (somaDosAngulos === 180){
// 	console.log(true);
// } else if (catetoUm < 0 || catetoDois < 0 || hipotenusa < 0 ) {
// 	console.log('ERRO!')
// } else {
// 	console.log(false);
// }


// let valorDeCusto = 20;
// let valorDeVenda = 200;

// let valorDeCustoTotal= (valorDeCusto*1.2);

// let lucro = valorDeVenda - valorDeCustoTotal


// if (lucro > 0) {
// 	console.log('Seu lucro foi de R$', lucro );
// } else if (valorDeCusto < 0) {
// 	console.log('ERRO!');
// } else {
// 	console.log('Seu prejuízo foi de R$', lucro);
// }


let inss;
let ir;

const salarioBruto = 5000.00;

if (salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  inss = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  inss = salarioBruto * 0.11;
} else {
  inss = 570.88;
}

const salarioBase = salarioBruto - inss;

if (salarioBase <= 1903.98) {
  ir = 0;
} else if (salarioBase <= 2826.65) {
  ir = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  ir = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  ir = (salarioBase * 0.225) - 636.13;
} else {
  ir = (salarioBase * 0.275) - 869.36;
};

console.log("Salário Base = R$" + (salarioBase - ir));
