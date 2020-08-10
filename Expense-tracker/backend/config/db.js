const mongoose = require("mongoose");

const connectdb = async () => {
    try {
        const conn = mongoose.connect(process.env.MONGO_URI,{
          useNewUrlParser:true,
          useCreateIndex:true,
          useUnifiedTopology:true  
        });
        console.log("DB connected");
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
}

module.exports = connectdb;