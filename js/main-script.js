// let nombre = "Oukaal";
// let edad = "19";
// let nacionalidad = "marroquí - español";
// let estaVivo = false;

// console.log("estaVivo: " + estaVivo +"\n" + "nombre: " + 
//         nombre +"\n" + "edad: " + edad + "\n" + 
//         "nacionalidad: " + nacionalidad);


// let listaCongelados = ['pescado', 'marisco'];
// let listaCompra = [listaCongelados,'arroz', 2,'patata', true,'leche', '', null];
// console.log(listaCompra);

// let edad = "19";
// let expectativaVida = "90";
// let añosPorVivir = expectativaVida - edad;

//// Ejemplo objecto --> no importa orden
// let pokemon = {
//     nombre: "Charizard",
//     color: "Naranja",
//     poder: "fuego",
//     evolucionable: true,
//     habilidades: {
//         fuerza: 100,
//         defensa: 10,
//         velocidad: 60
//     }
// }
// (*punto + elemento* para acceder a la característica que queremos) <--> en array es por posición
//  console.log(pokemon);

// let numeroInvitados = 13;

// numeroInvitados = numeroInvitados+1;
// numeroInvitados += +1;
// numeroInvitados++;

// const invitados = ['kader','ahlam','oussama','katherine', 'santiago', 'yasmina'];

// for (let invitado=0; invitado<invitados.length;invitado++)
// {
//     console.log(invitados[invitado]);
// }
// console.log(invitados)


// let ListaDeLaCompra = ['2 barras de pan', 'arroz', '3 garrafas de agua', '1 caja de cereales', 'pescado'];

// function Saludar(){
//     console.log('hola como estas');
// }
// Saludar();
// //------------------------------------------------------------------------------------------------------------------------------>
// function CalcularRentaAnual(ValorMes){
//     let resultado = 12*ValorMes;
//     console.log(resultado)
// }
// CalcularRentaAnual(700);
// //------------------------------------------------------------------------------------------------------------------------------>
// function GastoCafeSemanal(valorCafe){
//    let resultado = valorCafe* 7
//    console.log(resultado) 
// }
// GastoCafeSemanal(1,60);
// GastoCafeSemanal(2,15);
// GastoCafeSemanal(1);
// //------------------------------------------------------------------------------------------------------------------------------>
function PagoAnualBus(costeBus)
{
    let pagoanual = costeBus * 365
    console.log(pagoanual)
}
PagoAnualBus(2,15)
PagoAnualBus(1,72)