
let abonoTotal = document.getElementById("total");
let propinasDivPersonas=document.getElementById("prop_persona")
let mensajePropina="";

const propinas= document.getElementById("propIng");
const personas = document.getElementById("divProp");
const mensAbono=document.getElementById("mensAbono");

// array de porcentaje

// const propinas=[
//     {
//     value: 1,
//     title: "excelente - 15%"
// }, {
//     value: 2,
//     title: "bien - 10%"
// }, {
//     value: 3,
//     title: "malo - 2%"
// }];

// DATOS DE INGRESO
//   let nombre = prompt(`Por favor, ingrese su Nombre`);
// alert (`Bienvenido/a a nuestra calculadora de propinas` + " " + nombre);
 if (abonoTotal.value ==="0.00"){
  mensajePropina="el monto no puede ser 0.00"
  mensaje(mensajePropina);
 }else if (abonoTotal >1){
   alert(`Gracias por elegirnos`);
}
console.log (typeof abonoTotal.value)


let btn=document.getElementById("btn");
btn.addEventListener("click",function(){

let calculoPropina=(abonoTotal.value*propinas.value)/100
propinasDivPersonas.value=(calculoPropina/personas.value);

let resultado=document.getElementById("total_persona").value= ( parseInt (abonoTotal.value) / parseInt (personas.value)) + parseInt (propinasDivPersonas.value);
})
console.log("resultado")
function mensaje(mensajePropina){
    mensAbono.innerText=mensajePropina
}
