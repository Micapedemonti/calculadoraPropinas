//VARIABLES

let abonoTotal = document.getElementById("total");
let propinasDivPersonas=document.getElementById("prop_persona")
let mensajePropina="";
let btn=document.getElementById("btn");
let dolar=document.getElementById("dolar");
let pesoArgentino=document.getElementById("pesoArg")
let dolarPrecio=1;

const propinas= document.getElementById("propIng");
const personas = document.getElementById("divProp");
const mensAbono=document.getElementById("mensAbono");
const resultado=document.getElementById("total_persona");
const texto=document.getElementById("texto");
const CalculadoraArray=[]

personas.onchange= ()=>{
    texto.innerHTML=personas.value
}

// CLASES
class Calculadora{
    constructor(abonoTotal,propinas, personas, propinasDivPersonas,resultado){
      this.abono=abonoTotal,
      this.propi=propinas,
      this.perso=personas,
      this.resultadoUno=propinasDivPersonas,
      this.resultadoDos=resultado;
    }
}    

//FUNCION PARA LOS CALCULOS
function calculos(){
    let calculoPropina=(abonoTotal.value*propinas.value)/100
    propinasDivPersonas.value=Math.round((calculoPropina/personas.value ) /dolarPrecio);
}

function SDS(){
    resultado.value= Math.round((( parseInt (abonoTotal.value) / parseInt (personas.value)) + parseInt (propinasDivPersonas.value))/ dolarPrecio);
    arrayCalculadora();
}
function mensaje(mensajePropina){
    mensAbono.innerText=mensajePropina
}
function resetear() {
    document.getElementById("formulario").reset();
  }

//   FUNCION PARA CONVERTIR MONEDA
function convertir(){
   
    console.log("clickeo")
    if (dolar.checked===true){
    dolarPrecio= 106;
    calculos(dolarPrecio);
   SDS(dolarPrecio);
    }else if (dolar.checked===false){
        calculos();
        SDS();
        console.log("no clickeo")
    }
}
// FUNCION DEL ARRAY DE LA CLASE 
function arrayCalculadora(){
    CalculadoraArray.push(new Calculadora( abonoTotal.value,propinas.value,personas.value, propinasDivPersonas.value, resultado.value))
    console.log(CalculadoraArray);
    // SE HIZO UN LOCAL STORAGE DONDE SE GUARDARAN LOS REGISTROS DE LOS GASTOS DEL USUARIO EN NUESTRA APLICACION MOVIL.
    localStorage.setItem("registroDePagos", JSON.stringify(CalculadoraArray) );
    
}
    // OBTENER DATOS DE LOCAL STORAGE

// EVENTOS
btn.addEventListener("click",function(resetear){
    calculos();
    SDS();
    convertir();
   
    resetear.preventDefault();
    
    })

abonoTotal.addEventListener("input", function(){
        if (parseInt(abonoTotal.value )<10 ){
            abonoTotal.classList.add("noOk");
            abonoTotal.classList.remove("ok");
         mensajePropina="el monto no puede ser 0.00"
         }else {
            abonoTotal.classList.remove("noOk");
            abonoTotal.classList.add("ok");
           mensajePropina="el monto debe ser mayor a 10"  
       }
        mensaje(mensajePropina);       
}
)

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
// }];​