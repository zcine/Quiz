function advinhar () {
    const perguntas = document.querySelectorAll('.CartaoFinal');

    for (const pergunta of perguntas) {
        const respostas = pergunta.querySelectorAll('input[type="radio"]');
        const Selecionou = Array.from(respostas).some(radio => radio.checked);

        if (!Selecionou) {
            alert('Por favor, responda todas as perguntas antes de continuar.');
            return;
        }
    }

    let acertos = 0;
    perguntas.forEach(pergunta => {
        const respostaCorreta = pergunta.querySelector('input[type="radio"][value="Acertou"]');
        if (respostaCorreta && respostaCorreta.checked) {
            acertos++;
        }
    });

    let pagina = '';
    if (acertos <= 3) {
        pagina = 'Novato.html';
    } else if (acertos <= 6) {
        pagina = 'Entusiasta.html';
    } else if (acertos <= 9) {
        pagina = 'Especialista.html';
    } else if (acertos === 10) {
        pagina = 'Viciado.html';
    }
    localStorage.setItem('Acertos',acertos);
    alert(`Redirecionando...`);
    setTimeout(() => {
        window.open(pagina);
    }, 5000);
};
