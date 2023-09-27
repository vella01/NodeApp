const DB = require('./../../newdatabase');

let bouts = DB.boutsModel;
let users = DB.usersModel;



let createbouts = async ()=>{
    try{
        let value = await bouts.create([
        {
            uid: "11113",
            regularId: {
                id: "003"
            },
            thumbnail: "abhi img ka location decide nahi hua hai...",
            expiry: {
                month: "Sep",
                date: "27",
                year: "2023",
                hour: "16",
                minutes: "00",
                id: +new Date("september 27 2023 16:0:0")
            },
            entry: "270",
            _1: "6700",
            _2: "2400",
            _3: "730"
        },
        {
            uid: "11114",
            regularId: {
                id: "004"
            },
            thumbnail: "abhi img ka location decide nahi hua hai...",
            expiry: {
                month: "Sep",
                date: "27",
                year: "2023",
                hour: "16",
                minutes: "00",
                id: +new Date("september 27 2023 16:0:0")
            },
            entry: "270",
            _1: "6700",
            _2: "2400",
            _3: "730"
        },
        {
            uid: "11115",
            regularId: {
                id: "005"
            },
            thumbnail: "abhi img ka location decide nahi hua hai...",
            expiry: {
                month: "Sep",
                date: "27",
                year: "2023",
                hour: "16",
                minutes: "00",
                id: +new Date("september 27 2023 16:0:0")
            },
            entry: "270",
            _1: "6700",
            _2: "2400",
            _3: "730"
        },
        {
            uid: "11116",
            regularId: {
                id: "006"
            },
            thumbnail: "abhi img ka location decide nahi hua hai...",
            expiry: {
                month: "Sep",
                date: "27",
                year: "2023",
                hour: "16",
                minutes: "00",
                id: +new Date("september 27 2023 16:0:0")
            },
            entry: "270",
            _1: "6700",
            _2: "2400",
            _3: "730"
        }]);
        console.log(value)
        console.log("Bouts Created Successefully...")
    }catch(err){
        console.log(err);
    }
};
// bouts.find({'regularId.id': "001"}).then((value)=>{
//     console.log(value[0])
// })
createbouts();

let createUser = async ()=>{
    try{
        let value = await users.create({
            uid: "11111",
            ffuid: "2206129546",
            name: "dheeraj",
            phone: "8235681352",
            mail: "mr.oops2090@gmail.com",
            password: "ggnfy57h"
        });
        console.log(value);
        console.log("user Created...")
    }catch(err){
        console.log(err.message)
    }
};

// users.find({phone: "8235681352", password: "ggnfy57h"}).then((value)=>{
//     console.log(value[0])
// })
