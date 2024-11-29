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
        pagina = 'Novato';
    }
    if (contAcertou > maior) {
        pagina = 'Entusiasta';
    }
    if (contAcertou > maior) {
        pagina = 'Especialista';
    }
    if (contAcertou > maior) {
        pagina = 'ViciadoemDoramas';
    }

    localStorage.setItem('Acertos', contAcertou);
    setTimeout(() => {
        window.open(pagina + '.html', '_self');
    }, 5000);
}