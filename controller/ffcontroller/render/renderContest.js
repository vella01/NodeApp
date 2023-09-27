const fs = require('fs');
const database = require('./../../../database');

let users = database.users;


let index = fs.readFileSync('./templates/freefire/index.pug', 'utf-8');
let contestPug = fs.readFileSync('./templates/freefire/contest.pug', 'utf-8')
let content = index.replace('<!--$[page]-->', contestPug)


let contest = async ()=>{
    let user = await users.find({phone: "8235681352", password: "ggnfy57h"});
    user = user[0];
    if(!user.boutsHistory.data){
        let output = content.replace('<!--$[boutsHistory]-->', user.boutsHistory.defaultData);
        output = output.replace('<!--$[username]-->', user.username);
        return output
    }
    return user.boutsHistory.data;
}

module.exports = contest;