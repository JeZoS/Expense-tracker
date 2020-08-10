const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cors = require("cors");
const transaction = require("./routes/transaction")
const connectdb = require('./config/db')

dotenv.config({path:"./config/config.env"});

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan());
connectdb();

app.use("/api/v1/transactions",transaction);

const port = process.env.PORT || 5000

app.listen(port,console.log(`server running on port ${port}`));