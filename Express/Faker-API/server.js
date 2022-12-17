const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );

app.get("/api", (req, res) => {
    res.json({ message: "Hello World" });
});
// console.log( faker.commerce.price())

const createUser = () => {
    const newUser={
        password:faker.internet.password(),
        email:faker.internet.email(),
        phoneNumber:faker.phone.phoneNumber() ,
        lastName:faker.name.lastName(),
        firstName:faker.name.firstName(),
        _id:faker.datatype.uuid(),
    }
    return newUser;
}
app.get("/api/users/new", (req,res)=>{
    res.json(createUser())
})

const createCompany =() =>{
    return {
        _id: faker.datatype.uuid(),
        name:faker.company.companyName(),
        address: {
            street:faker.address.street(),
            city: faker.address.city() ,
            state:faker.address.state(),
            zipcode:faker.address.zipCode(),
            country:faker.address.country(),
        }
    }
}

app.get("/api/companies/new", (req,res)=>{
    res.json(createCompany());
})

app.get("/api/user/company", (req,res)=>{
    res.json({
        user: createUser(),
        company: createCompany(),
    });
})
