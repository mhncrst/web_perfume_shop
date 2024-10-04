document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart');
    const totalCostElement = document.getElementById('total-cost');
    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Afișarea produselor din coș, fără a le mai adăuga o dată  
    cartItemsContainer.innerHTML = '';  
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price} RON`;
        cartItemsContainer.appendChild(listItem);
    });

    // Actualizează costul total
    updateTotalCost(cart);

    clearCartButton.addEventListener('click', () => {
        // Resetarea coșului de cumpărături
        cartItemsContainer.innerHTML = '';
        totalCostElement.textContent = 'Cost total: 0 RON';
        localStorage.removeItem('cart');
        changeButtonProperties(clearCartButton);
    });

    function updateTotalCost(cart) {
        const totalCost = cart.reduce((accumulator, item) => accumulator + item.price, 0);
        totalCostElement.textContent = `Cost total: ${Math.round(totalCost * 100) / 100} RON`;
    }

    function changeButtonProperties(button) {
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A1'];
        const sizes = ['0.5rem 1rem', '0.75rem 1.5rem', '1rem 2rem', '1.25rem 2.5rem', '1.5rem 3rem'];

        

        // Schimbă dimensiunea aleatorie
        const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
        button.style.padding = randomSize;
    }

    // Cod pentru formularul de votare
    const voteForm = document.getElementById('vote-form');
    const brandSelect = document.getElementById('brand');
    const brandError = document.getElementById('brand-error');

    voteForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const selectedBrand = brandSelect.value;

        if (!selectedBrand) {
            brandError.textContent = 'Vă rugăm să selectați un brand.';
            brandError.style.display = 'block';
        } else {
            brandError.style.display = 'none';
            alert(`Mulțumim pentru vot! Ai votat pentru ${selectedBrand}.`);
            voteForm.reset(); // Resetează formularul după vot
        }
    });

    // Resetăm mesajele de eroare când utilizatorul selectează o opțiune
    brandSelect.addEventListener('change', () => {
        brandError.style.display = 'none';
    });
});
