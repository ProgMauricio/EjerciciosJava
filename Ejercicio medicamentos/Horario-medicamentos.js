let hora= Number(prompt("¿Cual es la hora inicial que debe tomar su medicamento?"));
let frecuencia= Number(prompt("¿Con que frecuencia debe tomarse el medicamento?"));
let dias= Number(prompt("¿Por cuantos dias tiene que tomar el medicamento?"));

ite=(24*dias)/frecuencia;


for (i = 1; i<=ite;) {
    if ( hora>= 24) {
        n= -1*(24-hora) 
        hora= n
        document.write("La toma ", i, " es a las ", hora, " horas " + "<br>");
        
        i= i+1
        hora=hora+frecuencia
    }
    else {
        document.write("La toma ", i, " es a las ", hora, " horas " + "<br>");
        i= i+1
        hora=hora+frecuencia
    }
}