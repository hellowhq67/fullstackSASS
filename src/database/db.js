import mongoose from "mongoose";


const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://floorapp355:J1YmCDnTvZsAvGmt@floorapp.ysgurtu.mongodb.net/my-app");
    console.log("Connected to MongoDB.");
  } catch (error) {
    console.log(error);
  }
};

export default connectMongoDB;