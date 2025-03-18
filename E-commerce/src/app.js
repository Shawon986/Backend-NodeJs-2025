const express = require('express');
const rateLimit = require("express-rate-limit");
const { configureRouter } = require('./router');
const { logMiddleware } = require('./middleware');
const { errorHandler } = require('./middleware/errorHandler');
const { connectDb } = require('./db');
const {config} = require('./config/config');

const app = express();


connectDb();

app.use(express.json());



app.use(logMiddleware);
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 10, // Limit each IP to 10 requests per `window` (here, per 1 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
})

// Apply the rate limiting middleware to all requests.
app.use(limiter);

const port =  config.PORT;

configureRouter(app);

app.use(errorHandler);

app.listen(port, ()=>{
    console.log(`App is running on port ${port}`);
});

