document.addEventListener("DOMContentLoaded", function () {
    const productDetails = document.getElementById("productDetails");
    const addToCartBtn = document.getElementById("addToCartBtn");

    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get("id");

    if (!productId) {
        productDetails.innerHTML = "<p>Товар не знайдено</p>";
        return;
    }

    fetch("data/products.json")
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (!product) {
                productDetails.innerHTML = "<p>Товар не знайдено</p>";
                return;
            }

            productDetails.innerHTML = `
                <img src="images/products/${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>Ціна:</strong> ${product.price} грн</p>
            `;

            addToCartBtn.onclick = function () {
                addToCart(product.id);
            };
        })
        .catch(error => console.error("Помилка завантаження товару:", error));
});
