document.addEventListener('DOMContentLoaded', () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const captionText = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-lightbox');

    // Abre o lightbox ao clicar na imagem ou no botão do card
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        const img = card.querySelector('.img-trigger');
        const btn = card.querySelector('.btn-ver-projeto');
        const title = card.querySelector('h3').innerText;

        // Função interna para ativar o modal com os dados corretos
        const openModal = () => {
            lightbox.style.display = 'block';
            lightboxImg.src = img.src;
            captionText.innerHTML = `// ${title}`;
        };

        // Evento no clique da imagem do card
        img.addEventListener('click', openModal);
        
        // Evento no clique do botão "Ver Projeto"
        btn.addEventListener('click', openModal);
    });

    // Fecha o lightbox ao clicar no botão "X"
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Fecha o lightbox se o usuário clicar em qualquer lugar fora da imagem
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Fecha o modal ao pressionar a tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
});
