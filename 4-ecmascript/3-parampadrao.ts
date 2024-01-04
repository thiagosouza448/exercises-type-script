
function contagemRegressiva(inicio:number = 5, 
    fim: number = inicio -5): void{
    console.log(inicio)
    while(inicio >fim){
        inicio--
        console.log(inicio)
    }
    console.log("fim")
}

contagemRegressiva()
contagemRegressiva(3)