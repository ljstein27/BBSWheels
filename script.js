// simple interactive shopping cart logic & smooth feedback

document.addEventListener('DOMContentLoaded', () => {
    let cartCount = 0;
    const cartCountElement = document.getElementById('cartCount');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const wheelName = e.target.getAttribute('data-name');
            const wheelPrice = e.target.getAttribute('data-price');
            
            // increment cart count
            cartCount++;
            cartCountElement.textContent = cartCount;

            // simple visual feedback
            const originalText = e.target.textContent;
            e.target.textContent = 'Added Successfully!';
            e.target.style.backgroundColor = '#28a745';
            e.target.style.borderColor = '#28a745';

            setTimeout(() => {
                e.target.textContent = originalText;
                e.target.style.backgroundColor = 'transparent';
                e.target.style.borderColor = '#444';
            }, 1500);

            console.log(`Added to cart: ${wheelName} ($${wheelPrice})`);
        });
    });

    // cart button interaction
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.addEventListener('click', () => {
        if (cartCount === 0) {
            alert('Your cart is currently empty.');
        } else {
            alert(`You have ${cartCount} item(s) selected in your configuration cart.`);
        }
    });
});
