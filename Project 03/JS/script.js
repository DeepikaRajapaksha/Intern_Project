document.addEventListener("DOMContentLoaded", async function () {
    const productListContainer = document.querySelector(".Product-Card-list-wrap");

    try {
        const response = await fetch("https://dummyjson.com/products");

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        const products = data.products;

        productListContainer.innerHTML = ""; 

        products.forEach(product => {
            const productItem = document.createElement("div");
            productItem.classList.add("Product-Card-item");

            productItem.innerHTML = `
                <div class="Product-Card-item-wrap">
                    <p class="product-id">${product.id}</p>
                    <p class="product-title"> ${product.title}</p>
                    <p class="product-description"><br> ${product.description} </p>
                    <p class="product-category"> ${product.category}</p>
                    <p class="product-price"> $${product.price}</p>
                    <p class="product-stock"> ${product.stock}</p>
                </div>
            `;

            productListContainer.appendChild(productItem);
        });

    } catch (error) {
        console.error("Error fetching products:", error);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const stockElements = document.querySelectorAll(".product-stock");

    stockElements.forEach((stockElement) => {
        let stockValue = parseInt(stockElement.textContent.replace("Stock: ", "").trim());

        if (stockValue === 0) {
            stockElement.textContent = "Out of Stock";
            stockElement.style.color = "red";
            stockElement.style.fontWeight = "bold";
        }
    });
});