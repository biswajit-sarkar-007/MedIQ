// Vercel serverless 

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const webinarRoutes = require("../routes/webinars");

// const app = express();


// app.use(cors());
// app.use(express.json());
// app.use("/", webinarRoutes);


// let isConnected = false;

// async function connectToDatabase() {
//   if (!isConnected) {
//     await mongoose.connect(process.env.MONGO_URI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     isConnected = true;
//     console.log("MongoDB connected");
//   }
// }


// module.exports = async (req, res) => {
//   await connectToDatabase();
//   return app(req, res); 
// };
