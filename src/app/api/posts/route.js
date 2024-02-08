import connectMongoDB from '@/database/db'
import { NextResponse } from 'next/server'
 
export async function GET() {
    const db= await connectMongoDB()

  return NextResponse.json({text:"db connect"})
}