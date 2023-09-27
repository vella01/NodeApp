
const database = require('./../database');

let user = database.users;

user.create({
    id: "002",
    name: "dheeraj-2",
    username: "UN-BE4T4BLE",
    phone: "9910756792",
    mail: "mr.alka2090@gmail.com",
    password: "ggnfy57h"
}).then((value)=>{
    console.log(value+"user created....")
    process.exit()
}, (err)=>{
    console.log(err.message+"err on creating user....")
    process.exit()
});
