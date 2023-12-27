import mongoose, { MongooseError, mongo } from "mongoose";
import { MONGODB_URI } from "./config";


export const connectDB = async () => {
   try {
    await mongoose.connect(MONGODB_URI)
   mongoose.connection.on('connection', ()=> console.log('Connected to mongoDB'))
    
   } catch (error) {
    if (error instanceof MongooseError){
        mongoose.connection.off('connection', ()=> console.log('Failed to connect to mongoDB'))
        console.log(error)
    }
    
    
   }
  
} 