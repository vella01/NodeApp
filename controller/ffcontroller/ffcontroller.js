const express = require('express');
const mongoose = require('mongoose')
const fs = require('fs');
const app = express()

let index = fs.readFileSync('./templates/freefire/index.pug', 'utf-8');
let homePug = fs.readFileSync('./templates/freefire/home.pug', 'utf-8')
let boutsPug = fs.readFileSync('./templates/freefire/bouts.pug', 'utf-8')
let boutsDetailsPug = fs.readFileSync('./templates/freefire/bouts-details.pug', 'utf-8')
let contestPug = fs.readFileSync('./templates/freefire/contest.pug', 'utf-8')
let profilePug = fs.readFileSync('./templates/freefire/profile.pug', 'utf-8')
let paymentPug = fs.readFileSync('./templates/freefire/payment.pug', 'utf-8')



const database = require('./../../newdatabase');
let usersDB = database.usersDB;
let userHistorySchema = database.userHistorySchema;
let boutsModel = database.boutsModel;
let usersModel = database.usersModel;

exports.home = async (req, res)=>{
    req.user = "8235681352";
    let home_2 = index.replace('<!--$[toggle-H]-->', 'toggle')
    home_2 = home_2.replace('<!--$[page]-->', homePug);

    //return user registered contest
    let userUpcomingContest;
    if(req.user){
        let user = await usersModel.find({phone: req.user});
        let uid = user[0].uid;
        let userHistoryModel = usersDB.model(uid, userHistorySchema);
        userUpcomingContest = await userHistoryModel.find({status: "upcoming"});
        userUpcomingContest = userUpcomingContest.map((obj)=>{
            return obj.boutsId
        });
    };
    let bouts = await boutsModel.find({staus: 'upcoming'});
    if(req.user){
        userUpcomingContest.forEach(element => {
            bouts = bouts.filter((obj)=>{
                return obj.uid != element;
            });
        });
    };
    bouts = bouts.map((obj)=>{
        let output = boutsPug.replace('<!--$[mode]-->', obj.gameMode)
        output = output.replace('<!--$[map]-->', obj.map)
        output = output.replace('<!--$[team]-->', obj.teamMode)
        output = output.replaceAll('<!--$[id]-->', obj.regularId.id)
        output = output.replace('<!--$[map]-->', obj.map)
        output = output.replace('<!--$[month]-->', obj.expiry.month)
        output = output.replace('<!--$[date]-->', obj.expiry.date)
        output = output.replace('<!--$[year]-->', obj.expiry.year)
        output = output.replace('<!--$[hour]-->', obj.expiry.hour)
        output = output.replace('<!--$[minutes]-->', obj.expiry.minutes)
        output = output.replace('<!--$[_1]-->', obj._1)
        output = output.replace('<!--$[_2]-->', obj._2)
        output = output.replace('<!--$[_3]-->', obj._3)
        output = output.replace('<!--$[entry]-->', obj.entry)

        return output;
    });
    bouts = bouts.join('');
    home_2 = home_2.replace('<!--$[Products]-->', bouts);
    res.send(home_2)
}     
exports.homeProduct = async (req, res)=>{
    let id = req.query.id;
    let bout = await boutsModel.find({'regularId.id': id})
    bout = bout[0];
    let output = boutsDetailsPug.replace('<!--$[mode]-->', bout.gameMode)
    output = output.replace('<!--$[map]-->', bout.map)
    output = output.replace('<!--$[team]-->', bout.teamMode)
    output = output.replaceAll('<!--$[id]-->', bout.regularId.id)
    output = output.replace('<!--$[month]-->', bout.expiry.month)
    output = output.replace('<!--$[date]-->', bout.expiry.date)
    output = output.replace('<!--$[year]-->', bout.expiry.year)
    output = output.replace('<!--$[hour]-->', bout.expiry.hour)
    output = output.replace('<!--$[minutes]-->', bout.expiry.minutes)
    output = output.replace('<!--$[_1]-->', bout._1)
    output = output.replace('<!--$[_2]-->', bout._2)
    output = output.replace('<!--$[_3]-->', bout._3)
    output = output.replaceAll('<!--$[entry]-->', bout.entry)
    res.send(output);
}     
exports.homeProductPayment = async (req, res)=>{
    let id = req.query.id;
    let bouts = await boutsModel.find({'regularId.id': id});
    bouts = bouts[0];
    let output = paymentPug.replace('<!--$[id]-->', bouts.regularId.id)
    output = output.replace('<!--$[entry]-->', bouts.entry)
    res.send(output)
}
exports.homeProductPaymentPost = async (req, res)=>{
    req.user = "8235681352";
    let user = await usersModel.find({phone: req.user});
    let uid = user[0].uid;
    let bouts = await boutsModel.find({'regularId.id': req.query.id});
    let id = bouts[0].uid;
    let userHistoryModel = usersDB.model(uid, userHistorySchema);
    userHistoryModel.create({
        status: "upcoming",
        boutsId: id
    }).then((value)=>{
    }, (err)=>{
    });
    res.redirect('/contest')
}
exports.contest = async (req, res)=>{
    req.user = "8235681352";
    if(!req.user){
        res.redirect('/')
        return
    };
    let user = await usersModel.find({phone: req.user});
    let uid = user[0].uid;
    let userHistoryModel = usersDB.model(uid, userHistorySchema);
    let userUpcomingContest = await userHistoryModel.find({status: "upcoming"});
    userUpcomingContest = userUpcomingContest.map((obj)=>{
        return obj.boutsId
    });
    let arr = [];
    // userUpcomingContest.forEach(async (element) => {
    //     let bouts = await boutsModel.find({uid: element});
    //     arr.push(bouts)
    //     arr.push({name: "dheeraj"})
    //     console.log("inside foreach...");
    // });
    for (const iterator of userUpcomingContest) {
        let bouts = await boutsModel.find({uid: iterator});
        arr.push(bouts[0])
    }
    bouts = arr.map((obj)=>{
        let output = boutsPug.replace('<!--$[mode]-->', obj.gameMode)
        output = output.replace('<!--$[map]-->', obj.map)
        output = output.replace('<!--$[team]-->', obj.teamMode)
        output = output.replaceAll('<!--$[id]-->', obj.regularId.id)
        output = output.replace('<!--$[map]-->', obj.map)
        output = output.replace('<!--$[month]-->', obj.expiry.month)
        output = output.replace('<!--$[date]-->', obj.expiry.date)
        output = output.replace('<!--$[year]-->', obj.expiry.year)
        output = output.replace('<!--$[hour]-->', obj.expiry.hour)
        output = output.replace('<!--$[minutes]-->', obj.expiry.minutes)
        output = output.replace('<!--$[_1]-->', obj._1)
        output = output.replace('<!--$[_2]-->', obj._2)
        output = output.replace('<!--$[_3]-->', obj._3)
        output = output.replace('<!--$[entry]-->', obj.entry)

        return output;
    });
    bouts = bouts.join('')
    let contest = index.replace('<!--$[toggle-C]-->', 'toggle')
    contest = contest.replace('<!--$[page]-->', contestPug)
    contest = contest.replace('<!--$[name]-->', user[0].name)
    contest = contest.replace('<!--$[uid]-->', user[0].uid)
    contest = contest.replace('<!--$[contest]-->', bouts);
    res.send(contest)
}     
exports.tournament = async (req, res)=>{
    let tournament = index.replace('<!--$[toggle-T]-->', 'toggle')
    tournament = tournament.replace('<!--$[page]-->', 'Comming Soon')
    res.send(tournament)
}   
exports.leaderboard = async (req, res)=>{
    let leaderboard = index.replace('<!--$[toggle-L]-->', 'toggle')
    leaderboard = leaderboard.replace('<!--$[page]-->', 'Comming Soon')
    res.send(leaderboard)
}     
exports.profile = async (req, res)=>{
    req.user = "8235681352";
    let user = await usersModel.find({phone: req.user});
    let profile = index.replace('<!--$[toggle-P]-->', 'toggle')
    profile = profile.replace('<!--$[page]-->', profilePug),
    profile = profile.replace('<!--$[name]-->', user[0].name),
    profile = profile.replace('<!--$[uid]-->', user[0].ffuid),
    profile = profile.replace('<!--$[deposite]-->', user[0].deposite),
    profile = profile.replace('<!--$[phone]-->', user[0].phone),
    profile = profile.replace('<!--$[mail]-->', user[0].mail),
    res.send(profile)
}
exports.notification = async (req, res)=>{
    res.send("you are in notification section...")
}
exports.support = async (req, res)=>{
    res.send("you are in support section...")
}     
 