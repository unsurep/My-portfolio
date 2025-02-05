import mongoose from "mongoose";

const registerSchema = new mongoose.Schema ({

    name:{
        type:String,
        required:true
    },

    email: {
        type:String,
        required:true
    },

    subject: {
        type:String,
        required:true
    },

    message: {
        type:String,
        required:true
    },
}, {timestamps:true});

const registerModel = mongoose.models.register || mongoose.model ('register', registerSchema);

export default registerModel;