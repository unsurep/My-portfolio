import mongoose from "mongoose";

// track connection
let isConnected = false;

// disable mongoose timeout
export const dbConnect = async ()=>{
    mongoose.set('strictQuery', true);

    // check if db is connected
    if (isConnected) {
        console.log ('MongoDB is connected');
        return;
    }

    try {
        // establish db connection
        await mongoose.connect(process.env.MONGODB_URL, {});

        // database should be connected if everything goes well
        isConnected= true;
        console.log('MongoDB connected')
    } catch (error) {
        console.error('MongoDB connection error', error)
        
    }

}

