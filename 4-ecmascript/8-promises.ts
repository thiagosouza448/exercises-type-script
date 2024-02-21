// promises

// formas pra se trabalhar com assincronismo

//CallBack
function espera3s(callback: (dado: string)=>void){
    setTimeout(()=>{
        callback('3s depois')
    },3000)
}

espera3s(function(resultado: string ){
    console.log(resultado)
})


// PROMISE

function esperar3sPromise(){
    return new Promise((resolve: any)=>{
        setTimeout(()=>{
            resolve('3s depois com promise')
        },3000)
    })
}


esperar3sPromise()
.then(dado => console.log(dado))

fetch('https://swapi.dev/api/people/1')
.then(res => res.json())
.then(personagem  => personagem.films)
.then(films => fetch(films[0]))
.then(respFilm => respFilm.json())
.then(filme => console.log(filme))
.catch(err => console.log(err))
// .then(filme => console.log(filme.title, filme.director))
// .then(filme => console.log(filme.title))