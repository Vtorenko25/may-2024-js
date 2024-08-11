for(let i = 1; i <= 10; i++){
    document.write(`<div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, voluptate.</p></div>`);
}

for(let i = 1; i <= 10; i++){
    document.write(`<div><p>${i} Lorem ipsum dolor sit amet.</p></div>`);
}

let j = 1;
while (j <= 20){
    document.write(`<h1>Lorem ipsum dolor sit amet.</h1>`);
    j++;
}

let k = 1;
while (k <= 20){
    document.write(`<h1>${k} Lorem ipsum dolor sit amet.</h1>`);
    k++;
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
for (let i = 0; i < listOfItems.length; i++) {
    const listOfItem = listOfItems[i];
    document.write(`<ul class="listOfItem">
        <li>${listOfItem}</li>
</ul>`)
}

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://content.rozetka.com.ua/goods/images/big_tile/305913458.jpg'
    },
];

for (let product of products){
    document.write(
        `<div class="product-card">
                <h3 class="product-title">${product.title}. Price - ${product.price}</h3>
                <img src="${product.image}" alt="${product.title}">
        </div>`
    )
}

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

for (let user of users){
    if(user.status){
        document.write(
            `<div>
          <h3>Name - ${user.name}, Status - ${user.status}</h3>
        </div>`);
    }
}
for (let user of users){
    if(!user.status){
        document.write(
            `<div>
          <h3>Name - ${user.name}, Status - ${user.status}</h3>
        </div>`);
    }
}
for (let user of users){
    if(user.age > 30){
        document.write(
            `<div>
          <h3>Name - ${user.name}, Status - ${user.age}</h3>
        </div>`);
    }
}



