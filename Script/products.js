// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
let products =
    JSON.parse(localStorage.getItem('products'))
        ? JSON.parse(localStorage.getItem('products'))
        : localStorage.setItem('products',
            JSON.stringify(
                [
                    {
                        productName: "Attack ON Titan",
                        category: "Manga",
                        description: "Join the intense and thrilling battle for humanity's survival against monstrous Titans in this gripping manga series.",
                        amount: 500.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/AOT.jpg"
                      },
                      {
                        productName: "Black Clover",
                        category: "Manwaha",
                        description: "Dive into a world where magic and adventure collide, following the journey of a boy determined to become the Wizard King.",
                        amount: 250.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/BlackClover.png"
                      },
                      {
                        productName: "Death Note",
                        category: "Manga",
                        description: "Discover the dark and gripping story of a high school student who wields a notebook with the power to kill anyone whose name he writes in it.",
                        amount: 990.99,
                        img_url: "https://azharjacobs.github.io/Images/Images/Death.png"
                      },
                      {
                        productName: "Demon Slayer",
                        category: "Manwaha",
                        description: "Embark on a heart-pounding quest to save humanity from demons, led by a young boy determined to avenge his family.",
                        amount: 1000.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/DemonSlayer.jpg"
                      },
                      {
                        productName: "Fairy Tale",
                        category: "Manga",
                        description: "Experience the magical and adventurous world of a guild of wizards as they take on exciting and dangerous quests.",
                        amount: 450.00,
                        img_ur: "https://azharjacobs.github.io/Images/Images/Fairy.jpg"
                      },
                      {
                        productName: "SpyXFamily",
                        category: "Manwaha",
                        description: "Uncover the humorous and heartwarming story of a spy who creates a fake family for his mission, only to discover that they are anything but ordinary.",
                        amount: 652.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/family.jpg"
                      },
                      {
                        productName: "My Hero Academia",
                        category: "Manga",
                        description: "Follow the journey of young heroes in training as they strive to become the greatest superheroes in a world where nearly everyone has superpowers.",
                        amount: 862.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Hero.png"
                      },
                      {
                        productName: "Hunter x Hunter",
                        category: "Manwaha",
                        description: "Join the thrilling adventures of a young boy searching for his father and uncovering his true potential as a Hunter.",
                        amount: 159.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/HxH.png"
                      },
                      {
                        productName: "Naruto",
                        category: "Manga",
                        description: "Follow the epic journey of a young ninja with dreams of becoming the strongest ninja and earning the respect of his village.",
                        amount: 759.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Naruto.jpg"
                      },
                      {
                        productName: "Solo Leveling",
                        category: "Manwaha",
                        description: "Witness the rise of an ordinary hunter who transforms into the ultimate hunter through relentless leveling and battles.",
                        amount: 1596.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/SoloLvl.jpg"
                      },
                      {
                        productName: "Toradora",
                        category: "Manga",
                        description: "Delve into the charming and unexpected story of love and friendship between two high school students with seemingly opposite personalities.",
                        amount: 100.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Tora.jpg"
                      },
                      {
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

function recentProducts() {
    try {
        products.forEach(product => {
            wrapper.innerHTML += `
                <div class="card">
                    <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
                    <div class="card-body">
                        <h5 class="card-title">${product.productName}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.amount}</p>
                        <button type='button' class="btn btn-success" onclick='addToCart(${JSON.stringify(product)})'>Add to cart</button>
                    </div>
                </div>
            `;
        });
    } catch (e) {
        wrapper.textContent = "Please contact our administrator";
        setTimeout(() => {
            location.reload();
        }, 2000);
    }
}

recentProducts();

// keyup
searchProduct.addEventListener('keyup', () => {
    try {
        if (searchProduct.value.length < 1) {
            displayProducts(products)
        }
        let filteredProduct = products.filter(product => product.productName.toLowerCase().includes(searchProduct.value))
        displayProducts(filteredProduct)
        if (!filteredProduct.length) throw new Error(`${searchProduct.value} product was not found`)
    } catch (e) {
        container.textContent = e.message || 'Please try again later'
    }
})
// Sorting by ascending and descending
let isToggle = false
sortingByAmount.addEventListener('click', () => {
    try {
        if (!products) throw new Error('Please try again later')
        if (!isToggle) {
            products.sort((a, b) => b.amount - a.amount)
            sortingByAmount.textContent = 'Sorted by highest amount'
            isToggle = true
        } else {
            products.sort((a, b) => a.amount - b.amount)
            sortingByAmount.textContent = 'Sorted by lowest amount'
            isToggle = false
        }
        displayProducts(products)
    } catch (e) {
        container.textContent = e.message || 'We are working on this issue'
    }
})
// Add to cart
function addToCart(product) {
    try {
        checkoutItems.push(product)
        localStorage.setItem('checkout', JSON.stringify(checkoutItems))
        document.querySelector('[counter]').textContent = checkoutItems.length || 0
    } catch (e) {
        alert("Unable to add to cart")
    }
}
window.onload = () => {
    document.querySelector('[counter]').textContent = checkoutItems.length || 0
}