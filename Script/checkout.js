// Setting the footer year
document.querySelector('#current-year').textContent = new Date().getFullYear();

// Getting cart items from localStorage
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
let checkoutTable = document.querySelector('[table-checkout]');

// Displaying cart items
function cartItems() {
    if (cart.length === 0) {
        checkoutTable.innerHTML = "<tr><td colspan='4'>Add items to your cart</td></tr>";
        return;
    }

    let cartProducts = cart.reduce((groupedItems, item) => {
        if (!groupedItems[item.id]) {
            groupedItems[item.id] = [];
        }
        groupedItems[item.id].push(item);
        return groupedItems;
    }, {});

    let tableContent = "";
    for (let id in cartProducts) {
        let productGroup = cartProducts[id];
        let product = productGroup[0];
        let quantity = productGroup.length;
        let amount = product.amount;
        let total = amount * quantity;

        tableContent += 
            `<tr>
                <td>${product.productName}</td>
                <td>${quantity}</td>
                <td>${amount}</td>
                <td>${total}</td>
            </tr>`;
    }
    checkoutTable.innerHTML = tableContent;
}
cartItems();

// Clearing the cart
function clearProducts() {
    localStorage.removeItem('checkout');
    alert('Press "OK" to remove items from your cart');
    location.reload();
}

// Processing payment
function productPayment() {
    localStorage.removeItem('checkout');
    alert('Payment Successful');
    location.reload();
}
