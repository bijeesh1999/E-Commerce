const express=require ("express");
const {payment,getPayment}=require('../controllers/paymentController')

const Router=express.Router();



Router.route("/").post(payment)
Router.route("/:id").get(getPayment)



module.exports = Router
