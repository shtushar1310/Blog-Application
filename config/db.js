import mongoose from "mongoose";

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI  ||'mongodb://localhost:27017/BLOG-APPLICATION') 
        console.log("MONGODB CONNECTED SUCCESSFULLY");
        
    } catch (error) {
        console.log('error for db file:',error)
    }
}

export default connectDB;