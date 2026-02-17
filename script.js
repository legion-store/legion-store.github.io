// CLIQUE EM ITEM → MOSTRA DETALHES
document.addEventListener('DOMContentLoaded', function() {
    const slots = document.querySelectorAll('.clicavel');
    
    slots.forEach(slot => {
        slot.addEventListener('click', function() {
            const itemId = this.dataset.item;
            const preview = document.getElementById('itemPreview');
            
            // MOSTRA ITEM SELECIONADO
            preview.innerHTML = `
                <div class="item-detail">
                    <div class="item-icon" style="background-image: url('https://via.placeholder.com/120x120?text=Item${itemId}');"></div>
                    <h4 class="item-nome">Nome do Item ${itemId}</h4>
                    <p class="item-desc">Descrição completa do item aqui. Stats, origem, efeitos especiais.</p>
                </div>
            `;
            
            // HIGHLIGHT SLOT SELECIONADO
            document.querySelectorAll('.inventory-slot').forEach(s => s.style.borderColor = '#555');
            this.style.borderColor = '#d4af37';
        });
    });
});
