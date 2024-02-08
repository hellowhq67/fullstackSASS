import connectMongoDB from "@/database/db";
import User  from '@/model/user'
import { NextResponse } from "next/server";
export async function GET (){
    await connectMongoDB()
    const users = await User.find()
    return NextResponse.json({users})
}
export async function DELETE(req) {
    // Ensure only DELETE method is allowed
    if (req.method !== 'DELETE') {
      return NextResponse.error(new Error('Method Not Allowed'), { status: 405 });
    }
  
    // Connect to MongoDB
    await connectMongoDB();
  
    // Get user ID from request query parameters
    const userId = req.query.id;
  
    try {
      // Find user by ID
      const user = await User.findById(userId);
  
      // If user not found, return 404 error
      if (!user) {
        return NextResponse.error(new Error('User not found'), { status: 404 });
      }
  
      // Delete the user
      await user.remove();
  
      // Return success message
      return NextResponse.json({ message: 'User deleted successfully' });
    } catch (error) {
      // If any error occurs, return 500 error
      console.error('Error deleting user:', error);
      return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
    }
  }