"use strict";
//string
let nome = "Joao";
console.log(nome);
// numbers 
let idade = 28;
idade = 28.6;
console.log(idade);
//  boolean
let possuiHobbies = false;
console.log(possuiHobbies);
// tipos explicitos
let minhaIdade;
minhaIdade = 24;
console.log(typeof minhaIdade);
// minhaIdade='30'
//array 
let hobbies = ["cozinhar", "esportes"];
console.log(hobbies[0]);
console.log(typeof hobbies);
hobbies = [100];
hobbies = [100, 200, 300];
console.log(hobbies);
//tuplas
let endereco = ["av principal", 400, "mercado"];
console.log(endereco);
endereco = ["Rua teste", 123, "testando a rua"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Cinza"] = 0] = "Cinza";
    Cor[Cor["Verde"] = 100] = "Verde";
    Cor[Cor["Azul"] = 10] = "Azul";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 12] = "Amarelo";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
})(Cor || (Cor = {}));
let minhaCor = Cor.Cinza;
console.log(minhaCor);
console.log(Cor.Azul);
console.log(Cor.Azul, Cor.Laranja);
console.log(Cor.Verde, Cor.Verde);
//any
let carro = "bmw";
console.log(carro);
carro = { marca: "bmw", ano: 2019, };
console.log(carro);
// ----------------------------------------- funcao-----------------------------------------
function retornaNome() {
    return nome;
}
console.log(retornaNome());
nome;
function digaOi() {
    console.log('oi');
}
digaOi();
function multiplica(numeroUm, NumeroDois) {
    return numeroUm * NumeroDois;
}
console.log(multiplica(7, 7));
let calculo;
calculo = multiplica;
console.log(calculo(5, 7));
//objetos
let usuario = {
    nome: "thiago",
    idade: 30
};
console.log(usuario);
usuario = {
    nome: "aline",
    idade: 27
};
console.log(usuario);
let funcionario = {
    supervisores: ["ana", "joao"],
    baterPonto(name, horario) {
        if (horario <= 8) {
            return `${name} ponto normal com ${horario} horas`;
        }
        else {
            const message = `${name} fora do horario, ${horario}, avisa a supervisora ${this.supervisores[0]} e ${this.supervisores[1]}`;
            return message;
        }
    }
};
console.log(funcionario.supervisores);
console.log(funcionario.baterPonto("Thiago", 8));
console.log(funcionario.baterPonto("Aline", 10));
let funcionario2 = {
    supervisores: ["Jeronimo", "Claudio"],
    baterPonto(name, horario) {
        if (horario <= 8) {
            return `${name} ponto normal com ${horario} horas`;
        }
        else {
            const message = `${name} fora do horario, ${horario}, avisar a supervisora ${this.supervisores[0]} e ${this.supervisores[1]}`;
            return message;
        }
    }
};
console.log(funcionario2.supervisores);
console.log(funcionario2.baterPonto("Vega", 8));
console.log(funcionario2.baterPonto("Ada", 10));
// UNION TYPES DA PRA USAR NUMBER OU STRING
let nota = 10;
console.log(`minha nota é ${nota}!`);
nota = "um coco";
console.log(`minha nota é ${nota}!`);
// checando tipos em Runtime
let valor = 30;
if (typeof valor == "number") {
    console.log("é um number");
}
else {
    console.log(typeof valor);
}
/*never*/
function falha(msg) {
    while (true) {
        throw new Error(msg);
    }
}
const produto = {
    nome: 'sabao',
    preco: 3,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("precisa ter um nome");
        }
        if (this.preco <= 0) {
            falha('preco invalido');
        }
        else {
            console.log(`produto: ${this.nome} preco: ${this.preco}`);
        }
    }
};
produto.validarProduto();
// null
let alturaOpcional = 12;
alturaOpcional = null;
const contato01 = {
    nome: 'fulano',
    tel1: '119781728718',
    tel2: null
};
console.log(contato01);
console.log(contato01.tel1);
console.log(contato01.tel2);
let podeSerNulo = null;
podeSerNulo = 12;
console.log(podeSerNulo);
let contaBancaria = {
    saldo: 1000,
    depositar(valor) {
        this.saldo += valor;
    }
};
let correntista = {
    nome: 'Thiago Souza',
    contaBancaria: contaBancaria,
    contatos: ['11819219201', '1189129812']
};
correntista.contaBancaria.depositar(1400);
console.log(correntista);
//# sourceMappingURL=tipos.js.map