import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);

    const connection = mongoose.connection;

    connection.on("connected", function () {
      console.log("Connected to MongoDB");
    });

    connection.on("error", function (err) {
      console.log("Error connecting to MongoDB: " + err);
    });
  } catch (error) {
    console.log(`Error connecting to MongoDB \n ${error}`);
  }
}
