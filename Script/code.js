// Create products and store it on the local storage
let wrapper = document.querySelector('[recentProducts]')
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
                        description: "Dell Latitude E5450 i3 5th GEN 1 for business. RAM 8GB, HDD 1TB",
                        amount: 500.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/AOT.jpg"
                    },
                    {
                        id: 2,
                        productName: "Black Clover",
                        category: "Manwaha",
                        description: "Allow you to create, edit, delete, task including sorting tasks by ascending",
                        amount: 250.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/BlackClover.png"
                    },
                    {
                        id: 3,
                        productName: "Death Note",
                        category: "Manga",
                        description: "Python Programming for Beginners",
                        amount: 990.99,
                        img_url: "https://azharjacobs.github.io/Images/Images/Death.png"
                    },
                    {
                        id: 4,
                        productName: "Demon Slayer",
                        category: "Manwaha",
                        description: "Mastering C++ Programming",
                        amount: 1000.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/DemonSlayer.jpg"
                    },
                    {
                        id: 5,
                        productName: "Fairy Tale",
                        category: "Manga",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 450.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Fairy.jpg"
                    },
                    {
                        id: 6,
                        productName: "SpyXFamily",
                        category: "Manwaha",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 652.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/family.jpg"
                    },
                    {
                        id: 7,
                        productName: "My Hero Academia",
                        category: "Manga",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 862.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Hero.png"
                    },
                    {
                        id: 8,
                        productName: "hunter x hunter",
                        category: "Manwaha",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 159.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/HxH.png"
                    },
                    {
                        id: 9,
                        productName: "Naruto",
                        category: "Manga",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 759.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Naruto.jpg"
                    },
                    {
                        id: 10,
                        productName: "Solo Leveling",
                        category: "Manwaha",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 1596.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/SoloLvl.jpg"
                    },
                    {
                        id:11,
                        productName: "Toradora",
                        category: "Manga",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 100.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/Tora.jpg"
                    },
                    {
                        id: 12,
                        productName: "Jujutsu Kaisen",
                        category: "Manwaha",
                        description: "HP Elite Book Intel Core i5 1135G7 SSD 256GB  RAM 8GB",
                        amount: 852.00,
                        img_url: "https://azharjacobs.github.io/Images/Images/jjk.jpg"
                    },

                ]
            )
        )
// Current year
document.querySelector('[currentYear]').textContent =
    new Date().getUTCFullYear()
function recentProducts() {
    try {
        let arrSize = products.length
        let latestProducts = products.reverse().slice(0, arrSize >> 1)
        latestProducts.forEach(product => {
            wrapper.innerHTML += `
        <div class="card">
            <img src="${product.img_url}" class="card-img-top" alt="${product.productName}" loading='lazy'>
            <div class="card-body">
                <h5 class="card-title">${product.productName}</h5>
                <p class="card-text">${product.description}</p>
            </div>
        </div>
    `
        })
    } catch (e) {
        wrapper.textContent = "Please contact our administrator"
        setTimeout(() => {
            location.reload()
        },
            2000
        )
    }
}
recentProducts()
// Counter
window.onload = () => {
    document.querySelector('[counter]').textContent = JSON.parse(localStorage.getItem('checkout'))
        ? JSON.parse(localStorage.getItem('checkout')).length
        : 0
}