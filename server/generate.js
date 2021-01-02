// faker.js is an api used to generate dummy data which I can then pass to an array and display

const faker = require('faker');

let database = { products: [] };

for (let i=0; i<=300; i++) {
    database.products.push({
        id: i,
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        imageUrl:  faker.random.arrayElement([
            faker.image.nature(), 
            faker.image.city(), 
            faker.image.food()]), 
        quantity: faker.random.number()
    })
}

console.log(JSON.stringify(database))