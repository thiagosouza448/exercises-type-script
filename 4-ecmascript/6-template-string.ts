// TEMPLATE STRING

const  usuarioId :string = 'supercode '
const notificacoes : string = '19'
const boasVindas = `
    Boas vindas ${usuarioId}, 
    Notificações ${parseInt(notificacoes) > 9 ? '+9': notificacoes}
`

console.log(boasVindas)