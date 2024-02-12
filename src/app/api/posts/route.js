import { NextResponse } from 'next/server';
import connectMongoDB from '@/database/db';
import Post from '@/model/posts'; // Import the Post model

export async function GET() {
  await connectMongoDB();
  return NextResponse.json({ text: "db connect" });
}

export async function POST(request) {
  try {
    await connectMongoDB();

    const { useID, name, title, desc, imageUrl } = await request.json();

    await Post.create({
      useID,
      name,
      title,
      desc,
      imageUrl
    });

    return NextResponse.json({ message: "Topic Created" }, { status: 201 });
  } catch (error) {
    console.error("Error creating post:", error);
    return NextResponse.error(error);
  }
}
