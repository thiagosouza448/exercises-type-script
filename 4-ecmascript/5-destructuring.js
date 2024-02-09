"use strict";
// DESTRUCTURING ARRAY
const caracteristica = ['motor ztec 1.8', 2020];
// exemplo da forma manual
// const motor = [0]
// const ano = [1]
const [motor, ano] = caracteristica;
console.log(motor);
console.log(ano);
// DESTRUCTURING OBJETO
const item = {
    nome: 'ssd 420',
    preco: 200,
    caracteristica: {
        w: 'importado',
        s: 'em processo',
        l: [1, 2, 3, 4],
        itens: {
            x: 's'
        }
    }
};
//forma manual
// const nomeItem = item.nome
// const precoItem = item.preco
const { nome: n, preco: p, caracteristica: { w }, caracteristica: { s }, caracteristica: { l }, caracteristica: { itens } } = item;
console.log(n);
console.log(p);
console.log(w);
console.log(s);
console.log(l);
console.log(itens);
//# sourceMappingURL=5-destructuring.js.map