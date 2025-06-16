/* En este archivo se encargarán de generar el código que hará dinámica la página */
btnPar= document.getElementById('pares');
btnImpar= document.getElementById('impares');
btnPrimos= document.getElementById('primos');

const Cuadrados = document.getElementsByClassName('cuadrado');
console.log(Cuadrados);
let totalCuadrados = Cuadrados.length;
console.log(totalCuadrados);
function esPrimo(n) {
    if (n < 2) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
function pintarPares() {
    for (let i = 0; i < totalCuadrados; i++) 
    {
        if (Cuadrados[i].id % 2 === 0)
        {
            //Cuadrados[i].classList.add("par");
            Cuadrados[i].classList.toggle("par");
        }
    }
}

function pintarImpares() {
    for (let j = 0; j < totalCuadrados; j++)
    {
        if (Cuadrados[j].id % 2 !== 0)
        {
            Cuadrados[j].classList.toggle("impar");
        }
    }
}

function pintarPrimos() {
    for (let k = 0; k < totalCuadrados; k++) {
        const num = parseInt(Cuadrados[k].id, 10);
        if (esPrimo(num)) {
            Cuadrados[k].classList.toggle("primo");
        }
    }
}



//Listeners

btnPar.onclick = pintarPares;
btnImpar.onclick = pintarImpares;
btnPrimos.onclick = pintarPrimos;
