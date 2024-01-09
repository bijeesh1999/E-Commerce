const express=require ("express");
const payment=require('../controllers/paymentController')

const Router=express.Router();



Router.route("/").post(payment)



module.exports = Router
