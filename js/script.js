function normalizarTexto(texto) {
    return texto
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .trim();
}

const botoesBairros = document.querySelectorAll('.bairroNome');

botoesBairros.forEach(botao => {
    botao.addEventListener('click', () => {
        const listaEscolas = botao.nextElementSibling;
        const campoBusca = document.getElementById('campoBusca');

        if (campoBusca.value !== "") {
            campoBusca.value = "";
            const cardsEscolas = document.querySelectorAll('.escolaCard');
            cardsEscolas.forEach(card => card.style.display = "");
        }

        botao.classList.toggle('active');
        listaEscolas.classList.toggle('active');
    });
});

function pesquisar() {
    const termoBuscaRaw = document.getElementById('campoBusca').value;
    const termoBusca = normalizarTexto(termoBuscaRaw);
    const secoesBairros = document.querySelectorAll('.bairro');
    const cardsEscolas = document.querySelectorAll('.escolaCard');
    const aviso = document.querySelector('.naoEncontrado');

    if (termoBusca === "") {
        aviso.style.display = "none";

        secoesBairros.forEach(secao => {
            secao.style.display = "";
            const botao = secao.querySelector('.bairroNome');
            const lista = secao.querySelector('.listaEscolas');
            botao.classList.remove('active');
            lista.classList.remove('active');
            botao.style.display = "";
        });

        cardsEscolas.forEach(card => card.style.display = "");
        return;
    }

    cardsEscolas.forEach(card => {
        const nomeEscolaRaw = card.querySelector('h3').textContent;
        const nomeEscola = normalizarTexto(nomeEscolaRaw);

        if (nomeEscola.includes(termoBusca)) {
            card.style.display = "";
        } else {
            card.style.display = 'none';
        }
    });

    let totalEscolasEncontradas = 0;
    let primeiroItem = false;

    secoesBairros.forEach(secao => {
        const lista = secao.querySelector('.listaEscolas');
        const botao = secao.querySelector('.bairroNome');
        const escolasVisiveis = lista.querySelectorAll('.escolaCard:not([style*="display: none"])');
        totalEscolasEncontradas += escolasVisiveis.length;

        secao.style.display = "";
        botao.style.display = "";

        if (escolasVisiveis.length > 0) {
            botao.classList.add('active');
            lista.classList.add('active');

            if (!primeiroItem) {
                secao.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                primeiroItem = true;
            }

        } else {
            botao.classList.remove('active');
            lista.classList.remove('active');
        }
    });

    if (totalEscolasEncontradas === 0) {
        aviso.style.display = "block";
    } else {
        aviso.style.display = "none";
    }
}

document.getElementById('campoBusca').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        pesquisar();
    }
});

const cards = document.querySelectorAll('.escolaCard');

cards.forEach(card => {
    card.addEventListener('click', () => {
        const urlMaps = card.getAttribute('data-maps');

        if (urlMaps) {
            window.open(urlMaps, '_blank');
        }
    });
});