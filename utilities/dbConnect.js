import mongoose from "mongoose";

// track connection globally
let isConnected = globalThis.isConnected || false;


export const dbConnect = async ()=>{
    mongoose.set('strictQuery', true);

    // check if mongodb is defined
    if(!process.env.MONGODB_URL) {
        console.error("❌ MONGODB-URL is not set")
        return;
    }

    // check if db is already connected
    if (isConnected) {
        console.log ('MongoDB is already connected');
        return;
    }

    try {
        // establish db connection
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        // database should be connected if everything goes well
        
        isConnected= true;
        globalThis.isConnected = true
        console.log('✅ MongoDB connected success')

    } catch (error) {
        console.error('❌ MongoDB connection error', error)
        
    }

}

