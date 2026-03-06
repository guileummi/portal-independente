const noticias = [
    {
        titulo: 'Independente vence clássico',
        texto: 'O Independente venceu o clássico por 2x0.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Novo reforço anunciado',
        texto: 'O clube anunciou um novo atacante.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Treino da semana',
        texto: 'Equipe focada no próximo jogo.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Base em destaque',
        texto: 'Sub-20 vence amistoso.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Treino da semana',
        texto: 'Equipe focada no próximo jogo.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Treino da semana',
        texto: 'Equipe focada no próximo jogo.',
        imagem: '/assets/imagens/foto1.png'
    },
    {
        titulo: 'Treino da semana',
        texto: 'Equipe focada no próximo jogo.',
        imagem: '/assets/imagens/foto1.png'
    },
]

const container = window.document.getElementById('container-noticias')

function criarCard(noticia){
    var card = document.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
        <img src="${noticia.imagem}">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.texto}</p>
    `;

    return card
}

function mostrarNoticia(qtd){
    for(var i = 0; i < qtd && i < noticias.length; i++){
    
        var card = criarCard(noticias[i])

        container.appendChild(card)

    }
}

if(container){
    if(window.location.pathname.includes('noticias')){
        mostrarNoticia(noticias.length)
    }else {
        mostrarNoticia(4)
    }
}

