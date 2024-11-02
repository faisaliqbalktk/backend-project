// require ('dotenv').config({path: './env'});
import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import {app} from "./app.js";

dotenv.config({
  path: './env'
});

connectDB()
  .then(() => {
    console.log("Connected to MongoDB successfully!!!");

    const PORT = process.env.PORT || 8000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MONGODB connection failed!!! ", err);
    process.exit(1); // Exit the application if DB connection fails
  });
/*
import express from "express";
const app = express();
// Connect to MongoDB

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}}`);
    app.on("error", (error) => {
        console.log("ERROR: ", error);
        throw error;
    })

    app.listen(process.env.PORT, () => {
        console.log(`App is listening on port ${process.env.PORT}`);
    })

  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
})();
*/
