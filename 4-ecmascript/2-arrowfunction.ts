//arrow function 

const somar = function (n1: number, n2: number): number {
    return n1 + n2
}
console.log(somar(2, 2))


const subtrair = (n1: number, n2: number) => n1 - n2
console.log(subtrair(2, 3))



const saudacao = ()=> console.log("Ola!")
saudacao()

const falarCOm= (pessoa: string) => console.log('ola '+ pessoa)
falarCOm('Thiagoo')


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
