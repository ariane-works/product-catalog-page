const products = [
    { name: "Product 1", description: "Description for product 1" },
    { name: "Product 2", description: "Description for product 2" },
    { name: "Product 3", description: "Description for product 3" },
    { name: "Product 4", description: "Description for product 4" },
];

const productContainer = document.getElementById('product-container');
const searchInput = document.getElementById('search');

// Function to display products
function displayProducts(filteredProducts) {
    productContainer.innerHTML = '';
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <h2>${product.name}</h2>
            <p>${product.description}</p>
        `;
        productContainer.appendChild(card);
    });
}

// Initial display
displayProducts(products);

// Filter products based on search input
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filtered = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    displayProducts(filtered);
});
