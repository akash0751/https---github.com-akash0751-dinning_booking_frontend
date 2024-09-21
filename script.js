let cart = [];

function addToCart(itemName, itemPrice) {
    cart.push({ name: itemName, price: itemPrice });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const totalElement = document.getElementById("total");
    cartList.innerHTML = "";
    
    let total = 0;

    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);

        total += item.price;
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    
    cart = [];
    updateCart();
}
