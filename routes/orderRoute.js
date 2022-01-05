const express = require("express");
const router = express.Router();
const stripe = require("stripe")(
  "sk_test_51KDQqESBjdsKjQ8MA5JTsmTlN3sZtUbPkEVBDBgOTLzT1mZas3PdmECmxIR7y2AoDOyHWYSLNZ08RhlnSyw5TEA100miKDnunw"
);
const { v4: uuidv4 } = require("uuid");
const order = require("../models/order");

router.post("/placeOrder", async (req, res) => {
  const { token, subTotal, currentUser, cartItem } = req.body;

  try {
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });
    const payment = await stripe.charges.create(
      {
        amount: subTotal * 100,
        currency: "inr",
        customer: customer.id,
        receipt_email: token.email,
      },
      {
        idempotencyKey: uuidv4(),
      }
    );
    if (payment) {
      const NewOrder = new order({
        name: currentUser.name,
        email: currentUser.email,
        userid: currentUser._id,
        orderItem: cartItem,
        orderAmount: subTotal,

        shippingAddress: {
          street: token.card.address_line1,
          city: token.card.address_city,
          country: token.card.address_country,
          zip: token.card.address_zip,
        },
        transactionId: payment.source.id,
      });
      NewOrder.save();
      res.send("Order Place successfully");
    } else {
      res.send("Payment failed");
    }
  } catch (error) {
    return res.status(404).json({ message: "Something went wrong " + error });
  }
});

router.post("/getuserorder", async (req, res) => {
  const { userid } = req.body;

  try {
    const orders = await order.find({ userid: userid });
    res.send(orders);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong " + error });
  }
});

router.get("/getallorders", async (req, res) => {
  try {
    const orders = await order.find({});
    res.send(orders);
  } catch (error) {
    return res.status(404).json({ message: "something went wrong" + error });
  }
});
router.post("/deliverOrder", async (req, res) => {
  const {orderid} = req.body;
  console.log(orderid)
  try {
    const orders = await order.findOne({ _id: orderid });
    orders.isDelivered = true;
    await orders.save();
    res.send("order delivered successfully");
  } catch (error) {
    return res.status(404).json({ message: "something went wrong" + error });
  }
});

module.exports = router;
