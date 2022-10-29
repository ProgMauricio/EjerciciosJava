function generar() {
        let tabla= parseInt(document.getElementById('tabla').value);
        let longitud= parseInt(document.getElementById('longitud').value);
   
        for (i=0; i<= longitud; i++) {
            document.write(""+tabla+" X "+i+" = "+(i*tabla)+"<br>");
        }

}