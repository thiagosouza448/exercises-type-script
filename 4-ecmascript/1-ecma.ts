// let & const
var seraQuePode
seraQuePode= "?"

console.log(seraQuePode)


let estaFrio = true
if(estaFrio){
    let acao = 'Colocar casaco'
    console.log(acao)
}

const cpf: string = "528.232.221-18"
console.log(`CPF: ${cpf} `)



var segredo = 'externo'
function revelar(){
    var segredo = 'interno'
    console.log(segredo) 
}

revelar()
console.log(segredo)


{
    const def  = 'def'
    console.log(def)
}


for (var i = 0;i < 10; i++){
    console.log(i)
}
