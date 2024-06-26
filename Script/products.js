// Create products and store it on the local storage
let wrapper = document.querySelector('[data-products]');
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        id: 1,
                        productName: "Attack ON Titan",
                        category: "Manga",
                        description: "Join the intense and thrilling battle for humanity's survival against monstrous Titans in this gripping manga series.",
                        amount: 500.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/AOT.jpg"
                      },
                      {
                        id: 2,
                        productName: "Black Clover",
                        category: "Manwaha",
                        description: "Dive into a world where magic and adventure collide, following the journey of a boy determined to become the Wizard King.",
                        amount: 250.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/BlackClover.png"
                      },
                      {
                        id: 3,
                        productName: "Death Note",
                        category: "Manga",
                        description: "Discover the dark and gripping story of a high school student who wields a notebook with the power to kill anyone whose name he writes in it.",
                        amount: 990.99,
                        img_url: "https://azharjacobs.github.io/Images/Images/Death.png"
                      },
                      {
                        id: 4,
                        productName: "Demon Slayer",
                        category: "Manwaha",
                        description: "Embark on a heart-pounding quest to save humanity from demons, led by a young boy determined to avenge his family.",
                        amount: 1000.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/DemonSlayer.jpg"
                      },
                      {
                        id: 5,
                        productName: "Fairy Tale",
                        category: "Manga",
                        description: "Experience the magical and adventurous world of a guild of wizards as they take on exciting and dangerous quests.",
                        amount: 450.00,
                        img_ur: "https://azharjacobs.github.io/Images/Images/Fairy.jpg"
                      },
                      {
                        id: 6,
                        productName: "SpyXFamily",
                        category: "Manwaha",
                        description: "Uncover the humorous and heartwarming story of a spy who creates a fake family for his mission, only to discover that they are anything but ordinary.",
                        amount: 652.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/family.jpg"
                      },
                      {
                        id: 7,
                        productName: "My Hero Academia",
                        category: "Manga",
                        description: "Follow the journey of young heroes in training as they strive to become the greatest superheroes in a world where nearly everyone has superpowers.",
                        amount: 862.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Hero.png"
                      },
                      {
                        id: 8,
                        productName: "Hunter x Hunter",
                        category: "Manwaha",
                        description: "Join the thrilling adventures of a young boy searching for his father and uncovering his true potential as a Hunter.",
                        amount: 159.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/HxH.png"
                      },
                      {
                        id: 9,
                        productName: "Naruto",
                        category: "Manga",
                        description: "Follow the epic journey of a young ninja with dreams of becoming the strongest ninja and earning the respect of his village.",
                        amount: 759.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Naruto.jpg"
                      },
                      {
                        id: 10,
                        productName: "Solo Leveling",
                        category: "Manwaha",
                        description: "Witness the rise of an ordinary hunter who transforms into the ultimate hunter through relentless leveling and battles.",
                        amount: 1596.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/SoloLvl.jpg"
                      },
                      {
                        id: 11,
                        productName: "Toradora",
                        category: "Manga",
                        description: "Delve into the charming and unexpected story of love and friendship between two high school students with seemingly opposite personalities.",
                        amount: 100.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Tora.jpeg"
                      },
                      {
                        id: 12,
                        productName: "Jujutsu Kaisen",
                        category: "Manwaha",
                        description: "Enter a world where a young sorcerer battles against cursed spirits to protect humanity from supernatural threats.",
                        amount: 852.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/jjk.jpg"
                      },

                ]
            )
        );

// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear();

// Function to display products
function displayProducts(products) {
    // Clear the wrapper before appending new products
    wrapper.innerHTML = '';

    // Iterate through each product and append to the wrapper
    products.forEach(product => {
        wrapper.innerHTML += `
            <div class="card">
                <img src="${product.img_url}" class="card-img-top" alt="${product.id}" loading='lazy'>
                <div class="card-body">
                    <h5 class="card-title">${product.productName}</h5>
                    <p class="card-text">Category: ${product.category}</p>
                    <p class="card-text">Description${product.description}</p>
                    <p class="card-text">Price${product.amount}</p>
                    <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                </div>
            </div>
        `;
    });
}

// Initial display of products
displayProducts(products);

// Search product
let productSearch = document.querySelector('[data-search-product]');
productSearch.addEventListener('input', () => {
    try {
        let searchItem = products.filter(item => {
            return item.productName.toLowerCase().includes(productSearch.value.toLowerCase());
        });
        displayProducts(searchItem);
    } catch (e) {
        alert('Function is under maintenance');
    }
});

// Sorting by ascending and descending
let productSort = document.querySelector('[sorting]');
let highest = false;
productSort.addEventListener('click', () => {
    try {
        if (!highest) {
            products.sort((a, b) => b.amount - a.amount);
            highest = true;
        } else {
            products.sort((a, b) => a.amount - b.amount);
            highest = false;
        }
        displayProducts(products);
    } catch (e) {
        alert('This Function is under maintenance');
    }
});

// Add to cart
let cart = JSON.parse(localStorage.getItem('checkout')) || [];
function addToCart(product) {
    try {
        cart.push(product);
        localStorage.setItem('checkout', JSON.stringify(cart));
        document.querySelector('[counter]').textContent = cart.length || 0;
    } catch (e) {
        alert('The Checkout is under maintenance');
    }
}
window.onload = () => {
    document.querySelector('[counter]').textContent = cart.length || 0;
};