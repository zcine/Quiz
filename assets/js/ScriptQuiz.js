function advinhar() {
    let contAcertou = 0;

    let OpcoesQuestoes = document.querySelectorAll('input[type="radio"]');

    OpcoesQuestoes.forEach(e => {
        if (e.checked) {
            if (e.value == 'Acertou') {
                contAcertou++;
            }
        }
    });

    let pagina;
    if (contAcertou == 10) {
        pagina = 'ViciadoemDoramas';
        //Se acertou 10
    } else if (contAcertou > 6) {
        pagina = 'Especialista';
        //Se acertou 7, 8, 9
    } else if (contAcertou > 3) {
        pagina = 'Entusiasta';
        //Se acertou 4, 5, 6
    } else {
        pagina = 'Novato';
        //Se acertou 0, 1, 2, 3
    }

    localStorage.setItem('Acertos', contAcertou);
    setTimeout(() => {
        window.open(pagina + '.html', '_self');
    }, 5000);
}