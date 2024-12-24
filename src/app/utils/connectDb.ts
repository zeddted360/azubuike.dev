import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI || "";
  const isConnected = { isConnected: false };
  try {
    if (isConnected.isConnected) {
        console.log("database already connected");
        return;
    }
    const connect = await mongoose.connect(uri);
    console.log("connected to the database");
      isConnected.isConnected = connect.STATES.connected ? true : false;
  } catch (error) {
    console.error(error instanceof Error && error.message);
  }
};
