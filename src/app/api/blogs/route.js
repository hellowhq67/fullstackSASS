import connectMongoDB from '@/database/db';
import Topic from '@/model/topic';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();
  const topics = await Topic.find();
  return NextResponse.json({ topics });
}
export async function POST(request) {

  const { title,desc,img, link } = await request.json();

  await connectMongoDB()
  await Topic.create({ title,desc,img,link });
  return NextResponse.json({ message: "Topic Created" }, { status: 201 });
}