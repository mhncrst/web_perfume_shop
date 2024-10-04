document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            addToCart(product);
        });
    });
});

function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Extrage numele și prețul din string folosind regex
    const productDetails = product.match(/(.+) \((pret: ?(\d+) lei)\)/);
    if (productDetails) {
        const productObject = {
            name: productDetails[1].trim(),
            price: parseFloat(productDetails[3])
        };
        cart.push(productObject);
        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${productObject.name} a fost adăugat în coș cu prețul de ${productObject.price} lei.`);
    } else {
        alert('Eroare la adăugarea produsului în coș.');
    }
}
