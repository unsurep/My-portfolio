import { dbConnect } from "@/utilities/dbConnect";
import registerModel from "@/models/register";
import { NextResponse } from "next/server";


export const POST =async (res)=>{
    try {
        // frontend incoming data
        const {name, email, subject, message} = await res.json();

        // connect backend to db
        await dbConnect();

        // storing frontend valies to the database
        const user = new registerModel ({name, email, subject, message});
        await user.save();

        if (!user){
            return new NextResponse(JSON.stringify({msg:'message not sent'}), {status:400});
        }

        else return new NextResponse(JSON.stringify({msg:'message sent'}), {status:201}

        )   
    } 
    catch (error) {
        return new NextResponse(JSON.stringify({msg:'Server error! Try later'}), {status:500});
        
    }
}