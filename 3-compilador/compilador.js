"use strict";
/*noEmitOnError at tsconfig.js*/
/* option for not generate or alter ts to js when emit on error ts*/
let chanel = 'Gaveta';
let subscribers = 30018;
// canal = inscritos
console.log(`canal  = ${chanel}`);
//  let name = 'Thiago'
/*sourceMap*/
/* Create source map files for emitted JavaScript files, using when you want to see file that generates
they stayed in the middle emit ts to js
*/
/**noImplicitAny */
/**Enable error reporting for expressions and declarations with an implied 'any' type.
 * in moments at refactoring or migrate your application to ts
 */
/*generate problem*/
function sum(a, b) {
    return a + b;
}
/*not generate problem*/
let anyThing;
anyThing = 12;
anyThing = 'abc';
/**strictNullChecks  into functions*/
/* When type checking, take into account 'null' and 'undefined'. using parameter never using in function*/
/**  noUnusedLocals  let n */
/*Enable error reporting when local variables aren't read. */
function salute(isMorning) {
    // let n:number = 1
    let saluation;
    if (isMorning) {
        saluation = 'Bom dia!';
    }
    else {
        saluation = 'Tenha uma boa vida!';
    }
    return saluation;
}
//# sourceMappingURL=compilador.js.map