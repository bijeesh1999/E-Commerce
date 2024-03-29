const express = require("express");
require("dotenv").config();
const order=require("../mongoDb/models/orderSchema")
const payProduct=require("../mongoDb/models/paymentSchema")
const user=require("../mongoDb/models/userSchema");
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 10 });



const stripe = require("stripe")(process.env.PAYMENT_PRIVATE_KEY);

const payment = async (req, res) => {
  const cartData = req.body;
  // console.log("userName:",cartData);

  const producrOrder=await order.create({
    cartData:cartData.products,
    userId:cartData.id,
    totalAmount:cartData.total,
    userName:cartData.userName,
    orderId:uid.rnd()
  })


  let line_items;
    line_items = cartData.products.map((data) => {
      return {
        price_data: {
          currency: "INR",
          product_data: {
            name: data.ProductName,
            images: [data.images[0]],
          },
          unit_amount: (data.mrp - data.discount) * 100,
        },
        quantity: 1,
      };;
    });



  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `http://localhost:3000/success/${producrOrder.id}`,
      cancel_url: "http://localhost:3000/cancel",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["IN","US"],
      }
    });

    const payment=await payProduct.create({
      paymentID:session.id,
      orderID:producrOrder.id
    })


    res.status(200).json( {url:session.url} );
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};


const getPayment= async (req,res)=>{
  const {orderID}=req.params
  const paymentData= await payProduct.find(orderID)
  if(paymentData){
  const session = await stripe.checkout.sessions.retrieve(paymentData[0].paymentID)
  res.status(200).send(session.status)
  if(session.status === "complete"){
    
     const updatedData= await order.findByIdAndUpdate(req.params.id,{
      status:session.status,
      shippingAddress:session.shipping_details.address,
      billingAddress:session.customer_details.address,
      // userName:session.customer_details.name,
    });
     if (updatedData){ 
        let singleUser= await user.findByIdAndUpdate(updatedData.userId,{
          shippingAddress:session.shipping_details.address,
          billingAddress:session.customer_details.address,
        })
    } 
}
console.log(session);
}}

module.exports = {payment,getPayment};
