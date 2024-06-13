// Retrieve products from localStorage or initialize with default products
let products = JSON.parse(localStorage.getItem('products')) || [];

// Reference to table content
let tableContent = document.querySelector('#table-products');

// Function to display products in the admin table with a modal for editing
function adminContent(args) {
    try {
        tableContent.innerHTML = "";
        args?.forEach((product, i) => {
            tableContent.innerHTML += `
            <tr>
                <td>${product.productName}</td>
                <td>${product.category}</td>
                <td><img src="${product.img_url}" alt="${product.id}" class="img-thumbnail h-25 w-25"></td>
                <td>${product.description}</td>
                <td>R${product.amount}</td>
                <td>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-secondary me-2" data-bs-toggle="modal" data-bs-target="#updateProduct${product.id}">Update</button>
                        <button class="btn btn-secondary ms-2" onclick="deleteProduct(${i})">Delete</button>
                        <div class="modal fade" id="updateProduct${product.id}" tabindex="-1" aria-labelledby="updateProduct${product.id}" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="updateProduct${product.id}">Update Product</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <form>
                                            <div class="container">
                                                <input class="form-control m-2" type="text" placeholder="Enter a Product Name" value="${product.productName}" name="admin-name" id="admin-name${product.id}" required>
                                                <input class="form-control m-2" type="text" placeholder="Enter Image URL" value="${product.img_url}" name="admin-image" id="admin-image${product.id}" required>
                                                <textarea class="form-control m-2" placeholder="Enter Product details" required name="admin-description" id="admin-description${product.id}">${product.description}</textarea>
                                                <input class="form-control m-2" type="text" placeholder="Enter Product Category" value="${product.category}" name="admin-category" id="admin-category${product.id}" required>
                                                <input class="form-control m-2" type="number" placeholder="Enter the Product Amount" value="${product.amount}" name="admin-amount" id="admin-amount${product.id}" required>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-secondary" onclick='updateProduct(${i})'>Save changes</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
            `;
        });
    } catch (e) {
        tableContent.innerHTML = `
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status"></div>
            <p>No Products Found</p>
        </div>
        `;
    }
}

// Call the function to display the initial products
adminContent(products);

// Function to update the product
function updateProduct(index) {
    try {
        const updatedProduct = {
            id: products[index].id,
            productName: document.querySelector(`#admin-name${products[index].id}`).value,
            img_url: document.querySelector(`#admin-image${products[index].id}`).value,
            description: document.querySelector(`#admin-description${products[index].id}`).value,
            category: document.querySelector(`#admin-category${products[index].id}`).value,
            amount: parseInt(document.querySelector(`#admin-amount${products[index].id}`).value, 10)
        };
        products[index] = updatedProduct;
        localStorage.setItem('products', JSON.stringify(products));
        adminContent(products);
    } catch (e) {
        alert('Unable to Edit the Products');
    }
}

// Function to delete the product
function deleteProduct(index) {
    try {
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        adminContent(products);
    } catch (e) {
        alert('Unable to Delete');
    }
}

// Function to sort the products
let highest = false;
document.getElementById('adminSortProduct').addEventListener('click', () => {
    try {
        if (!highest) {
            products.sort((a, b) => b.id - a.id);
            highest = true;
        } else {
            products.sort((a, b) => a.id - b.id);
            highest = false;
        }
        adminContent(products);
    } catch (e) {
        alert('This Function is under maintenance');
    }
});

// Function to add new product
let adminSavedProduct = document.getElementById('saveProduct');
adminSavedProduct.addEventListener('click', () => {
    try {
        const newProduct = {
            id: products.length ? products[products.length - 1].id + 1 : 1, // auto increment ID
            productName: document.querySelector('#addName').value,
            description: document.querySelector('#addDetail').value,
            category: document.querySelector('#addCategory').value,
            amount: parseInt(document.querySelector('#addAmount').value, 10),
            img_url: document.querySelector('#addImage').value
        };
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        adminContent(products);
        document.querySelector('#addName').value = '';
        document.querySelector('#addDetail').value = '';
        document.querySelector('#addCategory').value = '';
        document.querySelector('#addAmount').value = '';
        document.querySelector('#addImage').value = '';
    } catch (e) {
        alert('Unable to Add new product');
    }
});


