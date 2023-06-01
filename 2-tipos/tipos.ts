//string

let nome: string = "Joao"
console.log(nome)

// numbers 
let idade: number = 28
idade = 28.6
console.log(idade)

//  boolean

let possuiHobbies: boolean = false
console.log(possuiHobbies)


// tipos explicitos

let minhaIdade: number

minhaIdade = 24
console.log(typeof minhaIdade)
// minhaIdade='30'

//array 
let hobbies: any[] = ["cozinhar", "esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100]

hobbies = [100, 200, 300]
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["av principal", 400, "mercado"]
console.log(endereco)
endereco = ["Rua teste", 123, "testando a rua"]
console.log(endereco)



// enums
enum Cor {
    Cinza,
    Verde = 100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho = 100
}


let minhaCor: Cor = Cor.Cinza
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Azul, Cor.Laranja)
console.log(Cor.Verde, Cor.Verde)

//any

let carro: any = "bmw"
console.log(carro)
carro = { marca: "bmw", ano: 2019, }
console.log(carro)


// ----------------------------------------- funcao-----------------------------------------

function retornaNome(): string {
    return nome
}
console.log(retornaNome())

nome
function digaOi(): void {
    console.log('oi')
}
digaOi()

function multiplica(numeroUm: number, NumeroDois: number): number {
    return numeroUm * NumeroDois

}
console.log(multiplica(7, 7))
let calculo: (x: number, y: number) => number

calculo = multiplica
console.log(calculo(5, 7))




//objetos

let usuario: { nome: string, idade: number } = {
    nome: "thiago",
    idade: 30
}
console.log(usuario)

usuario = {
    nome: "aline",
    idade: 27
}
console.log(usuario)




// DESAFIO OBJETO FUNCIONARIO BATENDO PONTO



// ALIAS APELIDO QUE VC DA A UM DETERMINADO TIPO PRA REUTILIZAR

type Funcionario = {
    supervisores: string[],
    baterPonto: (name: string, horas: number,) => string,

}

let funcionario: Funcionario = {
    supervisores: ["ana", "joao"],
    baterPonto(name: string, horario: number): string {
        if (horario <= 8) {

            return `${name} ponto normal com ${horario} horas`
        }
        else {
            const message = `${name} fora do horario, ${horario}, avisa a supervisora ${this.supervisores[0]} e ${this.supervisores[1]}`;
            return message
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto("Thiago", 8))
console.log(funcionario.baterPonto("Aline", 10))


let funcionario2: Funcionario = {
    supervisores: ["Jeronimo", "Claudio"],
    baterPonto(name: string, horario: number): string {
        if (horario <= 8) {

            return `${name} ponto normal com ${horario} horas`
        }
        else {
            const message = `${name} fora do horario, ${horario}, avisar a supervisora ${this.supervisores[0]} e ${this.supervisores[1]}`;
            return message
        }
    }
}

console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto("Vega", 8))
console.log(funcionario2.baterPonto("Ada", 10))




// UNION TYPES DA PRA USAR NUMBER OU STRING
let nota: number | string = 10
console.log(`minha nota é ${nota}!`)

nota = "um coco"
console.log(`minha nota é ${nota}!`)


// checando tipos em Runtime

let valor = 30

if (typeof valor == "number") {
    console.log("é um number")
} else {
    console.log(typeof valor)
}



/*never*/
function falha(msg: string): never {
    while (true) {
        throw new Error(msg)
    }
}

const produto = {
    nome: 'sabao',
    preco: 3,
    validarProduto() {
        if (!this.nome || this.nome.trim().length == 0) {
            falha("precisa ter um nome")
        }
        if(this.preco <=0){
            falha('preco invalido')
        }
        else{
            console.log(`produto: ${this.nome} preco: ${this.preco}`)
        }
    }
}

produto.validarProduto()


// null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string
    tel2: string | null
}

const contato01: Contato= {
    nome: 'fulano',
    tel1: '119781728718',
    tel2: null
}

console.log(contato01)
console.log(contato01.tel1)
console.log(contato01.tel2)

let podeSerNulo = null
podeSerNulo = 12
console.log(podeSerNulo)



//DESAFIO 
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 1000,
    depositar(valor: number){
        this.saldo+=valor
    }
    
}

type Correntista ={
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}


let correntista: Correntista= {
    nome:'Thiago Souza',
    contaBancaria: contaBancaria,
    contatos:['11819219201','1189129812']
}

correntista.contaBancaria.depositar(1400)
console.log(correntista)

