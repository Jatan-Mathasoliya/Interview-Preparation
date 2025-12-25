import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = 2007;

app.use(express.json());


app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})