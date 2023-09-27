const fs = require('fs');
const database = require('./../../../database');

let bouts = async ()=>{
    let value = await database.bouts.find();
    return value
};



let index = fs.readFileSync('./templates/freefire/index.pug', 'utf-8');
let home = fs.readFileSync('./templates/freefire/home.pug', 'utf-8');
let producthtml = fs.readFileSync('./templates/freefire/product.pug', 'utf-8')
let content = index.replace('<!--$[toggle-H]-->', 'toggle')
content = content.replace('<!--$[page]-->', home)

exports.value = async ()=>{
    let value = await bouts();
    value = value.map((obj)=>{
            let output = producthtml.replace('<!--$[mode]-->', obj.mode)
            output = output.replace('<!--$[map]-->', obj.map)
            output = output.replace('<!--$[team]-->', obj.team)
            output = output.replaceAll('<!--$[id]-->', obj.id)
            output = output.replace('<!--$[entry]-->', obj.entry)
            output = output.replace('<!--$[month]-->', obj.expiry.month)
            output = output.replace('<!--$[date]-->', obj.expiry.date)
            output = output.replace('<!--$[year]-->', obj.expiry.year)
            output = output.replace('<!--$[time]-->', obj.expiry.time)
            output = output.replace('<!--$[_1]-->', obj._1)
            output = output.replace('<!--$[_2]-->', obj._2)
            output = output.replace('<!--$[_3]-->', obj._3)
            return output;
        });
    value = value.join('')
    content = content.replace('<!--$[Products]-->', value);
    return content;
}
