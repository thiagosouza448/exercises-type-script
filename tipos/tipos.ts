//string

let nome: string = "Joao"
console.log(nome)

// numbers 
let idade: number  = 28
idade  = 28.6
console.log(idade)

//  boolean

let possuiHobbies: boolean = false
console.log(possuiHobbies)


// tipos explicitos

let minhaIdade: number

minhaIdade=24
console.log(typeof minhaIdade)
// minhaIdade='30'

//array 
let hobbies: any[] = ["cozinhar", "esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)
hobbies = [100]

hobbies=[100,200,300]
console.log(hobbies)

//tuplas
let endereco: [string, number, string] = ["av principal", 400,"mercado"]
console.log(endereco)
endereco = ["Rua teste", 123, "testando a rua"]
console.log(endereco)



// enums
enum Cor{
    Cinza,
    Verde =100,
    Azul = 10,
    Laranja,
    Amarelo,
    Vermelho= 100
}
let minhaCor: Cor = Cor.Cinza
console.log(minhaCor)
console.log(Cor.Azul)
console.log(Cor.Azul, Cor.Laranja)
console.log(Cor.Verde, Cor.Verde)

//any

let carro : any = "bmw"
console.log(carro)
carro ={marca:"bmw", ano: 2019,}
console.log(carro)


// ----------------------------------------- funcao-----------------------------------------

function retornaNome(): string{
    return nome
}
console.log(retornaNome())

nome
function digaOi(): void{
    console.log('oi')
}
digaOi()

function multiplica(numeroUm: number,NumeroDois: number) :number {
    return numeroUm * NumeroDois

}
console.log(multiplica(7,7))
let calculo : (x:number, y:number)=> number

calculo = multiplica
console.log(calculo(5,7))




//objetos

let usuario: {nome: string, idade: number} ={
    nome:"thiago",
    idade: 30
}
console.log(usuario)

usuario = {
    nome:"aline",
    idade:27
}
console.log(usuario)




// DESAFIO OBJETO FUNCIONARIO BATENDO PONTO



// ALIAS APELIDO QUE VC DA A UM DETERMINADO TIPO PRA REUTILIZAR

type Funcionario=  {
    supervisores:string [],
    baterPonto: (name:string, horas: number,)=>string,

}

let funcionario: Funcionario  = {
    supervisores: ["ana","joao"],
    baterPonto(name:string,horario:number): string{
        if(horario<=8){
            
            return `${name} ponto normal com ${horario} horas`
        }
        else{
            const message = `${name} fora do horario, ${horario}, avisa a supervisora ${this.supervisores[0]} e ${this.supervisores[1]}`;
            return message
        }
    }
}

console.log(funcionario.supervisores)
console.log(funcionario.baterPonto("Thiago",8))
console.log(funcionario.baterPonto("Aline",10))


let funcionario2: Funcionario  = {
    supervisores: ["Jeronimo","Claudio"],
    baterPonto(name:string,horario:number): string{
        if(horario<=8){
            
            return `${name} ponto normal com ${horario} horas`
        }
        else{
            const message = `${name} fora do horario, ${horario}, avisa a supervisora ${this.supervisores[0]} e ${this.supervisores[1]}`;
            return message
        }
    }
}

console.log(funcionario2.supervisores)
console.log(funcionario2.baterPonto("Vega",8))
console.log(funcionario2.baterPonto("Ada",10))




// UNION TYPES DA PRA USAR NUMBER OU STRING
let nota: number | string = 10
console.log(`minha nota é ${nota}!`)

nota = "um coco"
console.log(`minha nota é ${nota}!`)





