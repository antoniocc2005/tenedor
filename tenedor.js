const input = require ("pronmpt-sync")()

console.log("El profe estuvo aquí");

let nombre = input ("Mete nombre y te lo diré");

let variable = nombreFunción(nombre, 4);
console.log(variable);

function nombreFunción(parametro1, parametro2){
    let variableAmbitoLocalDeLaFunción= parametro1 + parametro2;
    return variableAmbitoLocalDeLaFunción;
}
