


let usuarios = [
{
    nombre : "mauricio",
    documen : 225356,
    contraseña : 1234,
    tipoUsuar : "administrador"},
{
    nombre : "brandon",
    documen : 1,
    contraseña : 1,
    tipoUsuar : "cliente"}
];

let docume = parseInt(prompt("ingresa tu documento"));
let contraseñ = parseInt(prompt("ingrese la contraseña"));


let estar = usuarios.find(elem => {
    return elem.documen === docume && elem.contraseña === contraseñ
});
console.log(estar);
let totalCajero = 0
let arrayDinero = []
    
if(estar.tipoUsuar === "administrador"){
    let bCinco = parseInt(prompt("ingrese los billetes de 5"));
    let bDiez = parseInt(prompt("ingrese los billetes de 10"));
    let bVente = parseInt(prompt("ingrese los billetes de 20"));
    let bCincuenta = parseInt(prompt("ingrese los billetes de 50"));
    let bCien = parseInt(prompt("ingrese los billetes de 100"));
    arrayDinero.push(bCinco * 5000)
    arrayDinero.push(bDiez * 10000)
    arrayDinero.push(bVente * 20000)
    arrayDinero.push(bCincuenta * 50000)
    arrayDinero.push(bCien * 100000)


 }else if(estar.tipoUsuar === "cliente"){
   if(totalCajero === 0 ){
    console.log("Cajero sin dinero, vuelva pronto");
   }
 }else{
    let pregunta = parceInt(prompt("cuanto dinero quieres retitirar"))
 }

 arrayDinero.forEach(elem =>{
    totalCajero += elem
})
 
    
 console.log(arrayDinero);
 console.log(`total ${totalCajero}`);
   





