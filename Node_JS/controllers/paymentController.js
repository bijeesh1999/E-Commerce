const express = require("express");
require("dotenv").config();

const stripe = require("stripe")(process.env.PAYMENT_PRIVATE_KEY);

const payment = async (req, res) => {
  const cartData = req.body;

  let line_items;

  if (Array.isArray(cartData)) {
    console.log(cartData);
    line_items = cartData.map((data) => {
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
      };
    });

  }

  try {
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
      billing_address_collection: "required",
      shipping_address_collection: {
        allowed_countries: ["IN","US"],
      }
    });
    res.status(200).json({ session });
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = payment;
