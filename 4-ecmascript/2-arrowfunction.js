"use strict";
//arrow function 
const somar = function (n1, n2) {
    return n1 + n2;
};
console.log(somar(2, 2));
const subtrair = (n1, n2) => n1 - n2;
console.log(subtrair(2, 3));
const saudacao = () => console.log("Ola!");
saudacao();
const falarCOm = (pessoa) => console.log('ola ' + pessoa);
falarCOm('Thiagoo');
//uso do this
// function normalComThis(){
//     console.log(this)
// }
// const NormalComThisEspecial = normalComThis
// .bind({nome: "Ada"})
// NormalComThisEspecial()
// const arrowComThis = () => console.log(this)
// arrowComThis()
// const arrowComThisEspecial = arrowComThis
//     .bind({nome: "ada"})
// arrowComThisEspecial()
//# sourceMappingURL=2-arrowfunction.js.map