
import connectMongoDB from "@/database/db";
import User from '@/model/user'
import { NextResponse } from "next/server";
export async function  DELETE (req,content){
    const userid = content.params.userid;
    const record = {_id:userid}
    await connectMongoDB()
    const res = await User.deleteOne(record)
    return NextResponse.json({res,success:true})
    
}