document.addEventListener('DOMContentLoaded', function() {
    const menuData = [
        { name: 'Burger', price: '$10' },
        { name: 'Pizza', price: '$12' },
        { name: 'Salad', price: '$8' },
        { name: 'Pasta', price: '$11' },
        { name: 'Fries', price: '$5' }
    ];

    const menuContainer = document.getElementById('menu');

    menuData.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item';
        menuItem.innerHTML = `<strong>${item.name}</strong> - ${item.price}`;
        menuContainer.appendChild(menuItem);
    });
});
