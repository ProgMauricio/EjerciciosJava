function generar() {
        let tabla= document.getElementById('tabla').value;
        let longitud= document.getElementById('longitud').value;
        let tipo= document.getElementById('tipo').value;
     if (tipo == 'normal') {
        for (i=0; i<= longitud; i++) {
            document.write(""+tabla+" X "+i+" = "+(i*tabla)+"<br>");
        }
     }
     else {
        for (i=0; i> longitud; i--) {
            document.write(""+tabla+" X "+i+" = "+(i*tabla)+"<br>");
     }
    }
    /* tabla.innerHTML =  */
}


/* i=longitud; i> longitud; i-- */