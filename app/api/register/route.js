import { dbConnect } from "@/utilities/dbConnect";
import registerModel from "@/models/register";
import { NextResponse } from "next/server";

// Enable CORS
const corsHeaders = {
    "Access-Control-Allow-Origin": "*", 
    "Access-Control-Allow-Methods": "POST, OPTIONS", 
    "Access-Control-Allow-Headers": "Content-Type, Authorization", 
};

export async function OPTIONS() {
    return new NextResponse(null, { status: 200, headers: corsHeaders });
}


export async function POST(req) {
    try {
        // frontend incoming data
        const {name, email, subject, message} = await req.json();

        // connect backend to db
        await dbConnect();

        // save messages on the database
        const user = new registerModel ({name, email, subject, message});
        await user.save();

        if (!user){
            return new NextResponse(JSON.stringify({msg:'Message not sent'}), {status:400, header: corsHeaders });
        }

        else return new NextResponse(JSON.stringify({msg:'Message sent'}), {status:201, headers: corsHeaders}

        );
    } 
    catch (error) {
        return new NextResponse(JSON.stringify({msg:'Server error! Try later'}), {status:500, header: corsHeaders });
        
    }
}