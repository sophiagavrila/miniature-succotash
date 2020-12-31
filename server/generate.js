// faker.js is an api used to generate dummy data which I can then pass to an array and display

const faker = require('faker');

let database = { products: [] };

for (let i=0; i<=300; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl: "https://source.unsplash.com/user/erondu/1600x900"
    })
}

console.log(JSON.stringify(database))