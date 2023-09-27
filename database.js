const mongoose = require('mongoose');

(async ()=>{
    try {
        await mongoose.connect('mongodb://127.0.0.1/XstreamBattle')
        console.log('db connected...')
    } catch (err) {
        console.log(err.message + "db connection failed....")
    }
})();
let userSchema = mongoose.Schema({
    id: {
        type: String,
        unique: true,
        required: true
    },
    uid: {
        type: String,
        unique: true,
        required: true,
        default: + new Date()
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    mail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: new Date().toLocaleString()
    },
    deposit: {
        type: String,
        default: "0"
    },
    refrals: {
        type: Object,
        default: {
            data: "no history found"
        }
    },
    boutsHistory: {
        type: Object,
        default: {
            data: "no history found"
        }
    },
    paymentHistory: {
        type: Object,
        default: {
            data: "no history found"
        }
    }
});

let boutsSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    mode: {
        type: String,
        required: true
    },
    map: {
        type: String,
        required: true
    },
    team: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        required: true,
        default: new Date().toString()
    },
    expiry: {
        type: Object,
        required: true
    },
    entry: {
        type: String,
        required: true
    },
    _1: {
        type: String,
        required: true
    },
    _2: String,
    _3: String
})

exports.users = mongoose.model('users', userSchema);
exports.bouts = mongoose.model('bouts', boutsSchema);
// let activeBouts = mongoose.model('active_bouts', schema);
// let pendingBouts = mongoose.model('pending_bouts', schema);
// let completedBouts = mongoose.model('completed_bouts', schema);
// let productcollection = mongoose.model('products', schema);

// bouts.find().then((value)=>{
//     console.log(value)
// })

// module.exports = bouts;



// bouts.create({
//     id: "2",
//     mode: "Clash Squad",
//     map: "BERMUDA",
//     team: "4v4 limited",
//     expiry: {
//         month: "June",
//         date: "7",
//         year: "2024",
//         time: "21:00"
//     },
//     entry: "450",
//     _1: "770"
// }).then((value)=>{
//     console.log(value+"user created...")
//     process.exit()
// }, (err)=>{
//     console.log(err.message + "error in creating user...")
//     process.exit()
// })


// activeBouts.find().then((value)=>{
//     console.log(value)
// })
// pendingBouts.find().then((value)=>{
//     console.log(value)
// })
// completedBouts.find().then((value)=>{
//     console.log(value)
// })
// usercollection.find({id: 2}).then((value)=>{
// console.log(value[0])
// })
// productcollection.find().then((value)=>{
//     // console.log(value)
// })