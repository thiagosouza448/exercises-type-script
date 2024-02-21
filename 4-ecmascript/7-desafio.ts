// Desafios
// Exercicio 1
// RESOLVIDO COM ARROW FUNCTION
var dobro = (valor: number): number => valor *3
console.log(dobro(10))

// Exercicio 2
// RESOLVIDO PASSANDO O PARAMETRO DIRETO 
// const dizerOla = function (nome: string = 'Pessoa'): void {
//     console.log('Olá, ' + nome)
// }

// dizerOla()
// dizerOla('Anna')

// Exercicio 3
// RESOLVIDO COM SPREAD
const nums = [-3, 33, 38, 5]
// Imprimir o menor valor
console.log(Math.min(...nums))

// Exercicio 4
// RESOLVIDO COM SPREAD

const array = [55, 20]
array.push(...nums)
// Adicionar todos os elementos de "nums" em array
console.log(array)

// Exercicio 5
// RESOLVIDO COM DESTRUCTURING
const notas = [8.5, 6.3, 9.4]
const [n1,n2,n3] = notas

console.log(n1,n2,n3)

// Exercicio 6
const cientista = { primeiroNome: 'Will', expeciencia: 12 }
const {primeiroNome , expeciencia} = cientista 

const mensagem  = `Nome ${primeiroNome} e a sua experiencia e de ${expeciencia} `
console.log(mensagem)