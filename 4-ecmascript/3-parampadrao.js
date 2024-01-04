"use strict";
function contagemRegressiva(inicio = 5, fim = inicio - 5) {
    console.log(inicio);
    while (inicio > fim) {
        inicio--;
        console.log(inicio);
    }
    console.log("fim");
}
contagemRegressiva();
contagemRegressiva(3);
//# sourceMappingURL=3-parampadrao.js.map