document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById("products");

    fetch("data/products.json")
        .then(response => response.json())
        .then(products => {
            productsContainer.innerHTML = "";
            products.forEach(product => {
                const productCard = document.createElement("div");
                productCard.classList.add("product-card");

                productCard.innerHTML = `
                    <a href="product.html?id=${product.id}" class="product-link">
                        <img src="images/products/${product.image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                        <p>Ціна: ${product.price} грн</p>
                    </a>
                    <button onclick="addToCart(${product.id})">Додати в корзину</button>
                `;

                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => console.error("Помилка завантаження товарів:", error));
});
