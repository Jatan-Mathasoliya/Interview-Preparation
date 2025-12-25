import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRoutes from "./Routes/auth.routes.js";
import protectedRoute from "./Routes/protected.route.js";

dotenv.config();

const app = express();
const PORT = 5005;

app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("Connected to MongoDB");
    }
    ).catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });

app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoute);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})