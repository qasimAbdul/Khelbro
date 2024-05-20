const mongoose = require("mongoose")

const DB = async()=>{
    try {
        const conn = await mongoose.connect(process.env.DATABASE)
        console.log(`database connected ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = DB