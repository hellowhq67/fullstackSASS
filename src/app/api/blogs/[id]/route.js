import connectMongoDB from "@/database/db";
import Topic from "@/model/topic";
import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function GET (request, {params}){
    const {id} = params;
    await connectMongoDB();
    const topics = await Topic.findOne({_id:id});
    return NextResponse.json({topics},{status:200});
}