const express = require('express');
const app = express();

// importing custome modules
const ffcontroller = require('./../../controller/ffcontroller/ffcontroller')

const router = express.Router();

router.route('/')
    .get(ffcontroller.home)
 
router.route('/home/product')
    .get(ffcontroller.homeProduct)
 
router.route('/home/product/payment')
    .get(ffcontroller.homeProductPayment)
    .post(ffcontroller.homeProductPaymentPost)
 
router.route('/contest')
    .get(ffcontroller.contest)
 
router.route('/profile')
    .get(ffcontroller.profile)
 
router.route('/tournament')
    .get(ffcontroller.tournament)
 
router.route('/leaderboard')
    .get(ffcontroller.leaderboard)
 
router.route('/notification')
    .get(ffcontroller.notification)
 
router.route('/support')
    .get(ffcontroller.support)
 
 
module.exports = router;