document.addEventListener("DOMContentLoaded", function () {
    const adminPanel = document.getElementById("adminPanel");
    const productForm = document.getElementById("productForm");
    const productList = document.getElementById("productList");

    function loadProducts() {
        fetch("data/products.json")
            .then(response => response.json())
            .then(products => {
                productList.innerHTML = "";
                products.forEach(product => {
                    const listItem = document.createElement("li");
                    listItem.innerHTML = `
                        ${product.name} - ${product.price} грн
                        <button onclick="deleteProduct(${product.id})">❌ Видалити</button>
                    `;
                    productList.appendChild(listItem);
                });
            });
    }

    productForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const name = document.getElementById("productName").value;
        const price = parseFloat(document.getElementById("productPrice").value);

        // Логіка додавання товару (не зберігається в JSON, бо JSON статичний)
        alert("Товар додано (на практиці потрібно API)");
    });

    loadProducts();
});
