/* function suma(numero) {
    let total = 0;

    for(let numero1=0;) {}
} */



/* function calcular(numero) { */
function calcular() {
    /* document.querySelector('#calcular2').addEventListener('click', () =>{ */
    n1 = parseInt(document.getElementsByClassName('numero1').value);
    n2 = parseInt(document.getElementsByClassName('numero2').value);
    op = document.getElementById('operacion').value;
    let r;
    if(op == '+'){
        r = n1 + n2;
    }else if( op == '-'){
        r = n1 - n2;
    }else if(op == '*'){
        r = n1 * n2;
    }else if(op == '/'){
        r = n1 / n2;
    }
        document.querySelector('numresul')= r;
        resultado.value = r;
    }



















/*     document.querySelector('#calcular2').addEventListener('click', () =>{
    const n1 = parseInt(document.querySelector('#n11').value);
        const n2 = parseInt(document.querySelector('#n22').value);
        const op2 = document.querySelector('#op').value;
        let r;
        if(op2 == '+'){
            r = n1 + n2;
        }else if( op2 == '-'){
            r = n1 - n2;
        }else if(op2 == '*'){
            r = n1 * n2;
        }else if(op2 == '/'){
            r = n1 / n2;
        }
        document.querySelector('#r2').innerHTML = r;
    }); */