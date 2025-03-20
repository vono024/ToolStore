function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProduct = cart.find(item => item.id === productId);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        fetch("data/products.json")
            .then(response => response.json())
            .then(products => {
                const product = products.find(p => p.id === productId);
                if (product) {
                    cart.push({ ...product, quantity: 1 });
                    localStorage.setItem("cart", JSON.stringify(cart));
                    updateCartUI();
                }
            })
            .catch(error => console.error("Помилка додавання в корзину:", error));
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cartItems");
    const totalPriceElement = document.getElementById("totalPrice");
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cartItemsContainer.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;

        const listItem = document.createElement("li");
        listItem.innerHTML = `
            ${item.name} (x${item.quantity}) - ${item.price * item.quantity} грн
            <button onclick="removeFromCart(${item.id})">❌</button>
        `;
        cartItemsContainer.appendChild(listItem);
    });

    totalPriceElement.textContent = total;
}

document.addEventListener("DOMContentLoaded", updateCartUI);
