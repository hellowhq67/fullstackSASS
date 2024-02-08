import connectDB from "../../../database/db";
import { NextResponse } from "next/server";
import Topic from "../../../model/topic";

export async function GET() {
  await connectDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
export async function POST(request) {

  const { title,desc,img,pdf, createdAt } = await request.json();
  await connectDB();
  await Topic.create({ title,desc,img,pdf,createdAt });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}