document.addEventListener('DOMContentLoaded', () => {
    // Arreglamos el nombre de la variable para que coincida
    const header = document.querySelector('.cabecera');
    let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

    const elementos = document.querySelectorAll('.titulo, .iconos');
    const ejercicioTres = document.querySelector('.ejercicio-3');

    let listaGenerica = []; 
    


    // Asignar retraso aleatorio a cada elemento con animación
    elementos.forEach(el => {
        const randomDelay = Math.random() * 6; // entre 0 y 6s
        el.style.animationDelay = randomDelay + 's';
    });

    // ejercicio 3 (botón)
    function ejercicio3(lista) {
        let listaUno = document.querySelector('.lista-ejercicio-3');
        listaUno.innerHTML = `El valor de la lista hasta el momento está : [ ${lista.join(', ')} ]`;

        ejercicioTres.addEventListener('click', () => {
            const parrafo = document.querySelector('.error');
            const entrada = document.querySelector('.input-ejercicio-3');

            // Quitar la clase de animación para reiniciarla
            listaUno.classList.remove('animacion');
            parrafo.classList.remove('animacion');
            // Forzar reflow
            void listaUno.offsetWidth;
            void parrafo.offsetWidth;
            
            if (entrada.value === '') {
                parrafo.innerHTML = 'Por favor ingrese un valor';
                parrafo.style.color = "red";
                entrada.style.border = '1px solid red';
            } else {
                lista.push(entrada.value);

                parrafo.style.color = "#00cc00";
                parrafo.innerHTML = 'Cambio con Exito';
                parrafo.classList.add('animacion');
                listaUno.classList.add('animacion');
                listaUno.innerHTML = `El valor de la lista hasta el momento está : [ ${lista.join(', ')} ]`;
                entrada.value = '';
                console.log(lista);
            }
        });
    }

    // ejercicio 4
    function ejercicioCuatro(lista) {
        let valoresAgregar = ['Java', 'Ruby', 'GoLang'];

        valoresAgregar.forEach(dato => {
            lista.push(dato)
        });

        console.log(`Nuevo valor de la lista [ ${lista.join(', ')} ]`);
    }

    // ejercicio 5
    function ejercicioCinco(lista) {
        let valoresAgregar = ['Java', 'Ruby', 'GoLang'];

        valoresAgregar.forEach(dato => {
            lista.push(dato)
        });

        console.log('/******************************************************************/');
        console.log('Ejericicio 5');
        console.log(`Los valores inversos son [ ${lista.slice().reverse().join(', ')} ]`)
        console.log('/******************************************************************/');
    }

    // ejercicio 6
    function ejercicio6() {
        const listaNumeros = [7, 4, 25, 21, 33, 105, 8, 1];
        const cantidadNumerosLista = listaNumeros.length;
        let numerosSumados = 0;

        listaNumeros.forEach(numero => {
            numerosSumados += numero;
        });

        let promedioNumeros = numerosSumados / cantidadNumerosLista;

        console.log('/******************************************************************/');
        console.log('Ejericicio 6');
        console.log(`La cantidad de numeros en la lista son ${cantidadNumerosLista}`);
        console.log(`La sumatoria de los numeros es: ${numerosSumados}`);
        console.log(`El promedio de los numeros es: ${promedioNumeros}`);
        console.log('/******************************************************************/');
    }

    // ejercicio 7
    function ejercicio7() {
        const listaNumeros = [7, 4, 25, 21, 33, 105, 8, 1];
        const numeroMenor = Math.min(...listaNumeros);
        const numeroMayor = Math.max(...listaNumeros);
        const listaNumeroMayorMenor = [];

        console.log('/******************************************************************/');
        console.log('Ejericicio 7');
        console.log(`El numero menor es: ${numeroMenor}`);
        console.log(`El numero mayor es:  ${numeroMayor}`);
        

        listaNumeroMayorMenor.push(numeroMenor);
        listaNumeroMayorMenor.push(numeroMayor);

        console.log(`La lista con los numetos mayor y menor es: [ ${listaNumeroMayorMenor.join(', ')} ]`)
        console.log('/******************************************************************/');
    }

    // ejercicio 8
    function ejercicio8() {
        let listaNumeros = [7, 4, 25, 21, 33, 105, 8, 1];
        let sumaNumeros = 0;

        listaNumeros.forEach(numero => {
            sumaNumeros += numero;
        });

        console.log('/******************************************************************/');
        console.log('Ejericicio 8');
        console.log(`La suma de todos los elementos [ ${listaNumeros.join(', ')} ] es de ${sumaNumeros}`);
        console.log('/******************************************************************/');
    }

    // ejercicio 10
    function ejercicio10() {
        let listaUnoNumeros = [7, 4, 25, 21, 33, 105, 8, 1];
        let listaDosNumeros = [8, 5, 10, 4, 1, 15, 33, 24];
        let sumaNumerosLista = 0;

        if (listaUnoNumeros.length != listaDosNumeros.length) {
            alert('Las listas deben tener el mismo valor de elementos')
        } else {
            sumaNumerosLista = listaUnoNumeros.map((valor, i) => valor + listaDosNumeros[i]);
        }

        console.log('/******************************************************************/');
        console.log('Ejericicio 10');
        console.log(`La lista uno es: [ ${listaUnoNumeros.join(', ')} ]`)
        console.log(`La lista dos es: [ ${listaDosNumeros.join(', ')} ]`);
        console.log(`La suma de los numeros es: [ ${sumaNumerosLista.join(', ')} ]`);
        console.log('/******************************************************************/');
    }

    // ejercicio 11
    function ejercicio11() {
        let listaNumeros = [4, 7, 2, 3];
        let numerosCuadradoDos = 0;

        numerosCuadradoDos = listaNumeros.map(valor => Math.pow(valor, 2));


        console.log('/******************************************************************/');
        console.log('Ejericicio 11');
        console.log(`Lista actual es: [ ${listaNumeros.join(', ')} ]`)
        console.log(`Los cuadrados de los valores son: [ ${numerosCuadradoDos.join(', ')} ]`)
        console.log('/******************************************************************/');
        
    }

    ejercicio3(lenguagesDeProgramacion);
    ejercicioCuatro(lenguagesDeProgramacion);
    ejercicioCinco(lenguagesDeProgramacion);
    ejercicio6();
    ejercicio7();
    ejercicio8();
    ejercicio10();
    ejercicio11();
});
  