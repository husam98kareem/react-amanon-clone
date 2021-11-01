const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51Jp6diHFobTe24Uuo4BkJU6trudJwG6Xs4yT2AtOH8yqMiHtsvcUgQiP3YVWyhl38iHOb5OZt3S0EFM3eCVz36vt00sADDkFtq')

//API 

// APP config
const app = express();

// Middlewares

app.use(cors({ origin: true }));
app.use(express.json());



// API routes

app.get('/', (request, response) => response.status(200).send('hello world'))

// listen command

exports.api = functions.https.onRequest(app);

app.post('/payments/create', async(request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });

    //ok -created

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,

    })
})

//// http://localhost:5001/clone-375bb/us-central1/api