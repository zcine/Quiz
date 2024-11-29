<<<<<<< HEAD
function advinhar() {
    let contResult1 = 0;
    let contResult2 = 0;
    let contResult3 = 0;
    let contResult4 = 0;

    let OpcoesQuestoes = document.querySelectorAll('input[type="radio"]');

    OpcoesQuestoes.forEach(e => {
        if (e.checked) {
            if (e.value == 'Result1') {
                contResult1++;
            } else if (e.value == 'Result2') {
                contResult2++;
            } else if (e.value == 'Result3') {
                contResult3++;
            } else if (e.value == 'Result4') {
                contResult4++;
            }
        }
    });

    let ResultadoFinal = `Result1 = ${contResult1}<br>Result2 = ${contResult2}<br>Result3 = ${contResult3}<br>Result4 = ${contResult4}`;
    document.getElementById("resultado").innerHTML = ResultadoFinal;

    let maior = 0;
    let pagina;
    let ContadoresEmpatados = 0;

    if (contResult1 > maior) {
        maior = contResult1;
        pagina = 'Result1';
    }
    if (contResult2 > maior) {
        maior = contResult2;
        pagina = 'Result2';
    }
    if (contResult3 > maior) {
        maior = contResult3;
        pagina = 'Result3';
    }
    if (contResult4 > maior) {
        maior = contResult4;
        pagina = 'Result4';
    }
    if (maior == contResult1) {
        ContadoresEmpatados++;
    }
    if (maior == contResult2) {
        ContadoresEmpatados++;
    }
    if (maior == contResult3) {
        ContadoresEmpatados++;
    }
    if (maior == contResult4) {
        ContadoresEmpatados++;
    }

    if (ContadoresEmpatados >= 2) {
        pagina = 'Empate';
    }

    localStorage.setItem('Result1', contResult1);
    localStorage.setItem('Result2', contResult2);
    localStorage.setItem('Result3', contResult3);
    localStorage.setItem('Result4', contResult4);

    setTimeout(() => {
        window.open(pagina + '.html', '_self');
    }, 5000);
}
=======
function advinhar() {
    let contResult1 = 0;
    let contResult2 = 0;
    let contResult3 = 0;
    let contResult4 = 0;

    let OpcoesQuestoes = document.querySelectorAll('input[type="radio"]');

    OpcoesQuestoes.forEach(e => {
        if (e.checked) {
            if (e.value == 'Result1') {
                contResult1++;
            } else if (e.value == 'Result2') {
                contResult2++;
            } else if (e.value == 'Result3') {
                contResult3++;
            } else if (e.value == 'Result4') {
                contResult4++;
            }
        }
    });

    let ResultadoFinal = `Result1 = ${contResult1}<br>Result2 = ${contResult2}<br>Result3 = ${contResult3}<br>Result4 = ${contResult4}`;
    document.getElementById("resultado").innerHTML = ResultadoFinal;

    let maior = 0;
    let pagina;
    let ContadoresEmpatados = 0;

    if (contResult1 > maior) {
        maior = contResult1;
        pagina = 'Result1';
    }
    if (contResult2 > maior) {
        maior = contResult2;
        pagina = 'Result2';
    }
    if (contResult3 > maior) {
        maior = contResult3;
        pagina = 'Result3';
    }
    if (contResult4 > maior) {
        maior = contResult4;
        pagina = 'Result4';
    }
    if (maior == contResult1) {
        ContadoresEmpatados++;
    }
    if (maior == contResult2) {
        ContadoresEmpatados++;
    }
    if (maior == contResult3) {
        ContadoresEmpatados++;
    }
    if (maior == contResult4) {
        ContadoresEmpatados++;
    }

    if (ContadoresEmpatados >= 2) {
        pagina = 'Empate';
    }

    localStorage.setItem('Result1', contResult1);
    localStorage.setItem('Result2', contResult2);
    localStorage.setItem('Result3', contResult3);
    localStorage.setItem('Result4', contResult4);

    setTimeout(() => {
        window.open(pagina + '.html', '_self');
    }, 5000);
}
>>>>>>> 4e26784a662b3ff0db883ac427cd87d1fccacac0
