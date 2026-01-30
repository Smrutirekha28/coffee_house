const mongoose = require("mongoose");
const connectDB =async() =>{
    try {
        const connect = await mongoose.connect(process.env.mongo_url);
        console.log(`DB connected: ${connect.connection.host}`);
        
    } catch (err) {
        console.log(`connection error: ${err}`);
        
    }
};

module.exports = connectDB;